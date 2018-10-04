# MyReads Project : Book Tracking Application

Udacity gave us a starter template with static HTML markup and CSS. Our job was to add interactivity to the app by refactoring the static code in this template. React was used to complete the work.


## Setup
* downlaod or clone the project repo  (https://github.com/udacity/reactnd-project-myreads-starter)
* install all project dependencies with `npm install`, make sure to have the latest version
* start the development server with `npm start`
* An updated browser

## How it works

The home page contains three shelves of books : Currently reading, Want to read and read. Books can be moved from one shelf to another one using a button on bottom-right corner of each book. To remove a book from the sheves  move it to None. 

A searchbooks page contains 40 books.It is accessed using the bottom right corner + icon.
With the same states stated above, on the search page, you write a name of a book, once found you can choose on which shelf it can be moved to.


## Backend Server

To simplify your development process,Udacity provided us a backend server  to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods we will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)



## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend.

## Contributing
For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
