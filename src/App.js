import React, { Component }from "react";
import { Link, Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import ShelfBooks from "./Component/ShelfBooks";
import SearchBooks from "./Component/SearchBooks";
import "./App.css";

class BooksApp extends React.Component {
    
   MAX_RESULTS = 40;

  state = {
    books: [],
    searchBooks:[]
  };

  componentDidMount() {
      this.fetchBooks();
  }

  fetchBooks() {
    BooksAPI.getAll().then((books) => {

          this.setState ({books});
    });
  }

  getShelfBooks(shelfName) {

    return this.state.books.filter((b) => b.shelf === shelfName)
  }

  updateShelf= (book, newShelf) => {
    BooksAPI.update(book, newShelf).then(() =>{
               
      book.shelf = newShelf;

      this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat([book])
      }));
    });
  };

  updateQuery = (query) => {
        if(query){
            BooksAPI.search(query, this.MAX_RESULTS).then((books) => {
                
                if(books.length){
                    books.forEach((book, index) => {
                        let myBook = this.state.books.find((b) => b.id === book.id);
                        book.shelf = myBook ? myBook.shelf : 'none';
                        books[index] = book;
                    });

                    this.setState({
                        searchBooks: books
                    });
                }

            });
            } else {
            this.setState({
                searchBooks: []
            });
        }
    };
    
    render() {
        return (
            <div className="app">
                <Route exact path="/" render={() => (
                    <div className="list-books">
                        <div className="list-books-title">
                            <h1>MyReads</h1>
                        </div>
                        <div className="list-books-content">
                            <div>
                                <ShelfBooks
                                    title="Currently Reading"
                                    books={this.getShelfBooks("currentlyReading")}
                                    updateShelf={this.updateShelf}
                                />
                                <ShelfBooks
                                    title="Want to Read"
                                    books={this.getShelfBooks("wantToRead")}
                                    updateShelf={this.updateShelf}
                                />
                                <ShelfBooks
                                    title="Read"
                                    books={this.getShelfBooks("read")}
                                    updateShelf={this.updateShelf}
                                />
                            </div>
                        </div>
                        <div className="open-search">
                            <Link to="/search">Add a book</Link>
                        </div>
                    </div>
                )}/>

                <Route path="/search" render={({ history }) => (
                    <SearchBooks
                        books={this.state.searchBooks}
                        updateQuery={this.updateQuery}
                        updateShelf={this.updateShelf}
                    />
                )}/>
            </div>
        )
    }
}
export default BooksApp;