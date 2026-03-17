/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/motos',
        destination: '/marcas',
        permanent: true,
      },
      {
        source: '/motos/:path*',
        destination: '/marcas/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
