export default {
  server: {
    proxy: {
      '/__/auth': {
        target: 'https://herman-angular-tests.firebaseapp.com',
        changeOrigin: true,
      },
    },
  },
};
