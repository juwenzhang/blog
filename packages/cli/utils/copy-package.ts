import { readFileSync, writeFileSync, existsSync } from "fs";
import { join, resolve } from "path";
import { fileURLToPath } from 'url';
import { updateVersion, type Version } from './bump-version.ts'

const config = {
  rootDir: resolve(fileURLToPath(import.meta.url), '../..'),
  fieldsToKeep: [
    'name', 'version', 'description', 'main', 'module', 'types', 'exports',
    'author', 'license', 'repository', 'keywords', 'bugs', 'homepage',
    'dependencies', 'peerDependencies', 'devDependencies'
  ]
};

function getPackageJson() {
  const packageJsonPath = join(config.rootDir, 'package.json');
  
  console.log(`🔍 尝试读取 package.json: ${packageJsonPath}`);
  if (!existsSync(packageJsonPath)) {
    throw new Error(`package.json 文件不存在: ${packageJsonPath}`);
  }
  
  try {
    const content = readFileSync(packageJsonPath, 'utf-8');
    const packageJson = JSON.parse(content);
    
    console.log(`✅ 成功读取 package.json，包含 ${Object.keys(packageJson).length} 个字段`);
    console.log('  - 检测到的依赖字段:', 
      Object.keys(packageJson).filter(key => key.endsWith('Dependencies')).join(', ') || '无');
    return packageJson;
  } catch (error) {
    console.error(`❌ 读取或解析 package.json 失败:`, error);
    throw error;
  }
}

function getOutputPath() {
  const distPath = join(config.rootDir, 'dist');
  if (!existsSync(distPath)) {
    console.log(`⚠️ dist 目录不存在，将自动创建: ${distPath}`);
  }
  
  return distPath;
}

function confirmUpdateType(version: string) {
  const semverRegex = /^(\d+)\.(\d+)\.(\d+)(?:-([0-9A-Za-z-]+(\.[0-9A-Za-z-]+)*))?(?:\+([0-9A-Za-z-]+(\.[0-9A-Za-z-]+)*))?$/;
  const match = version.match(semverRegex);
  
  if (!match) {
    throw new Error(`Invalid version format: ${version}. Must be a valid SemVer string.`);
  }
  
  const [, majorStr, minorStr, patchStr, preRelease] = match;
  const [major, minor, patch] = [majorStr, minorStr, patchStr].map(Number);
  
  if (major === 0) {
    return {
      type: 'minor', 
      major: 0,
      minor: minor + 1,
      patch: 0,
      preRelease: preRelease || undefined,
    };
  }
  
  if (minor > 10) {
    return {
      type: 'major',
      major: major + 1,
      minor: 0,
      patch: 0,
      preRelease: preRelease || undefined,
    };
  }
  
  return {
    type: 'patch',
    major,
    minor,
    patch: patch + 1,
    preRelease: preRelease || undefined,
  };
}

function updateLocalPackageJson(version: Version) {
  const packageJson = getPackageJson();
  packageJson.version = updateVersion(version);
  writeFileSync(join(config.rootDir, 'package.json'), JSON.stringify(packageJson, null, 2));
}

function copyPackageJson() {
  const packageJson = getPackageJson();
  const requiredFields = ['dependencies', 'peerDependencies', 'devDependencies'];
  requiredFields.forEach(field => {
    if (!packageJson[field]) {
      console.log(`⚠️ package.json 中缺少 ${field} 字段，将初始化为空对象`);
      packageJson[field] = {};
    }
  });

  const publishPackageJson = Object.fromEntries(
    Object.entries(packageJson).filter(([key]) => {
      return config.fieldsToKeep.includes(key)
    })
  );

  const _updateVersion = confirmUpdateType(packageJson.version) as Version
  // update local package.json version
  updateLocalPackageJson(_updateVersion);
  // update builded package.json version
  publishPackageJson.version = updateVersion(_updateVersion);
  
  const outputPath = getOutputPath();
  const outputFile = join(outputPath, 'package.json');
  
  try {
    writeFileSync(outputFile, JSON.stringify(publishPackageJson, null, 2));
    console.log(`✅ 已成功复制 package.json 到: ${outputFile}`);
    const outputContent = readFileSync(outputFile, 'utf-8');
    const outputJson = JSON.parse(outputContent);
    console.log('  - 输出文件包含的依赖字段:', 
      Object.keys(outputJson).filter(key => key.endsWith('Dependencies')).join(', ') || '无');
    return true;
  } catch (error) {
    console.error(`❌ 写入 package.json 失败:`, error);
    throw error;
  }
}

function main() {
  console.log('🚀 开始复制 package.json...');
  console.log(`🔧 当前配置: 根目录 = ${config.rootDir}`);
  try {
    copyPackageJson();
    console.log('🎉 操作成功完成!');
  } catch (error) {
    console.error('❌ 脚本执行失败:', error);
    process.exit(1);
  }
}

main();