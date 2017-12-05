const properties = require('./nightwatchProps')
module.exports = {
    "src_folders": "nightwatch/tests",

    "selenium": {
        "start_process": true,
        "server_path": properties.resourcePath + properties.seleniumServer,
        "log_path": "",
        "port": 3000,
        "cli_args": {
            "webdriver.chrome.driver": properties.resourcePath + properties.chromedriver,
        }
    },

    "test_settings": {
        "default": {
            "launch_url": "http://localhost",
            "selenium_port": 3000,
            "selenium_host": "localhost",
            "silent": true,
            "screenshots": {
                "enabled": false,
                "path": ""
            },
            "desiredCapabilities": {
                "browserName": "chrome",
            }
        },

        "firefox": {
            "desiredCapabilities": {
                "browserName": "firefox",
                "marionette": true
            }
        },

        "edge": {
            "desiredCapabilities": {
                "browserName": "MicrosoftEdge"
            }
        }
    }
}