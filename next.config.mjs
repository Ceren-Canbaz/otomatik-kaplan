/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === "true"
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "otomatik-kaplan"
const basePath = isGithubPages ? `/${repoName}` : ""

const nextConfig = {
  output: isGithubPages ? "export" : undefined,
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
