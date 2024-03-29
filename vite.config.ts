import { sveltekit } from "@sveltejs/kit/vite"
import { defineConfig } from "vitest/config"
import path from "path"

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    port: 4000
  },
  test: {
    include: ["src/**/*.{test,spec}.{js,ts}"]
  },
  resolve: {
    alias: {
      $lib: path.resolve("./src/lib"),
      $components: path.resolve("./src/lib/components")
    }
  }
})
