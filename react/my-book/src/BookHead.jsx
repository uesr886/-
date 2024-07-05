import React, { Component } from "react"
import "./BookHead.css"
const tagsArray = ["全部", "文学", "小说", "历史文化", "社会纪实", "科学新知", "艺术设计", "商业经营", "绘本漫画"];

class BookHead extends Component {

    handleClick = (category) => {
        this.props.onCategoryClick(category);
    };

    render() {

        return (
            <div className="hd">
                <h2>
                <span className="title">新书速递</span>
                <div className="tags">
                     {tagsArray.map((tag, index) => (
                        <span 
                        className={`item ${this.props.activeCategory === tag ? 'active' : ''}`}
                        key={index}
                        onClick={() => this.handleClick(tag)}
                        >
                        </span>
                    ))}
                </div>
                </h2>
            </div>
        )
    }
}

export default BookHead