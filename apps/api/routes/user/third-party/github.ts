import { Router } from "express";
const router: Router = Router();
import User from "@/models/user";
import axios from "axios";
import { generateToken } from "@/utils/jwt";

router.get("/", async (req, res) => {
  const githubAuthURL = `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&redirect_uri=${process.env.GITHUB_CALLBACK_URL}&scope=user`;
  res.redirect(githubAuthURL);
});

router.get("/callback", async (req, res) => {
  try {
    const { code } = req.query;

    if (!code || typeof code !== "string") {
      res.redirect(
        `${process.env.NEXT_PUBLIC_BASE_URL}/login?error=Missing or invalid code parameter`,
      );
      return;
    }

    const tokenResponse = await axios({
      url: "https://github.com/login/oauth/access_token",
      method: "POST",
      data: {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      },
      headers: {
        accept: "application/json",
      },
    });

    const accessToken = tokenResponse.data.access_token;

    if (!accessToken) {
      res.redirect(
        `${process.env.NEXT_PUBLIC_BASE_URL}/login?error=Failed to obtain access token`,
      );
      return;
    }

    const userResponse = await axios.get("https://api.github.com/user", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const githubUser = userResponse.data;

    let email = githubUser.email;

    if (!email) {
      const emailRes = await axios.get("https://api.github.com/user/emails", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const primaryEmail = emailRes.data.find(
        (e: any) => e.primary && e.verified,
      );
      if (!primaryEmail) {
        res.redirect(
          `${process.env.NEXT_PUBLIC_BASE_URL}/login?error=No verified email found`,
        );
        return;
      }
      email = primaryEmail.email;
    }

    let user = await User.findOne({ email });
    if (user) {
      if (user.provider === "github") {
        user.username = githubUser.login;
        user.name = githubUser.name || githubUser.login;
        user.picture = githubUser.avatar_url;
        user.providerAccessToken = accessToken;
        await user.save();
      } else {
        res.redirect(
          `${process.env.NEXT_PUBLIC_BASE_URL}/login?error=Email already registered with a different provider`,
        );
        return;
      }
    } else {
      user = new User({
        name: githubUser.name || githubUser.login,
        username: githubUser.login,
        email,
        picture: githubUser.avatar_url,
        isVerified: true,
        provider: "github",
        providerId: githubUser.id,
        providerAccessToken: accessToken,
      });

      await user.save();
    }

    const token = generateToken({
      id: user._id,
      username: user.username,
      email: user.email,
    });

    res.redirect(`${process.env.NEXT_PUBLIC_BASE_URL}/auth?token=${token}`);
  } catch (error) {
    res.redirect(
      `${process.env.NEXT_PUBLIC_BASE_URL}/login?error=An error occurred during GitHub authentication`,
    );

    console.error("Error in /github/callback route:", error);
  }
});

export default router;
