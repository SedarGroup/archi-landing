const path = require("path");

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "css")],
  },
  trailingSlash: true,
  devIndicators: {
    buildActivity: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: "/services/building-permit",
        destination: "/services/acheter-un-appartement",
        permanent: true,
      },
      {
        source: "/services/find-architect",
        destination: "/services/trouver-un-architecte",
        permanent: true,
      },
    ];
  },
};
