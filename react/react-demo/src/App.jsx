import AppHeader from './components/app-header';
//父组件
const App = () => {
  return (
    <div className="container">
      {/* 子组件 */}
      <AppHeader name="唐健杰"/>
    </div>
  )
}

export default App