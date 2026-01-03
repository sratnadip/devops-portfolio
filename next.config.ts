/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/devops-portfolio",
  assetPrefix: "/devops-portfolio/",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
