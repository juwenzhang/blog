import dotenvx from '@dotenvx/dotenvx'
import getPathConstants from './getPathContants.ts'
import getTypeFromenv, { getEnvPath } from './getTypeFromenv.ts'

const envObject: Record<string, string> = getTypeFromenv()
interface EnvObject<T> {
    [K: keyof typeof envObject]: string
}
const { __dirname }: { __dirname: string, __filename: string } = getPathConstants()
const getEnvConfigs: () => { env: EnvObject<typeof envObject> } = <T>() => {
    const envFilePath = getEnvPath()
    dotenvx.config({
        path: envFilePath,
    })
    return {
        env: envObject as EnvObject<T>,
    } 
}

export default getEnvConfigs