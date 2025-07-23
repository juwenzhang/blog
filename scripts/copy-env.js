import fs from 'fs';
import path from 'path';

/**
 * 环境变量文件复制工具
 * @param {string} env - 环境类型 (development/test/production)
 * @returns {void}
 */
function copyEnvFile(env) {
    const sourceDir = path.join(process.cwd());
    const targetDir = env !== 'test' ? 
        path.join(process.cwd(), 'dist') : 
        path.join(process.cwd(), '.test');

    const envFiles = {
        development: '.env.development',
        test: '.env.test',
        production: '.env.production',
        default: '.env',
    };
    const sourceFile = path.join(sourceDir, env ? envFiles[env] : envFiles.default);
    const targetFile = path.join(targetDir, '.env');

    if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
    }

    try {
        fs.copyFileSync(sourceFile, targetFile);
        console.log(`成功复制 ${sourceFile} 到 ${targetFile}`);
    } catch (error) {
        console.error(`复制环境变量文件失败: ${error.message}`);
        process.exit(1);
    }
}

const env = process.argv[2];
copyEnvFile(env);
