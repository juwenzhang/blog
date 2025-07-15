import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["main.ts"],
  clean: true,
  format: ["esm", "cjs"],
  outDir: "dist",
  dts: true,
  name: "blog-cli",
  watch: false,
  minify: true,
  bundle: true,
  treeshake: true,
  splitting: true,
  metafile: true,
  minifyWhitespace: true,
  minifyIdentifiers: true,
  minifySyntax: true,
})