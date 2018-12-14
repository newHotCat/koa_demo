## koa 框架搭建学习
(参考)[https://chenshenhai.github.io/koa2-note/note/project/framework.html]


### 目录结构

```
├── init # 数据库初始化目录
│   ├── index.js # 初始化入口文件
│   ├── sql/    # sql脚本文件目录
│   └── util/   # 工具操作目录
├── package.json 
├── config.js # 配置文件
├── server  # 后端代码目录
│   ├── app.js # 后端服务入口文件
│   ├── codes/ # 提示语代码目录
│   ├── controllers/    # 操作层目录
│   ├── models/ # 数据模型model层目录
│   ├── routers/ # 路由目录
│   ├── services/   # 业务层目录
│   ├── utils/  # 工具类目录
│   └── views/  # 模板目录
└── static # 前端静态代码目录
    ├── build/   # webpack编译配置目录
    ├── output/  # 编译后前端代码目录&静态资源前端访问目录
    └── src/ # 前端源代码目录
```

#### 后端代码目录，分层设计

```
└── server
    ├── controllers # 操作层 执行服务端模板渲染，json接口返回数据，页面跳转
    │   ├── admin.js
    │   ├── index.js
    │   ├── user-info.js
    │   └── work.js
    ├── models # 数据模型层 执行数据操作
    │   └── user-Info.js
    ├── routers # 路由层 控制路由
    │   ├── admin.js
    │   ├── api.js
    │   ├── error.js
    │   ├── home.js
    │   ├── index.js
    │   └── work.js
    ├── services # 业务层 实现数据层model到操作层controller的耦合封装
    │   └── user-info.js
    └── views # 服务端模板代码
        ├── admin.ejs
        ├── error.ejs
        ├── index.ejs
        └── work.ejs
```

#### 前端 react.js + less + sass + antd 环境
```

└── static # 项目静态文件目录
    ├── build
    │   ├── webpack.base.config.js # 基础编译脚本
    │   ├── webpack.dev.config.js # 开发环境编译脚本
    │   └── webpack.prod.config.js # 生产环境编译脚本
    ├── output # 编译后输出目录
    │   ├── asset
    │   ├── dist
    │   └── upload
    └── src # 待编译的ES6/7、JSX源代码
        ├── api
        ├── apps
        ├── components
        ├── pages
        ├── texts
        └── utils

```