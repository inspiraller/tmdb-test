module.exports = {
  roots: ['<rootDir>'],
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
    '^__tests__/(.*)$': '<rootDir>/__tests__/$1',
    '^Common/(.*)$': '<rootDir>/src/Components/Common/$1',
    '^@types/(.*)$': '<rootDir>/@types/$1',
    'stories/(.*)': '<rootDir>/stories/$1',
    '\\.(css|less)$': '<rootDir>/jest/styleMock.js'
  },
  transform: {
    // '^.+.stories.tsx?$': '@storybook/addon-storyshots/injectFileName',
    '^.+\\.[t|j]sx?$': 'ts-jest',
    '^.+\\.svg$': '<rootDir>/jest/svgTransform.js',
    '^.+\\.(svg|css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub'
  },
  testEnvironment: 'jsdom',
  testRegex: '(\\.(test|spec))\\.[tj]sx?$',
  setupFilesAfterEnv: ['<rootDir>/jest/enzymeAdapter.ts'],
  preset: 'ts-jest',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  globals: {
    'ts-jest': {
      diagnostics: {
        warnOnly: true
      },
      tsconfig: '<rootDir>/jest.tsconfig.json'
    }
  },
  testResultsProcessor: 'jest-sonar-reporter',
  collectCoverage: true,
  reporters: [
    'default',
    [
      'jest-sonar',
      {
        outputDirectory: 'reports',
        outputName: 'test-reporter.xml',
        reportedFilePath: 'absolute',
        indent: 4,
        sonar56x: false
      }
    ]
  ],
  modulePathIgnorePatterns: [
    'node_modules',
    '<rootDir>/cypress',
    '<rootDir>/src/store/config/*',
    '<rootDir>/src/types/*'
  ],
  coveragePathIgnorePatterns: [
    /* need to add this to sonar-project.properties */
    'node_modules',
    '<rootDir>/cypress',
    '<rootDir>/src/store/config/*',
    '<rootDir>/src/types/*'
  ],
  collectCoverageFrom: ['<rootDir>/src/*.{ts,tsx}', '<rootDir>/src/**/*.{t,j}s{,x}'],
  coverageThreshold: {
    global: {
      branches: 75,
      functions: 90,
      lines: 90,
      statements: 90
    }
  }
};
