/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    // domains: [
    //   "teker.co",
    //   "teker.maxapex.net",
    //   "play.google.com",
    //   "via.placeholder.com"
    // ],
   
    remotePatterns: [
      {
        protocol: "https",
        hostname: "teker.co",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "teker.maxapex.net",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "play.google.com",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "flagcdn.com",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "www.notion.so",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "lh5.googleusercontent.com",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "s3-us-west-2.amazonaws.com",
        pathname: "/**"
      }
    ]
  },
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT"
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
          }
        ]
      }
    ];
  }
};

module.exports = nextConfig;
