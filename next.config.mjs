import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  devIndicators: false,
  allowedDevOrigins: ['https://memo.apescasio.fr'], // 👈 Add this line
};

export default withMDX(config);
