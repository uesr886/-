# 小程序
    - 小程序，相对于Android/IOS Native程序
    - 不需要安装，扫码就可以用
    - O2O    online  2  offline

## 技术架构
    - pages 概念
        一个个的页面
        - wxml 页面的结构    模板
            {{motto}}
            组件，swiper 
        - wxss 页面的样式
        - js   data  数据

## 技术细节
    - wxss 细腻，代码复用
    拆分 ，由多个基础类组成
    section 100vh 代表屏占比 
    hero.white  白色主题
    //autoplay="{{true}}"
  //interval="{{2000}}"

    - 数据绑定
    - slides 数组  wx：for="{{slides}}" wx:key="id" 唯一值
    {{item.image}}

    - 每个页面的js，都有一个Page函数，代表页面() 这个页面的配置
    Page({
        数据项
        data:{
            slides：。。。
        }
        method...
    }) 
- Vue MVVM 的世界，不再需要DOM编程，专注于业务
- bindtap 
    age({})

- 伪元素
    - 没用标签，但是可以显示在dom树中
    - 使用css选择器 ：：after   ：：before   ::placeholder
    - content属性一定要给
    - 一般用来 做分隔符 竖线等等
    

## 小程序+AI