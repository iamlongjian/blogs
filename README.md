## 个人博客项目

### 项目介绍
- 一个基于vue构建的个人博客管理系统。
- 实现了**搜索博客**,获取博客内容进行**编辑**,**增加博客**,**删除博客**。以及**用户体验**的优化。
```
// 运行所需要的命令
clone https://github.com/longer790164074/blogs.git
npm install
cnpm i node-sass popper.js -D
npm run dev
```
### 所用技术
- vue-router,路由传参。
- vue组件,组件间通信。
- vue-transition 过渡效果
- axios网络请求
- element-ui （vue集成的ui框架）
- firebase云数据库
- json-server json服务
- ...

### 截图
#### 首页
[![Eklc0U.md.png](https://s2.ax1x.com/2019/04/22/Eklc0U.md.png)](https://imgchr.com/i/Eklc0U)

#### 搜索功能(实时刷新)
[![Eklr60.md.png](https://s2.ax1x.com/2019/04/22/Eklr60.md.png)](https://imgchr.com/i/Eklr60)

#### 添加博客页面
[![EklDlq.md.png](https://s2.ax1x.com/2019/04/22/EklDlq.md.png)](https://imgchr.com/i/EklDlq)

#### 页面底部，添加的内容可实时预览
[![EklsXV.md.png](https://s2.ax1x.com/2019/04/22/EklsXV.md.png)](https://imgchr.com/i/EklsXV)

#### 添加成功后，可在首页看到，并且有消息提示
[![Ekl6mT.md.png](https://s2.ax1x.com/2019/04/22/Ekl6mT.md.png)](https://imgchr.com/i/Ekl6mT)

#### 进入博客详情,有编辑按钮、删除按钮
[![Eklg7F.md.png](https://s2.ax1x.com/2019/04/22/Eklg7F.md.png)](https://imgchr.com/i/Eklg7F)

#### 详情底部 更多文章信息
[![EklWtJ.md.png](https://s2.ax1x.com/2019/04/22/EklWtJ.md.png)](https://imgchr.com/i/EklWtJ)

#### 编辑页面(异步请求博客内容,获取成功后有消息提示)
[![EklRk4.md.png](https://s2.ax1x.com/2019/04/22/EklRk4.md.png)](https://imgchr.com/i/EklRk4)

#### 修改完成(修改了原有的标题)
[![Ekl4pR.md.png](https://s2.ax1x.com/2019/04/22/Ekl4pR.md.png)](https://imgchr.com/i/Ekl4pR)

#### 点击删除按钮(询问是否删除,点击确定则删除,取消则返回当前页面并提示“已取消删除”)
[![Eklfh9.md.png](https://s2.ax1x.com/2019/04/22/Eklfh9.md.png)](https://imgchr.com/i/Eklfh9)

#### 删除成功 首页原有博客已经被删除,并且有消息提示。
[![Ekl511.md.png](https://s2.ax1x.com/2019/04/22/Ekl511.md.png)](https://imgchr.com/i/Ekl511)
