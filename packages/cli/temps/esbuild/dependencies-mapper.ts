interface DependenciesMapper {
    [key: string]: string
}

const dependenciesMapper: DependenciesMapper = {
    'esbuild': '^4.0.0',
    'esbuild-wasm': '^4.0.0',
    'esbuild-wasm-node': '^4.0.0',
    'esbuild-wasm-web': '^4.0.0',
    'typescript': '^4.0.0',
}

export {
    dependenciesMapper
}
