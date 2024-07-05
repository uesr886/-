import { Component } from 'react'
import BookHead from "./BookHead"
import BookBody from "./BookBody"

class App extends Component { 
  constructor(props) {
    super(props);
    this.state = { activeCategory: "全部" };
  }

  handleCategoryClick = (category) => {
    this.setState({ activeCategory: category });
  };

  render() {
    
    return (
      <div className='book-app'>
        <BookHead onCategoryClick={this.handleCategoryClick} />
        <BookBody activeCategory={this.state.activeCategory} />
      </div>
    )

  }
}
export default App