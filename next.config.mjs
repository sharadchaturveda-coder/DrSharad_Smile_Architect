const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'http', // Changed to http
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
