# 表单设计器说明文档V1.0.0
## 项目地址

[点我](http://192.168.70.178:5204)

账号:admin 密码: epsoft123

路由地址:外网申报管理 => 表单配置 => 新增

## 基础组件说明
 
 **以下说明具有通用性,名称相同的属性在不同组件中表现形式相同**
 
### 整体页面说明

表单全部组件均为拖曳式布局.
![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/307751defd6f498c9c5bbc36277c7d69~tplv-k3u1fbpfcp-watermark.image)

### 右侧边栏

侧边栏一共4个tab标签页,前三个是可拖曳的组件,第四个表单属性是对整个表单的总体配置,现在使用的表单基本用的是 **右对齐,组件尺寸是mini.** 下图中的模拟场景为iframe地址,会在预览的模拟选项中调用.
![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d013bf719eca4a6096db745776a9608c~tplv-k3u1fbpfcp-watermark.image)

### 输入框

标题: 该控件的标题.  
提示语: 未填写值时控件的提示语.  
标题宽度: 控件标题宽度.  
字段id: 最终生成的表单Key.  
最后文字内容: 四个选项分别为配置输入框前后一级内置外置文字内容,下图为后内置内容.  
是否必填: 选否不会校验表单内容.  
能否编辑: 是否禁用当前控件.  
能否显示: 是否显示当前控件.(隐藏是v-show,当前控件已经被创建,可以访问)  
项目中的所有colspan均为基于elementUI的布局[点我](https://element.eleme.cn/#/zh-CN/component/layout)

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/23da46c39a41466590423ed6c690e892~tplv-k3u1fbpfcp-watermark.image)

### 日期选择

时间限制: 开始时间和结束时间可以为空.例:只填开始时间,就是默认开始时间之前的所有时间全部禁用
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a6e6d506b61c4f54adbc68764fc7c64d~tplv-k3u1fbpfcp-watermark.image)

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cd952abc7ae64029a421632627de7be9~tplv-k3u1fbpfcp-watermark.image)

### 下拉选择

当前下拉选择都是基于担保系统中的枚举类.
选择自定义数据源,填写数据源接口,请求方法为post,即可.
![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2b2c8f24ab2141ecaf7f5ba54d605788~tplv-k3u1fbpfcp-watermark.image)
![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a108c964edcb4dc496ad77fc0ac9e8b7~tplv-k3u1fbpfcp-watermark.image)

### 布局组件

调整控件布局,一行为24,同elementUI的布局,可自定义列数及宽度,超出24即换行
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/22bf810e927c42f18cfffa4d4a03d3ba~tplv-k3u1fbpfcp-watermark.image)

### 表格组件

注意列的宽度是定宽,没有特殊需求尽量设置为0,自动撑开  
设置列固定时注意左右是否固定及位置.

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4ea607c4e3ca4b1096b8deea13984e68~tplv-k3u1fbpfcp-watermark.image)

### 表单域组件

用来配置表单的层级关系,字段ID即为键值.生成结果如下图(为了举例才使用的中文键值)

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/65ec2323c5d5471db4062e398b1b00c0~tplv-k3u1fbpfcp-watermark.image)

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/76eaa47fc7f9451e93a19ca6a062e548~tplv-k3u1fbpfcp-watermark.image)

## 自定义组件说明

### 级联组件

目前级联组件支持三种类别: 银行,地区,行业.  
接口地址默认为公司服务器地址(可修改)

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dbee5d1ebb044dfabd509c6cb621314c~tplv-k3u1fbpfcp-watermark.image)

### 材料组件

地址分为获取配置信息的接口地址及上传文件的上传地址.表格的配置信息在担保系统中表单设置模块的材料管理中可以进行配置.

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9a71c4ad61f344f1a454c1fe6d72df21~tplv-k3u1fbpfcp-watermark.image)

## 预览

表单绘制完毕后点击预览进行提交测试,可以查看当前表单的最终样式及生成结果.

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fd9d3a49ffb2454a92c9536fe61b0659~tplv-k3u1fbpfcp-watermark.image)



