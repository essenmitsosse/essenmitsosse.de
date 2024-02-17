/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { formats: ['image/webp'] },
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
