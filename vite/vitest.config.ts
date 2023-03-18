import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react-swc"

export default defineConfig({
  test: {
    environment: "jsdom",
    setupFiles: "./test/setup-tests.ts",
    globals: true,
    deps: {
      external: ["shared"],
    },
    alias: {
      "shared/src/*": "shared/lib/*",
    },
  },
})
