/** @type {import('next').NextConfig} */
const isStaticExport = process.env.GITHUB_PAGES === "true";
// When the custom domain is bound (Settings → Pages → Custom domain), set the
// PAGES_CUSTOM_DOMAIN repository variable (e.g. "emotionalinfrastructure.org").
// The site then serves from the domain root, so no basePath/assetPrefix.
const customDomain = process.env.PAGES_CUSTOM_DOMAIN || "";
const repoName = "site";
const usePath = isStaticExport && !customDomain;

const nextConfig = {
  output: isStaticExport ? "export" : undefined,
  basePath: usePath ? `/${repoName}` : undefined,
  assetPrefix: usePath ? `/${repoName}/` : undefined,
  trailingSlash: isStaticExport,
  images: {
    unoptimized: isStaticExport
  }
};

export default nextConfig;
