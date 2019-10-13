const { join } = require('path');
const { config } = require('./wdio.shared.conf');

config.specs = [
    './tests/specs/**/app*.spec.js',
];

//Define the path of the app location inside the 'appium:app' field under the capabilities.
config.capabilities = [
    {
        platformName: 'Android',
        maxInstances: 1,
        'appium:deviceName': 'Pixel_8.1',
        'appium:platformVersion': '8.1',
        'appium:orientation': 'PORTRAIT',
        'appium:automationName': 'UiAutomator2',
        'appium:app': '/Users/Someuser/Documents/repositories/qa-task-wunder-mobility/part2/task1/app/FasTip.apk',
        'appium:noReset': true,
        'appium:newCommandTimeout': 240,
    },
];

exports.config = config;
