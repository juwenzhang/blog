// @ts-ignore
import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["main.ts"],
  clean: true,
  format: ["esm"],
  outDir: "dist",
  dts: true,
  target: 'node18',
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
