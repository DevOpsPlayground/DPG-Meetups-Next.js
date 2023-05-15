/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    mongoDB_username: "", 
    mongoDB_password: "",
    mongoDB_cluster: "", 
    mongoDB_database: "",
  }
}

module.exports = nextConfig
