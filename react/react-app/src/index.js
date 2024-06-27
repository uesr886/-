// es6 module 
import ReactDOM from 'react-dom/client';
import React from 'react';
// module 导入
import App from './app/app';

const root = ReactDOM.createRoot(
  // 就做这一次DOM 的查找， ReactDOM 
  // DOM 编程 性能很差
  document.getElementById('root')
)
// class
// const element = React.createElement('h1', {className:'title', id:'tlt'},
//    'hello world'
// )

// const element = React.createElement(
//   'div', 
//   {className:'container'},
//   React.createElement(
//     'h1',
//     { className: 'title'},
//     '周总理'
//   )

// )

// 职责分离
root.render(
  // <h1>Hello world!</h1>
  // element
  // <div className='container'>
  //   <h1 className='title'>周总理</h1>
  // </div>
  <App />
)