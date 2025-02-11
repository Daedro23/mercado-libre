import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/config/setupTests.ts'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|webp|svg)$': 'jest-transform-stub',
  },
  modulePaths: ["<rootDir>"],
  collectCoverage: true, // Activa la recolección de cobertura
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}", // Ajusta el path si tus archivos no están en `src`
    "!src/**/*.d.ts" // Excluye archivos de declaración
  ],
  coverageDirectory: "coverage", // Carpeta donde se guardará la cobertura
  coverageProvider: "v8", // Usa el proveedor `v8` para cobertura de código
};

export default config;
