/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/mistral-demo',
        destination: 'https://mistral-demo.deharo.dev',
        permanent: true
      }
    ];
  }
};

module.exports = nextConfig;

