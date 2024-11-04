/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */

/** @type {import("next").NextConfig} */
const config = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.thefoodo.com",
      },
      {
        protocol: "https",
        hostname: "s3.eu-west-3.amazonaws.com",
      },
    ],
  },
};

export default config;
