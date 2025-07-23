// @ts-ignore
import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["main.ts"],
  clean: true,
  format: ["esm"],
  outDir: ".test",
  // 我想指定打包的环境时 nodejs 
  target: 'node18',
  dts: true,
})