import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

export interface Version {
  type: 'major' | 'minor' | 'patch';
  major: number;
  minor: number;
  patch: number;
  preRelease: string | undefined;
}

export function bumpVersion(version: string): number[] {
  const [major, minor, patch] = version.split('.').map(Number);
  return [
    major,
    minor,
    patch,
  ]
}

export function updateVersion(version: Version): string {
  const { type, major, minor, patch, preRelease } = version;
  console.log('updateVersion', version, 'type', type);
  if (preRelease) {
    return `${major}.${minor}.${patch}-${preRelease}`;
  } else {
    return `${major}.${minor}.${patch}`;
  }
}

export function writeVersion(version: string) {
  const pkgPath = join(process.cwd(), 'package.json');
  const pkg = JSON.parse(readFileSync(pkgPath, 'utf-8'));
  pkg.version = version;
  writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
}
