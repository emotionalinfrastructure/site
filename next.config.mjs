/** @type {import('next').NextConfig} */
const isStaticExport = process.env.GITHUB_PAGES === "true";

const nextConfig = {
  output: isStaticExport ? "export" : undefined,
  trailingSlash: isStaticExport,
  images: {
    unoptimized: isStaticExport
  }
};

export default nextConfig;
