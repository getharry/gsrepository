# nodejs相关问题
## 起因
发现公司的电脑用npm安装http-server之后，http-server命令无效。进而发现所有安装过的全局包都无效。
## 原因
问题的根源是node的环境变量的问题，安装了360卫士，用软件管家帮助卸载了node，清理了注册表，以及C盘用户名下面的appdata里面的roaming里的文件。重新安装了node在D盘，并且在cmd里面更改全局路径和缓存路径，然后重新配置node的环境变量。之前node安装在C盘，居然需要以管理员身份打开cmd才能运行下面命令。以管理员身份打开，需要到C盘windows文件夹下的system32文件夹里面找到cmd.exe右键以管理员身份运行。
```
npm config set prefix "D:\nodejs\node_global"
npm config set cache "D:\nodejs\node_cache"
设置环境变量：
NODE_PATH = D:\nodejs
PATH = %NODE_PATH%\;%NODE_PATH%\node_modules;%NODE_PATH%\node_global;
```
## npm常用命令
- npm list -g --depth 0 查看全局安装过的包
- npm uninstall <package name> -g 卸载全局包
- npm root -g  查看全局的包的安装路径
- npm install <name> --save  安装的同时，将信息写入package.json中    
项目路径中如果有package.json文件时，直接使用npm install方法就可以根据dependencies配置安装所有的依赖包这样代码提交到github时，就不用提交node_modules这个文件夹了。
