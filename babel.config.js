module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    env: {
      plugins: ['react-native-paper/babel'],
    },
  };
};
