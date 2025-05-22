// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/CV-PORTFOLIO",
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

module.exports = nextConfig;