const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout:4000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://example.cypress.io",
    experimentalRunAllSpecs: true,
  },
});
