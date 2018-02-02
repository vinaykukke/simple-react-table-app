// REFER: https://github.com/facebook/jest/issues/4545
// This is the fix for a polyfill warning that react 16 gives with jest
// FB says that there will be a fix for this soon.

global.requestAnimationFrame = (callback) => {
  setTimeout(callback, 0);
};
