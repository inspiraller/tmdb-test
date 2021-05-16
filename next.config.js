module.exports = {
  env: {
    api_key: process.env.api_key,
    api_read_access_token: process.env.api_read_access_token
  },
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/login',
        permanent: false
      }
    ];
  }
};
