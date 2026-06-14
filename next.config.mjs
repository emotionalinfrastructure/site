/** @type {import('next').NextConfig} */
const isStaticExport = process.env.GITHUB_PAGES === "true";
const repoName = "site";

const nextConfig = {
  output: isStaticExport ? "export" : undefined,
  basePath: isStaticExport ? `/${repoName}` : undefined,
  assetPrefix: isStaticExport ? `/${repoName}/` : undefined,
  trailingSlash: isStaticExport,
  images: {
    unoptimized: isStaticExport
  }
};

export default nextConfig;
