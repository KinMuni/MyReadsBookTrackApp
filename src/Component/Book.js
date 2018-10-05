import React, { Component } from "react";
import PropTypes from "prop-types";
import ShelfUpdater from "./ShelfUpdater"

class Book extends Component {
	static propTypes = {
		book: PropTypes.object.isRequired,
		updateShelf: PropTypes.func.isRequired
	};

   render() {
    const { book } = this.props;
    return (

    <div className="book" id={book.id}>
                <div className="book-top">
                    <div className="book-cover" style={{width: 128, height: 193, backgroundImage:book.imageLinks ? `url(${book.imageLinks.thumbnail})`: "" }}>
                    </div>
                    <ShelfUpdater
                        book={book}
                        updateShelf={this.props.updateShelf}/>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
            </div>


    	)
   }
}

export default Book;