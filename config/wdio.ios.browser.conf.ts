export const config = {
    runner: 'local',
    tsConfigPath: '../tsconfig.json',
    specs: [
        '../test/specs/**/*.ts'
    ],
    exclude: [],
    maxInstances: 10,
    capabilities: [{
        port: 4723,
        browserName: "safari",
        platformName: "iOS",
        "wdio:maxInstances": 1,
        "appium:deviceName": "iPhone 15 Pro Max",
        "appium:platformVersion": "17.5",
        "appium:orientation": "PORTRAIT",
        "appium:automationName": "XCUITest",
        "appium:newCommandTimeout": 240,

    }],

    logLevel: 'info',
    bail: 0,
    waitforTimeout: 60000,
    connectionRetryTimeout: 60000,
    connectionRetryCount: 3,
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}
