interface DependenciesMapper {
    [key: string]: string
}

const dependenciesMapper: DependenciesMapper = {
    'rollup': '^2.0.0',
    'rollup-plugin-typescript2': '^0.31.2',
    'rollup-plugin-node-resolve': '^5.2.0',
    'rollup-plugin-commonjs': '^17.1.0',
    'rollup-plugin-terser': '^7.0.2',
    'rollup-plugin-babel': '^5.3.1',
    'rollup-plugin-esbuild': '^4.0.0',
    'rollup-plugin-json': '^4.0.0',
    'rollup-plugin-node-builtins': '^3.0.0',
    'rollup-plugin-node-globals': '^3.0.0',
    'rollup-plugin-import-css': '^3.0.0',
    'typescript': '^4.0.0',
}

export {
    dependenciesMapper
}