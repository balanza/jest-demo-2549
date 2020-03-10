const globalSetup = async () => {
    // setting up global variables
    (global as any).foo = 'my foo value';
}

module.exports = globalSetup;
