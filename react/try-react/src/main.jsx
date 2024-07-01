import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App'

// 新时代的前端开发,旧时代 DOM Api 
// 接管 以root 节点
const root = ReactDOM.createRoot(
  document.getElementById('root')
)
// const element = React.createElement(
//   'div',{className:'container'},
//   React.createElement('header', {className:'header'}, 
//     'Hello World'),
//     React.createElement('main', {className:'main'}, 
//       React.createElement('aside', {className:'aside'}, 
//         'aside'),
//       React.createElement('acticle', {className:'acticle'}, 
//         'acticle'),
//       React.createElement('aside', {className:'aside'}, 
//         'aside'),
//     ),
//     React.createElement('footer', {className:'footer'}, 
//     'footer')
// )
// JSX react 表现力优于vue
// React Element VDOM(全新打造的react节点)  不是DOM element
// const element = (
//   <div className="">
//     <header>header</header>
//     <main>
//       <aside>aside</aside>
//       <acticle>acticle</acticle>
//       <aside>aside</aside>
//     </main>
//     <footer>footer</footer>
//   </div>
// )

root.render(<App />)