
in.js:1 Uncaught SyntaxError: Cannot use import statement outside a module (at main.js:1:1)

Vue 文件 中的import 命令浏览器 没办法识别 (Vue 后缀文件也没有办法解析)

需要使用 Vue 带有脚手架 CLI 去 解析后才能正常显示 Commend Line Interface 

设置 npm 源 为淘宝 
npm config set registry https://registry.npm.taobao.org

安装 Vue CLI (全局安装)
sudo npm install -g @vue/cli  


使用 Vue CLI 创建项目
vue create vue_test 

babel 将ES6语法转换为ES5
eslint 语法检测




