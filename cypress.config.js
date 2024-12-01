const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000", // Default base URL for E2E tests
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}", // Pattern for test files
    supportFile: "cypress/support/e2e.js", // Path to support file
    setupNodeEvents(on, config) {
      // Implement Node event listeners
      // Example: Add plugin for screenshots on failure
      on("after:screenshot", (details) => {
        console.log("Screenshot taken:", details);
      });
    },
    video: true, // Enable video recording for tests
    viewportWidth: 1280, // Set default viewport width
    viewportHeight: 720, // Set default viewport height
  },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
    specPattern: "cypress/component/**/*.cy.{js,jsx,ts,tsx}", // Component test files
    supportFile: "cypress/support/component.js", // Path to support file for component tests
  },

  env: {
    apiUrl: "http://localhost:4000/api", // Example environment variable
  },

  retries: {
    runMode: 2, // Retries on CI
    openMode: 1, // Retries when running locally
  },

  screenshotsFolder: "cypress/screenshots", // Folder for screenshots
  videosFolder: "cypress/videos", // Folder for videos
  downloadsFolder: "cypress/downloads", // Folder for downloaded files
});
