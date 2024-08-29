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
        platformName: 'Android',
        'appium:deviceName': 'DeviceAuto API 35',
        'appium:automationName': 'UiAutomator2',
        'appium:orientation': 'PORTRAIT',
        'appium:newCommandTimeout': 240,
        'appium:unicodeKeyboard': true,
        browserName: 'chrome',
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
