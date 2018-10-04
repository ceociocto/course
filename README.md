# vue-start

vue启动项目,包含下列常用依赖:

- vue-router
- element-ui
- echarts
- v-charts
- axios
- node-sass sass-loader

增加了下列文件和目录

```
src/
  /api  api文件
  /filters
  /router
  /store
  /utils
  /views
  element-variable.scss // element-ui样式自定义变量
vue.config.js //配置前端独立开发时，远程api代理路径
```

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### 测试路由页面
```
http://localhost:8080/dashboard
http://localhost:8080/login
```

### Compiles and minifies for production
```
yarn run build
```

### Lints and fixes files
```
yarn run lint
```
