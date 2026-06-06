/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  cacheComponents: true,
  reactCompiler: true,
  experimental: {
    useCache: true,
    turbopackFileSystemCacheForDev: true,
  },
}

module.exports = nextConfig
