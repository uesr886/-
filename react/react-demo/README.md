- npm init vite
    vite 代替 create-react-app 作为react 项目脚手架
    vite 快

- react 组件
    - 页面由组件构成，组件树
    - 组件是日常开发和协作的单元
    - html + css + js 可复用功能的组合
    - 组件类像html标签一样插入
    - 返回jsx 的函数就是组件
    - 组件包含props(父组件传的参数)， 自由状态
    - 类组件  class 

- es6 的功能
    - class 让js 成为大型企业级开发语言，传统的面向对象，设计模式好用起来
        原型面向对象，其他开发者不太熟悉，class 只是语法糖，底层还是prototype
    - extends 轻松实现继承，面向对象层次更加细腻
    - 封装\继承\多态
    - 以react 源码为例，Component  组件基类
        constructor super(props) 基类构造函数先执行
        构造自己的状态
        必须重写render 方法 返回组件的JSX

- react 的核心 
    - dom 编程已过去，document.getElementById() innerText()
    性能不好 硬编程(API)
    - 组件的动态部分(状态) 隐藏/显示
        this.state = {
            isLogin:false
            emjio:'笑脸'
        }
        this.setState({
            isLogin:true,
            emoji:'哭脸'
        })
    - 响应式更新
        状态变了，界面自动局部更新
    - 不再API编程，而是更好的focus 业务

# 组件生命周期
    <App/>
    - 先实例化 AppHeader
    - componentDidMount  Component 的生命周期方法，JSK 渲染完成之后，
        AppHeader有DOM 结构挂到App上后才运行，自动运行
    - 启动定时器 修改状态，界面(得有那个节点)自动更新
    - constructor 启动定时器 dom 还没有挂载上去