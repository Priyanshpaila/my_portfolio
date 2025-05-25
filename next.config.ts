/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // 👈 enables static export
  images: {
    unoptimized: true, // required if you used next/image
  },
};

module.exports = nextConfig;
