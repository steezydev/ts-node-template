/** @type {import('ts-jest').JestConfigWithTsJest} **/
// eslint-disable-next-line no-undef
module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["ts-jest", {}],
  },
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1",
    "^@tests/(.*)$": "<rootDir>/tests/$1",
  },
};
