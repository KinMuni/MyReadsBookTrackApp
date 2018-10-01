import React, { Component } from "react";
import PropTypes from "prop-types";
import Book from "./Book";

class ShelfBooks extends Component {

	static PropTypes = {
		title: PropTypes.string.isRequired,
		books: PropTypes.array.isRequired,
		updateShelf:PropTypes.func.isRequired
	};

	render() {

		return (

			 <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books.map((book) => (
                            <li key={book.id} className="contact-list-item">
                                <Book
                                    book={book}
                                    changeShelf={this.props.changeShelf}/>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>

			)
	}
}

export default ShelfBooks;