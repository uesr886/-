const AppHeader = (props) => {
    const {name} = props
  return (
    <div className="app-header">
      <h1 className="title" theme="day">{name} {theme}</h1>
    </div>
  )
}

export default AppHeader