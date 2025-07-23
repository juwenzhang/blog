// @ts-ignore
import { defineConfig } from "tsup";
import fs from 'fs'
import path from 'path'

function getPackageDependencies(): string[] {
    const packageJson = JSON.parse(fs.readFileSync(
        path.join(process.cwd(), 'package.json'), 'utf-8')
    )
    return Object.keys(packageJson.dependencies)
}

export default defineConfig({
  entry: ["main.ts"],
  clean: true,
  format: ["cjs"],
  outDir: "dist",
  dts: false,
  target: 'node18',
  watch: false,
  minify: true,
  bundle: true,
  treeshake: true,
  splitting: true,
  outExtension({ format }) {
    return {
      js: format === 'esm' ? '.js' : '.cjs',
    }
  },
  // 实现配置打包调用了的第三方库
  noExternal: getPackageDependencies(),
})
