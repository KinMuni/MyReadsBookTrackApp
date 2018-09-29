import Readct, { Component } from "react";
import PropTypes from "prop-types";
import ShelfUpdater from "./Component/ShelfUpdater"

class Book extends Component {
	static propTypes = {
		book: propTypes.object.isRequired,
		updateShelf: PropTypes.func.isRequired

	};

   render() {
    const { book } = this.props;
    return (

    <div className="book" id={book.id}>
                <div className="book-top">
                    <div className="book-cover" style={{backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
                    <ShelfUpdater
                        book={book}
                        updateShelf = {this.props.updateShelf}/>
                </div>
                <div className="book-title">{book.name}</div>
                <div className="book-authors">{book.authors}</div>
            </div>




    	)

   }




}