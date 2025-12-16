export default {
  server: {
    proxy: {
      '/auth': 'http://localhost:8081', // forward /auth requests to backend
    },
  },
};