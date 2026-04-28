import { imageHosts } from './image-hosts.config.mjs';

const isGithubPages = process.env.GITHUB_PAGES === 'true';
const repoName = 'medirendez';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  basePath: isGithubPages ? `/${repoName}` : "",
  assetPrefix: isGithubPages ? `/${repoName}/` : "",

  trailingSlash: true,

  images: {
    unoptimized: true,
    remotePatterns: imageHosts,
  },

  productionBrowserSourceMaps: false,

  distDir: ".next",

  typescript: {
    ignoreBuildErrors: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;