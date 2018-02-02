const babel = require('babel-core');
const tsc = require('typescript');
const babelConfig = require('./.babelrc.test.js');
const tsConfig = require('../../../tsconfig.json');

module.exports = {
  process(src, path) {
    if (path.endsWith(".js") || path.endsWith(".jsx")) {
      return babel.transform(src, babelConfig).code;
    } else if (path.endsWith(".ts") || path.endsWith(".tsx")) {
      const srcTransformedByTS = tsc.transpile(src, tsConfig.compilerOptions, path, []);
      return babel.transform(srcTransformedByTS, babelConfig).code;
    } else {
      console.log("Unknown file extension received for transforming.");
    }
    return src;
  }
}
