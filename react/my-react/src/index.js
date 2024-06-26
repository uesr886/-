import ReactDOM from 'react-dom/client';
import React from 'react';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
// 节点
const element2 = React.createElement('div', {id:'name'}, '郑大光明')
console.log(element2);
// root.render(element)
// react 法宝 JSX语法
// 不是纯js, react  jsx 语法   js里表达html的
const element = (<h1>正大光明</h1>)
console.log(element);
root.render(element2)




// -------
// 入口文件
// console.log('-------');
// es6 module dom 相关
// import ReactDOM from 'react-dom/client';

// // root 内部就是react的世界了
// // root react 的根节点
// const root = ReactDOM.createRoot(
//   // 获取挂载点，以后react 就不再做DOM操作了
//   document.getElementById('root')
// )
// root.render(<h1>哈哈哈哈</h1>)