import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const restartCount = 10;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..'); 
const [, , packageDir, execFile] = process.argv;

const WATCH_EXTENSIONS = ['.ts', '.js', '.json'];
const IGNORE_DIRS = ['.git', 'node_modules', 'dist', '.test'];

let serverProcess = null;
let crashCount = 0;

const validatePackageDir = () => {
    if (!packageDir) {
        console.error('未指定包目录，请使用：node hot-reload.js <包目录> <入口文件>');
        process.exit(1);
    }
}

const getExecFile = (rootDir, packageDir, execFile) => {
    validatePackageDir();
    return path.join(rootDir, packageDir, execFile);
}

const startServer = () => {
    if (serverProcess) {
        serverProcess.kill();
    }

    serverProcess = spawn('node', [
        '--import', 'ts-node/esm', 
        getExecFile(rootDir, packageDir, execFile),
    ], {
        stdio: 'inherit',
        cwd: rootDir, 
        env: { ...process.env, NODE_ENV: 'development' }
    });

    serverProcess.on('error', (err) => {
        console.error('服务启动失败：', err.message);
        process.exit(1);
    });

    serverProcess.on('exit', (code) => {
        if (code !== 0 && code !== null) {
        crashCount++;
        if (crashCount >= restartCount) {
            console.error(`进程崩溃${restartCount}次，停止重启`);
            process.exit(1);
        }
        console.log(`⚠️ 进程异常退出（代码：${code}），${restartCount - crashCount}次重试机会`);
        startServer();
        } else {
        crashCount = 0;
        }
    });
};

function watchDir(dir) {
    fs.watch(dir, { recursive: true }, (_, filename) => {
        if (!filename) return;

        const fullPath = path.join(rootDir, filename);
        if (!fullPath.startsWith(rootDir)) return;

        const isIgnored = IGNORE_DIRS.some(ignored => 
        fullPath.includes(path.join(rootDir, ignored))
        );
        if (isIgnored) return;

        const ext = path.extname(filename);
        if (!WATCH_EXTENSIONS.includes(ext)) return;

        console.log(`文件变化：${filename}，重启服务...`);
        crashCount = 0;
        startServer();
    });
}

console.log('热重载模式启动...');
startServer();
watchDir(path.join(rootDir, packageDir));
