/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { formats: ['image/webp'] },
  reactStrictMode: true,
  redirects: async () => [
    {
      destination: 'https://pixel.essenmitsosse.de',
      permanent: true,
      source: '/pixel',
    },
  ],
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
