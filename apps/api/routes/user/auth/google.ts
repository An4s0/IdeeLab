import { Router } from "express";
import { generateToken } from "utils/jwt";
import { createUser, findUserBy, updateUser } from "sql/queries/user";
import generateStr from "utils/generateStr";
import axios from "axios";

const router: Router = Router();

router.get("/google", async (req, res) => {
  const googleAuthURL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.GOOGLE_CLIENT_ID}&redirect_uri=${process.env.GOOGLE_CALLBACK_URL}&response_type=code&scope=openid%20email%20profile&access_type=offline&prompt=consent`;
  res.redirect(googleAuthURL);
});

router.get("/callback/google", async (req, res) => {
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
      const errorMessage = encodeURIComponent("Google authentication failed");
      res.redirect(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/error?msg=${errorMessage}`,
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

    let user = await findUserBy("email", googleUser.email);

    if (user) {
      if (user.provider === "google") {
        await updateUser(user.id, {
          name: googleUser.name,
          username: generateStr(10),
          picture: googleUser.picture,
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
        name: googleUser.name || "IdeeLab User",
        email: googleUser.email,
        username: generateStr(10),
        password: "",
        picture: googleUser.picture,
        provider: "google",
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
      "Google authentication failed. Please try again.",
    );
    res.redirect(
      `${process.env.NEXT_PUBLIC_BASE_URL}/auth/error?msg=${errorMessage}`,
    );
  }
});

export default router;
