const google = {
  redirect: async () => {
    try {
      const githubAuthURL = `${process.env.NEXT_PUBLIC_API_URL}/user/google`;
      window.location.href = githubAuthURL;
    } catch (error) {
      console.error("Error redirecting to Google:", error);
    }
  },
};

export default google;
