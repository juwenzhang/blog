// @ts-ignore
import { defineConfig } from "tsup";
import fs from 'fs'
import path from 'path'

function getPackageDependencies(): string[] {
    const packageJson = JSON.parse(fs.readFileSync(
        path.join(process.cwd(), 
        'package.json'), 
        'utf-8')
    )
    return Object.keys(packageJson.dependencies)
}


export default defineConfig({
  entry: ["main.ts"],
  clean: true,
  format: ["cjs"],
  outDir: ".test",
  target: 'node18',
  dts: true,
  sourcemap: true,
  noExternal: getPackageDependencies(),
  metafile: true,
  minifyWhitespace: true,
  minifyIdentifiers: true,
  minifySyntax: true,
  outExtension({ format }) {
    return {
      js: format === 'esm' ? '.js' : '.cjs',
    }
  },
})
