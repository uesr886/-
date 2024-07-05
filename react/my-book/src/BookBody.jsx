import { Component  } from "react"; 

class BookBody extends Component {
    render() {
        // 假设books是来自props或state的书籍数据数组
        const { books, activeCategory } = this.props;

        // 筛选出当前类别下的书籍
        const filteredBooks = books.filter(book => book.category === activeCategory);

        return (
            <div className="bd">
                {filteredBooks.map(book => (
                    <div key={book.id} className="book-item">
                        {/* 展示书籍信息 */}
                    </div>
                ))}
            </div>
        );
    }
}
class BookBody extends Component {
    render()
    {
        return (
            <ul>
                <li>
                    <div className="cover">
                        <a href="">
                            <img src="" alt="" />
                        </a>
                    </div>
                    <div className="info">
                        <div className="title"></div>
                        <div className="author"></div>
                    </div>
                </li>
                <li>
                    <div className="cover">
                        <a href="">
                            <img src="" alt="" />
                        </a>
                    </div>
                    <div className="info">
                        <div className="title"></div>
                        <div className="author"></div>
                    </div>
                </li>
                <li>
                    <div className="cover">
                        <a href="">
                            <img src="" alt="" />
                        </a>
                    </div>
                    <div className="info">
                        <div className="title"></div>
                        <div className="author"></div>
                    </div>
                </li>
                <li>
                    <div className="cover">
                        <a href="">
                            <img src="" alt="" />
                        </a>
                    </div>
                    <div className="info">
                        <div className="title"></div>
                        <div className="author"></div>
                    </div>
                </li>
                <li>
                    <div className="cover">
                        <a href="">
                            <img src="" alt="" />
                        </a>
                    </div>
                    <div className="info">
                        <div className="title"></div>
                        <div className="author"></div>
                    </div>
                </li>
            </ul>
            
        )
    }
}


export default BookBody