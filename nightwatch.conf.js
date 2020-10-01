module.exports = {
  src_folders: ['tests'],
  page_objects_path: ['page-objects'],
  // exclude: ['tests/globals.js'],
  webdriver: {
    start_process: true,
    server_path: require('chromedriver').path,
    port: 9515,
  },
  test_settings: {
    default: {
      screenshots: {
        enabled: true,
        on_failure: true,
        on_error: true,
        path: 'tests_output/screenshots',
      },
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          args: ['--headless'],
        },
      },
      // globals: {
      //   asyncHookTimeout: 60000,
      // },
    },
  },
  // globals_path: 'tests/globals.js',
}
