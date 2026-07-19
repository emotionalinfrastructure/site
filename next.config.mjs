/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === "true";
const customDomain = process.env.PAGES_CUSTOM_DOMAIN || "";
const repoName = "site";

// The branded production site is deployed as a static export from the domain
// root. GitHub Pages remains a fallback/supporting deployment under /site
// unless a GitHub Pages custom domain is explicitly configured.
const useGitHubProjectPath = isGitHubPages && !customDomain;

const nextConfig = {
  output: "export",
  basePath: useGitHubProjectPath ? `/${repoName}` : undefined,
  assetPrefix: useGitHubProjectPath ? `/${repoName}/` : undefined,
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
