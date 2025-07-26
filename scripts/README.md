## copy-env
* 主要是用于复制.env文件到dist目录下的操作，核心主要是为了解决对应的手动部署的时候的环境变量问题，fs，path
* 但是对于 docker 容器化部署的话，环境变量的问题就需要通过 docker 容器的环境变量来解决的呐，以及 dockerignore 需要忽略 .env 文件

## hot-reload
* 主要是用于热重载的操作，核心主要是为了解决对应的手动重启的问题
* 核心原理是通过 fs.watch 来监听文件的变化，当文件变化的时候，自动重启对应的进程，child_process 模块来重启进程
* `node hot-reload.js <packageName> <entryFile>`
    * peerDependencies --> ts-node --> 支持 ts 编译执行： install it into monorepo root dir.


