module.exports = {
    displayName: "node",
    roots: [ "<rootDir>/src" ],
    testEnvironment: "./src/test/SingleContextNodeEnvironment",
    testMatch: [
        "<rootDir>/src/test/**/*.test.js"
    ],
    globalSetup: './src/setup.js'
};
