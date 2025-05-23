import { Router } from "express";
import { generateToken } from "utils/jwt";
import { createUser, findUserBy, updateUser } from "sql/queries/user";
import axios from "axios";

const router: Router = Router();

router.get("/github", async (req, res) => {
  const githubAuthURL = `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&redirect_uri=${process.env.GITHUB_CALLBACK_URL}&scope=user`;
  res.redirect(githubAuthURL);
});

router.get("/callback/github", async (req, res) => {
  try {
    const { code } = req.query;

    if (!code || typeof code !== "string") {
      const errorMessage = encodeURIComponent(
        "Missing or invalid code parameter",
      );
      res.redirect(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/error?msg=${errorMessage}`,
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
      const errorMessage = encodeURIComponent("GitHub authentication failed");
      res.redirect(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/error?msg=${errorMessage}`,
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
      const emails = emailRes.data;
      email = emails.find((email: any) => email.primary).email;
    }

    if (!email) {
      const errorMessage = encodeURIComponent(
        "We couldn't retrieve your GitHub email",
      );
      res.redirect(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/error?msg=${errorMessage}`,
      );
      return;
    }

    let user = await findUserBy("email", email);
    if (user) {
      if (user.provider === "github") {
        updateUser(user.id, {
          name: githubUser.name || githubUser.login || "IdeeLab User",
          username: githubUser.login,
          picture: githubUser.avatar_url,
        });
      } else {
        const errorMessage = encodeURIComponent(
          "Email already registered with another provider",
        );
        res.redirect(
          `${process.env.NEXT_PUBLIC_BASE_URL}/auth/error?msg=${errorMessage}`,
        );
        return;
      }
    } else {
      user = await createUser({
        name: githubUser.name || githubUser.login || "IdeeLab User",
        username: githubUser.login,
        email: email,
        password: "",
        picture: githubUser.avatar_url,
        provider: "github",
        verified: true,
      });
    }

    const token = generateToken({
      id: user.id,
      email: user.email,
    });

    res.redirect(`${process.env.NEXT_PUBLIC_BASE_URL}/auth?token=${token}`);
  } catch (error) {
    const errorMessage = encodeURIComponent(
      "GitHub authentication failed. Please try again.",
    );
    res.redirect(
      `${process.env.NEXT_PUBLIC_BASE_URL}/auth/error?msg=${errorMessage}`,
    );
  }
});

export default router;
