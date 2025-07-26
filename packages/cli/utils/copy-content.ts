import fs from 'fs-extra'
import path from 'path'
import { getFileContent } from './get-file-content.ts'

/**
 * 复制文件内容
 * @param fileName 文件名
 * @param targetDir 目标目录
 * @param targetFileName 目标文件名
 * @returns 
 */
async function copyContent(
    fileName: string, 
    targetDir: string, // 后续需要自定义构建，根据用户的输入以及对应的工作目录
    targetFileName: string
): Promise<void> {
    try {
        const result = await getFileContent(fileName)  
        if (fs.existsSync(targetDir)) {
            await fs.ensureDir(targetDir)
        }
        if (result) {
            const { content } = result
            await fs.writeFile(
                path.join(targetDir, targetFileName), 
                content,
                'utf-8'
            )
        } else {
            throw new Error(`文件${fileName}不存在`)
        }
    } catch (error) {
        await fs.remove(targetDir)
        throw new Error(`复制文件${fileName}失败: ${error}`)
    }
}

export { 
    copyContent 
}
