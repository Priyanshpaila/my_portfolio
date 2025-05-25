/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/my_portfolio", // 👈 your repo name
  assetPrefix: "/my_portfolio", // 👈 for static assets
};

module.exports = nextConfig;
