import { imageHosts } from './image-hosts.config.mjs';

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'medirendez';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",

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