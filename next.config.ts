import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    authInterrupts: true,
    useCache: true,
  },
  allowedDevOrigins: [
    'http://172.21.32.1:3000',
    'http://localhost:3000',
    'http://127.0.0.1:3000',
    'http://192.168.0.173:3000/',
    'http://192.168.0.173',
    '192.168.0.173'
  ]
};

export default nextConfig;
