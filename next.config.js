/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
      },
      images: {
        loader: 'akamai',
        path: '',
      },
      trailingSlash: true,
}

module.exports = nextConfig
