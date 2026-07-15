/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {}, 
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.watchOptions = {
        ignored: /node_modules|(\.next)/,
        aggregateTimeout: 300,
        poll: 1000,
      };
    }
    return config;
  },
};

export default nextConfig;
