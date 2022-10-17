const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      allureWriter(on, config);
      return config;
    },
    
    env: {
        allureReuseAfterSpec: true
    },
    baseUrl: 'https://www.way2automation.com/angularjs-protractor/banking/#/login'
  },
});
