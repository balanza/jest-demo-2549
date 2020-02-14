# Jest demo to demonstrate issue https://github.com/facebook/jest/issues/2549

## Scenarios

### Default

By default Jest uses sandbox isolation to prevent tests influencing other tests by changing the global environment.
In theory that's a nice thing to have but in reality it is annyoing as hell because it breaks important JavaScript
internals like instanceof checks. So all tests in this project fail because of this.

To reproduce this scenario disable `testEnvironment` in `jest.config.js` and run `npm install` and `npm test`. Doesn't matter if you use Jest 24 or 25.


### Working workaround

The sandbox isolation can be disabled by specifying a custom test environment
(See `src/test/SingleContextNodeEnvironment.js`). By using this workaround all tests share the same global
environment. They can influence each other (Which is what Jest tries to prevent) but the big advantage is, that
JavaSCript works again as expected and all tests in this project succeed.

To reproduce this scenario enable `testEnvironment` in `jest.config.js`, downgrade jest to 24.9.0 in `package.json` (Does not work with Jest 25!)
and run `npm install` and `npm test`.

### Broken workaround

Unfortunately the workaround is no longer working with Jest 25. When running the tests then Jest fails with the
error message `describe is not defined`.

To reproduce this scenaro enable `testEnvironment` in `jest.config.js`, upgrade jest to 25.1.0 in `package.json`
and run `npm install` and `npm test`
