import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 100],
  },
  async rewrites() {
    return [
      {
        source: "/order",
        has: [{type: 'cookie', key: 'show_checkout', value: 'true'}],
        destination: "/checkout"
      }
    ]
  }
};

export default nextConfig;
