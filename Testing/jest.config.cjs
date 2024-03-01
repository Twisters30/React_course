module.export = {
    preset: 'ts-jest',
    testEnvironment: "jsdom",
    verbose: true,
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|svg)$": "<rootDir>/mocks/fileMock.js",
        "\\.(css|less|sass|scss)$": "<rootDir>/mocks/fileMock.js"
    }
}
