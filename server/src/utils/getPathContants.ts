import path from 'path'
import { fileURLToPath } from 'url'

const getPathConstants: () => { 
    __filename: string; 
    __dirname: string 
} = () => {

    if (typeof import.meta.url === 'string') {
        const __filename = fileURLToPath(import.meta.url)
        const __dirname = path.dirname(__filename)
        return {
            __filename,
            __dirname,
        }
    } else {
        return {
            __filename: __filename,
            __dirname: __dirname,
        }
    }
}

export default getPathConstants
