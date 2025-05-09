module.exports = {
  apps: [
    {
      namespace: "ideelab",
      name: "web",
      script: "pnpm start",  
      cwd: "./apps/web", 
      watch: ".",  
      autorestart: true,  
    },
    {
      namespace: "ideelab",
      name: "api",
      script: "pnpm start",  
      cwd: "./apps/api",
      watch: ".",  
      autorestart: true,
    },
  ],
};
