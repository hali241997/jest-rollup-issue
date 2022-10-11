/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const withTM = require("next-transpile-modules")(["@issue/web-core"]);

module.exports = withTM(nextConfig);
