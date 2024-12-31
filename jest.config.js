module.exports = {
    preset: 'jest-puppeteer',
    testMatch: ['**/tests/**/*.test.js'], // TypeScript 文件
    testTimeout: 60000,
    transform: {
      '^.+\\.ts$': 'ts-jest',
    },
    collectCoverage: true,  // 启用代码覆盖率收集
    collectCoverageFrom: [
      'src/**/*.{js,jsx,ts,tsx}', // 只收集 src 目录下的代码覆盖率
      '!src/**/*.d.ts' // 排除类型声明文件
    ],
    coverageDirectory: 'coverage', // 设置报告文件的输出目录
    coverageReporters: ['text', 'lcov'], // 设置报告类型
  };