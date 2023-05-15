/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    mongoDB_username: "INSERT", 
    mongoDB_password: "INSERT",
    mongoDB_cluster: "INSTER", 
    mongoDB_database: "INSERT",
  }
}

module.exports = nextConfig
