interface OutputMapper {
  [key: string]: string;
}

const JsConfigsOutputMapper: OutputMapper = {
    /// rollup 映射文件系列
    'rollup.dev.config.template.js': 'rollup.dev.config.js',
    'rollup.prod.config.template.js': 'rollup.prod.config.js',
    'rollup.test.config.template.js': 'rollup.test.config.js',

    /// tsup 映射文件系列
    'tsup.dev.config.template.js': 'tsup.dev.config.js',
    'tsup.prod.config.template.js': 'tsup.prod.config.js',
    'tsup.test.config.template.js': 'tsup.test.config.js',

    /// esbuild 映射文件系列
    'esbuild.dev.config.template.js': 'esbuild.dev.config.js',
    'esbuild.prod.config.template.js': 'esbuild.prod.config.js',
    'esbuild.test.config.template.js': 'esbuild.test.config.js',

    /// webpack 映射文件系列
    'webpack.dev.config.template.js': 'webpack.dev.config.js',
    'webpack.prod.config.template.js': 'webpack.prod.config.js',
    'webpack.test.config.template.js': 'webpack.test.config.js',

    /// babel 映射文件系列
    'babel.dev.config.template.js': 'babel.dev.config.js',
    'babel.prod.config.template.js': 'babel.prod.config.js',
    'babel.test.config.template.js': 'babel.test.config.js',

    /// postcss 映射文件系列
    'postcss.dev.config.template.js': 'postcss.dev.config.js',
    'postcss.prod.config.template.js': 'postcss.prod.config.js',
    'postcss.test.config.template.js': 'postcss.test.config.js',

    /// vite 映射文件系列
    'vite.dev.config.template.js': 'vite.dev.config.js',
    'vite.prod.config.template.js': 'vite.prod.config.js',
    'vite.test.config.template.js': 'vite.test.config.js',

    /// rspack 映射文件系列
    'rspack.dev.config.template.js': 'rspack.dev.config.js',
    'rspack.prod.config.template.js': 'rspack.prod.config.js',
    'rspack.test.config.template.js': 'rspack.test.config.js',

    /// react component FP
    'react.fp.template.jsx': 'react.component.jsx',  // 后续代码自定义切换

    /// react component OOP
    'react.oop.template.jsx': 'react.oop.component.jsx',  // 后续代码自定义切换

    /// vue composition api
    'vue.composition.template.vue': 'vue.composition.component.vue',  // 后续代码自定义切换

    /// vue options api
    'vue.options.template.vue': 'vue.options.component.vue',  // 后续代码自定义切换

    /// jsconfig
    'jsconfig.react.template.json': 'jsconfig.json',  // 后续代码自定义切换
}

const TsConfigsOutputMapper: OutputMapper = {
    /// rollup 映射文件系列
    'rollup.dev.config.template.ts': 'rollup.dev.config.ts',
    'rollup.prod.config.template.ts': 'rollup.prod.config.ts',
    'rollup.test.config.template.ts': 'rollup.test.config.ts',

    /// tsup 映射文件系列
    'tsup.dev.config.template.ts': 'tsup.dev.config.ts',
    'tsup.prod.config.template.ts': 'tsup.prod.config.ts',
    'tsup.test.config.template.ts': 'tsup.test.config.ts',

    /// esbuild 映射文件系列
    'esbuild.dev.config.template.ts': 'esbuild.dev.config.ts',
    'esbuild.prod.config.template.ts': 'esbuild.prod.config.ts',
    'esbuild.test.config.template.ts': 'esbuild.test.config.ts',

    /// webpack 映射文件系列
    'webpack.dev.config.template.ts': 'webpack.dev.config.ts',
    'webpack.prod.config.template.ts': 'webpack.prod.config.ts',
    'webpack.test.config.template.ts': 'webpack.test.config.ts',

    /// babel 映射文件系列
    'babel.dev.config.template.ts': 'babel.dev.config.ts',
    'babel.prod.config.template.ts': 'babel.prod.config.ts',
    'babel.test.config.template.ts': 'babel.test.config.ts',

    /// postcss 映射文件系列
    'postcss.dev.config.template.ts': 'postcss.dev.config.ts',
    'postcss.prod.config.template.ts': 'postcss.prod.config.ts',
    'postcss.test.config.template.ts': 'postcss.test.config.ts',

    /// vite 映射文件系列
    'vite.dev.config.template.ts': 'vite.dev.config.ts',
    'vite.prod.config.template.ts': 'vite.prod.config.ts',
    'vite.test.config.template.ts': 'vite.test.config.ts',

    /// rspack 映射文件系列
    'rspack.dev.config.template.ts': 'rspack.dev.config.ts',
    'rspack.prod.config.template.ts': 'rspack.prod.config.ts',
    'rspack.test.config.template.ts': 'rspack.test.config.ts',

    /// react component FP
    'react.fp.template.tsx': 'react.component.tsx',  // 后续代码自定义切换

    /// react component OOP
    'react.oop.template.tsx': 'react.oop.component.tsx',  // 后续代码自定义切换

    /// vue composition api
    'vue.composition.ts.template.vue': 'vue.composition.component.vue',  // 后续代码自定义切换

    /// vue options api
    'vue.options.ts.template.vue': 'vue.options.component.vue',  // 后续代码自定义切换

    /// tsconfig
    'tsconfig.vue.template.json': 'tsconfig.json',  // 后续代码自定义切换
}

export {
    JsConfigsOutputMapper,
    TsConfigsOutputMapper,
    OutputMapper
}
