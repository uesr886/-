import { Component } from 'react'
import TodoForm from './TodoForm.jsx'
import TodoList from './TodoList.jsx'
import './App.css'
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: [
        {
          text: '吃饭',
          completed: false
        }
      ]
    }
  }

  addTodo =(text) => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          text,
          completed: false
        }
      ]
        })
  }

  render() {
    const { todos } = this.state
    return (
      <div className="todo-app">
        <h1 className="todo-app__title">Todo List</h1>
        <TodoForm addTodo={this.addTodo}/>
        <TodoList 
          todos = {todos}
        />
      </div>
    )
  }
}
export default App
