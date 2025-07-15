import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["main.ts"],
  clean: true,
  format: ["esm", "cjs"],
  outDir: "dist",
  dts: true,
  name: "blog-cli",
  watch: true,
})