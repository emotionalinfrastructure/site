/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = "site";

const nextConfig = {
  output: isGithubPages ? "export" : undefined,
  basePath: isGithubPages ? `/${repoName}` : undefined,
  assetPrefix: isGithubPages ? `/${repoName}/` : undefined,
  trailingSlash: isGithubPages,
  images: {
    unoptimized: isGithubPages
  }
};

export default nextConfig;
