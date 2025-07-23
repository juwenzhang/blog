import fs from 'fs'
import path from 'path'

export const getMainDir: () => string = () => {
  const mainFilePath = process.argv[1];
  if (!mainFilePath) {
    throw new Error('无法获取主入口文件路径，请确保通过 node main.js 方式执行');
  }
  return path.dirname(mainFilePath);
};

export const getEnvPath: () => string = () => {
  if (process.env.ENV_PATH) {
    return path.resolve(process.env.ENV_PATH);
  }
  const mainDir = getMainDir();
  const env = process.env.NODE_ENV || 'development'
  const envFiles = [
    '.env',         
    '.env.test'     
  ];

  for (const fileName of envFiles) {
    const envPath = path.resolve(mainDir, fileName);
    if (fs.existsSync(envPath)) {
      return envPath;
    }
  }
  throw new Error(`在 main.js 同级目录中未找到以下 env 文件: ${envFiles.join(', ')}`);
};

export const compilerEnvContentToObject
: (envContent: string) => Record<string, string> = (envContent: string) => {
    const envLines: string[] = envContent
                                    .split('\n')
                                    .map(envLine => envLine.trim())
                                    .filter(envLine => envLine.length > 0)
    const envObject: Record<string, string> = {}
    envLines.forEach(envLine => {
        const [key, value] = envLine.split('=')
        envObject[key] = value
    })
    return envObject ? envObject : {}
}

const getTypeFromenv: () => Record<string, string> = () => {
    const envPath = getEnvPath()
    if (!envPath) {
        throw new Error('envPath is not defined')
    }
    const envContent = fs.readFileSync(envPath, 'utf-8')
    const envObject = compilerEnvContentToObject(envContent)
    return envObject
}

export default getTypeFromenv
