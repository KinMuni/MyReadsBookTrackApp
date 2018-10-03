import React, { Component } from "react";
import PropTypes from "prop-types";
import { Debounce }  from "react-throttle";
import { Link } from "react-router-dom";
import Book from "./Book";


class SearchBooks extends Component {

	static propTypes = {
		books: PropTypes.array.isRequired,
		updateShelf: PropTypes.func.isRequired
	};

	updateQuery = (query) => {
		this.props.updateQuery(query.trim());
	};

	ComponentWillUnmount() {
		this.props.updateQuery("");
	}

	render() {

		return(
              
              <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <Debounce time="600" handler="onChange">
                            <input 
                                type="text"
                                placeholder="Search by title or author"
                                onChange={(event) => this.updateQuery(event.target.value)}
                            />
                        </Debounce>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.props.books.map((book) => (
                            <li key={book.id} className="contact-list-item">
                                <Book
                                    book={book}
                                    updateShelf={this.props.updateShelf} />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
           

			)
	}
}

export default SearchBooks;