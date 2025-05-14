import { Router } from "express";
const router: Router = Router();
import User from "@/models/user";
import axios from "axios";
import { generateToken } from "@/utils/jwt";

router.get("/", async (req, res) => {
  const googleAuthURL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.GOOGLE_CLIENT_ID}&redirect_uri=${process.env.GOOGLE_CALLBACK_URL}&response_type=code&scope=openid%20email%20profile&access_type=offline&prompt=consent`;
  res.redirect(googleAuthURL);
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
      url: "https://oauth2.googleapis.com/token",
      method: "POST",
      data: {
        client_id: process.env.GOOGLE_CLIENT_ID,
        client_secret: process.env.GOOGLE_CLIENT_SECRET,
        code,
        grant_type: "authorization_code",
        redirect_uri: process.env.GOOGLE_CALLBACK_URL,
      },
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    const { access_token, id_token } = tokenResponse.data;

    if (!access_token || !id_token) {
      res.redirect(
        `${process.env.NEXT_PUBLIC_BASE_URL}/login?error=Failed to obtain access token`,
      );
      return;
    }

    const userResponse = await axios.get(
      "https://www.googleapis.com/oauth2/v3/userinfo",
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      },
    );

    const googleUser = userResponse.data;

    let user = await User.findOne({ email: googleUser.email });

    if (user) {
      if (user.provider === "google") {
        user.username = googleUser.name;
        user.name = googleUser.name;
        user.picture = googleUser.picture;
        user.providerAccessToken = access_token;
        await user.save();
      } else {
        res.redirect(
          `${process.env.NEXT_PUBLIC_BASE_URL}/login?error=Email already registered with a different provider`,
        );
        return;
      }
    } else {
      user = new User({
        name: googleUser.name,
        username: googleUser.name,
        email: googleUser.email,
        picture: googleUser.picture,
        isVerified: googleUser.email_verified,
        provider: "google",
        providerId: googleUser.sub,
        providerAccessToken: access_token,
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
      `${process.env.NEXT_PUBLIC_BASE_URL}/login?error=An error occurred during Google authentication`,
    );

    console.error("Error in /google/callback route:", error);
  }
});

export default router;
