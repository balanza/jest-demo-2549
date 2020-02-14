const NodeEnvironment = require("jest-environment-node");

/**
 * Special node environment class for Jest which runs all scripts in the same context. This effectively disables
 * the sandbox isolation which is completely broken (See https://github.com/facebook/jest/issues/2549)
 */
module.exports = class extends NodeEnvironment {
    constructor(config, context) {
        super(config, context);
        this.global = global;
    }

    runScript(script) {
        return script.runInThisContext();
    }
}
