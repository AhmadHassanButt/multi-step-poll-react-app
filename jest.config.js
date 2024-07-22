module.exports = {
  preset: "ts-jest",
  collectCoverageFrom: ["src/**/*.{js,jsx}"],
  extensionsToTreatAsEsm: [".ts"],
  maxWorkers: 3,
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.js',
  ],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
  },
};
