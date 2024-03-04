module.exports = {
    preset: 'ts-jest',
    testEnvironment: "jsdom",
    verbose: true,
    setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
    modulePathIgnorePatterns:["<rootDir>/src/__tests__/helpers/*"],
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|svg)$": "<rootDir>/mocks/fileMock.js",
        "\\.(css|less|sass|scss)$": "<rootDir>/mocks/fileMock.js"
    }
}
