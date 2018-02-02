module.exports = {
  "moduleFileExtensions": ["js", "jsx", "ts", "tsx"],
  ["moduleNameMapper"]: {
    // These take care of webpack's alias
    ["^Redux(.*)"]: "<rootDir>/src/client/redux$1",
    ["^Components(.*)"]: "<rootDir>/src/client/components$1",
    ["^Constants(.*)"]: "<rootDir>/src/client/constants$1",
    ["^Scenes(.*)"]: "<rootDir>/src/client/scenes$1",
    ["^Types(.*)"]: "<rootDir>/src/client/types$1",
    ["^Hoc(.*)"]: "<rootDir>/src/client/hoc$1",
  },
  // Test files to exclude. Note that node_modules are excluded by default, but
  // because we're overwriting the default array, they must be added again.
  testPathIgnorePatterns: ["<rootDir>/src/build/", "<rootDir>/node_modules/"],

  // Transform functions. Any file matching the following regexs will be
  // transpiled **synchronously** with the specified function.
  transform: {
    ["^.+\\.(js|jsx|ts|tsx)$"]: "<rootDir>/src/build/test/transformer.js"
  },
  testMatch: [
    "**/*.test.(js|jsx|tsx|ts)"
  ],
  modulePaths: ["<rootDir>/src/client/"],
  setupFiles: [
    "<rootDir>/__setups__/polyFillFix.js",
    "<rootDir>/__setups__/testSetup.js",
  ]
}
