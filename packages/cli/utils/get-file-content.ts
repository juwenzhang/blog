import fs from 'fs-extra'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '../temps')
// console.log(rootDir)

/**
 * 获取得到本次检索目录的所有的模板资源路径
 * @param dir 
 * @returns 
 */
async function searchFiles(dir: string)
: Promise<string[]> {
    let result: string[] = []
    const files = await fs.readdir(dir)
    for (const file of files) {
        const filePath = path.join(dir, file)
        const stat = await fs.stat(filePath)
        if (stat.isDirectory()) {
            result = result.concat(await searchFiles(filePath))
        } else {
            result.push(filePath)
        }
    }
    return result
}

/**
 * 获取得到我们想要的文件路径
 * @param fileName 
 * @returns 
 */
async function getFilePathFromList(fileName: string, dir: string = rootDir)
: Promise<{
    dependenciesPath: string,
    path: string,
    pathList: string[],
} | null> {
    const files = await searchFiles(dir)
    // console.log(files)
    for (const file of files) {
        if (file.endsWith(fileName)) {
            return {
                dependenciesPath: path.resolve(path.dirname(file), '../dependencies-mapper.ts'),
                path: file,
                pathList: files,
            }
        }
    }
    return null;
}

/**
 * 获取得到我们想要的文件内容
 * @param fileName 
 * @returns 
 */
async function getFileContent(fileName: string, dir: string = rootDir)
: Promise<{
    dependenciesPath: string,  // maybe use 
    path: string,  
    pathList: string[],
    content: string,  // mainly use
} | null> {
    const result = await getFilePathFromList(fileName, dir)
    // console.log("path is: ", result?.path)
    if (result?.path) {
        // const content = await fs.readFile(filePath, 'utf-8')
        // console.log(content)
        // return content
        return {
            ...result,
            content: await fs.readFile(result.path, 'utf-8'),
        }
    }
    return null;
}

// getFileContent('rollup.dev.config.template.js')
export {
    getFileContent,  // mainly use
    getFilePathFromList,
    searchFiles,
}
