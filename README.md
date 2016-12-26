## 简介
Ghost是一款出色的开源博客平台，小巧，易用，专注于写作，而gsearch是一款为Ghost量身打造的搜索插件，使Ghost轻松具有搜索功能。效果类似于[SwifType](https://swiftype.com/)，通过Ghost的RSS实现搜索功能，您可以访问：[http://tobee.me/#search](http://tobee.me/#search) 体验效果。

## 依赖插件
* [remodal](https://github.com/VodkaBears/Remodal)

## 浏览器支持
理论上支持所有现代浏览器，包括智能手机浏览器。未全面测试，如果发现兼容问题，请提交[issues](https://github.com/itobee/gsearch/issues) 。

## 截图
![截图](Screenshot.gif)

## 在线体验
[https://itobee.github.io/gsearch/docs/](https://itobee.github.io/gsearch/docs/)

## 使用示例
[下载](https://github.com/itobee/gsearch/archive/master.zip)最新版的gsearch，将`dist`文件夹下的`libs`和`partials`文件夹复制到当前主题的根目录下（如果遇到同名文件夹，覆盖即可），并在当前主题的`default.hbs`文件中添加如下代码：

```
<!DOCTYPE html>
<html lang="zh-cn">
<head>
   ……
   <!-- CSS -->
   <link rel="stylesheet" type="text/css" href="/libs/remodal/remodal.min.css">
   <link rel="stylesheet" type="text/css" href="/libs/gsearch/css/jquery.gsearch.min.css">
   ……
</head>

<body>
   ……

   <!-- gsearch模板 -->
   {{> "gsearch"}}

   <!-- JS -->
   <script type="text/javascript" src="//cdn.staticfile.org/jquery/1.12.4/jquery.min.js"></script> <!-- 如果主题中未引入jQuery，请引入jQuery -->
   <script type="text/javascript" src="/libs/remodal/remodal.min.js"></script>
   <script type="text/javascript" src="/libs/gsearch/js/jquery.gsearch.min.js"></script>
</body>
</html>
```

接下来，我们再通过如下代码调用插件即可使用：

```
<script>
$(document).one('opening', '.remodal', function () {
    $('#search').gsearch();
});
</script>
```

以上示例使用了remodal弹层插件显示搜索信息，可以用其他插件代替，但是需要注意一点：请勿对同一元素重复调用插件。示例中使用jQuery的`.one()`方法来委托事件。

## 参数说明

| 名称     | 默认值    | 类型      | 说明                            |
|----------|----------|----------|---------------------------------|
| show     | 10       | Number   | 每页显示条数                     |
| excerpt  | 120      | Number   | 摘要的字符长度                    |
| rss      | "/rss"   | String   | rss源的路径                      |
| trigger  | "keyup"  | String   | 搜索触发方式，可选值：keyup，enter |

您也可以通过`data-api`来配置插件，如`data-trigger="enter"`。

## 开发
gseach使用Gulp作为脚手架开发，如果您想对gsearch进行二次开发，参考以下操作：

```
// 克隆源码
git clone git://github.com/itobee/gseach.git
cd gseach

// 安装npm
npm install

// 启动服务
gulp
```

## 更新日志
### v0.9.0
* [gsearch v0.9.0](https://github.com/itobee/gsearch/releases/tag/v0.9.0) 发布（2016-12-24）

## Bug反馈
请移步：[https://github.com/itobee/gsearch/issues](https://github.com/itobee/gsearch/issues)

## 开源协议
MIT license &copy; [Tobee](http://tobee.me);

