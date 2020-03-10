module.exports = {
    displayName: "node",
    roots: [ "<rootDir>/src" ],
    testEnvironment: "./src/test/SingleContextNodeEnvironment",
    testMatch: [
        "<rootDir>/src/test/**/*.test.ts"
    ],
    globalSetup: './src/setup.ts',
    preset: "ts-jest",
    testPathIgnorePatterns: ["dist", "/node_modules"],
};
