/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "files.bikeindex.org",
      }
    ]
  }
}

module.exports = nextConfig
