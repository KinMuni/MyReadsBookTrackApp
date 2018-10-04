# How to contribute

The files in this repository are used in the course videos and are the starting point for all students. Because we want all students to have the same experience going through course, if your pull request alters any of the core files, then it (most likely) will _not_ be merged into the project.


To simplify your development process,Udacity provided us a backend server  to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods we will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)
### `getAll`

Method Signature:

```js
getAll()
```
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in our app.

### `update`

Method Signature:
```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.