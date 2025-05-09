module.exports = {
  apps: [
    {
      namespace: "ideelab",
      name: "ideelab-web",
      script: "pnpm start",  
      cwd: "./apps/web", 
      watch: ".",  
      autorestart: true,  
    },
    {
      namespace: "ideelab",
      name: "ideelab-api",
      script: "pnpm start",  
      cwd: "./apps/api",
      watch: ".",  
      autorestart: true,
    },
  ],
};
