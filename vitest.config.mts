import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./", import.meta.url)),
    },
  },
  test: {
    environment: "node",
    include: ["tests/**/*.test.{ts,mts,mjs}"],
    coverage: {
      provider: "v8",
      reporter: ["text", "html"],
      include: ["lib/**", "worker/**"],
      // JSON fixtures and generated types carry no executable logic.
      exclude: ["lib/**/*.json"],
    },
  },
});
