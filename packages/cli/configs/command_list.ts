interface CommandList {
    name: string
    description: string
    options: {
        name: string
        description: string
        type: 'string' | 'number' | 'boolean'
    }[]
}

export const CommandList: CommandList[] = [
    /// add packages
    {
        name: 'add',
        description: 'add a monorepo packages',
        options: [
            /// package name
            {
                name: 'name',
                description: 'packages name',
                type: 'string'
            },
            /// package type
            {
                name: 'type: js | ts',
                description: 'packages type',
                type: 'string'
            },
            /// package build tool template
            {
                name: 'template: webpack | rollup | tsup | esbuild | vite | rspack',
                description: 'packages build tool template',
                type: 'string'
            },
            /// package add dist
            {
                name: 'dist',
                description: 'packages dist',
                type: 'string'
            }
        ]
    },
    {
        name: 'create',
        description: 'create component',
        options: [
            /// component type
            {
                name: 'type: fp | oop',
                description: 'component type, default is fp',
                type: 'string'
            },
            /// component name
            {
                name: 'name',
                description: 'component name',
                type: 'string'
            },
            /// component language
            {
                name: 'lang: js | ts',
                description: 'component language, default is ts',
                type: 'string'
            },
            /// component framework
            {
                name: 'framework: react | vue',
                description: 'component framework, default is react',
                type: 'string'
            },
            /// component style
            {
                name: 'style: scss | less | css | styled-components | emotion | tailwindcss',
                description: 'component style, default is styled-components',
                type: 'string'
            }
        ]
    },
    {
        name: 'create:bd',
        description: 'create typescript tsup server by nodejs',
        options: [
            /// server name
            {
                name: 'name',
                description: 'server name',
                type: 'string'
            },
            /// server port
            {
                name: 'port',
                description: 'server port, default is 3000',
                type: 'string'
            }
        ]
    }
]
