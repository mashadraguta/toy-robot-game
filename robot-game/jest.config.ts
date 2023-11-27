import type { Config } from "@jest/types"
import '@testing-library/jest-dom'
const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  automock: true,
}
export default config