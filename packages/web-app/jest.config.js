// jest.config.js
const nextJest = require("next/jest");
const { pathsToModuleNameMapper } = require("ts-jest");
const { compilerOptions } = require("./tsconfig.json");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  clearMocks: true,
  setupFilesAfterEnv: ["./jest.setup.js"],
  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths),
  },
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  verbose: true,
  collectCoverage: true,
  coveragePathIgnorePatterns: ["./__tests__/test-utils.tsx"],
  testPathIgnorePatterns: ["./__tests__/test-utils.tsx"],
  transformIgnorePatterns: ["node_modules"],
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  moduleFileExtensions: ["ts", "tsx", "js"],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
