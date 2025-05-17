const github = {
  redirect: async () => {
    try {
      const githubAuthURL = `${process.env.NEXT_PUBLIC_API_URL}/user/github`;
      window.location.href = githubAuthURL;
    } catch (error) {
      console.error("Error redirecting to GitHub:", error);
    }
  },
};

export default github;
