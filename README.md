# MyReads Project

This is a book tracking application for the final assessment project for Udacity's React Fundamentals course under the react developer track powered by the [African App Launchpad "ALL"](http://techleaders.eg/aal/) scholarship.

## Use Case scenarios

The main page displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are:

* Currently Reading
* Want to Read
* Read

Each book has a control that lets you select the shelf for that book. When you select a different shelf, the book moves there.

The main page also has a link to `/search`, a search page that allows you to find books to add to your library. The search page has a text input that may be used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets you add the book to your library. To keep the interface consistent, you may consider re-using some of the code you used to display the books on the main page.

The search page also has a link to `/` "the root URL", which leads back to the main page. By navigating back to the main page from the search page, All the selections made on the search page are instantly stored.

## Quick Start

To get started the right away:

* Download & Install [Node.js](https://nodejs.org/en/)
* Clone This Repo `git clone https://github.com/ahMx3d/my-reads-app.git`
* install all project dependencies with `npm install`
* start the development server with `npm start`

## Project Structure

```bash
├── README.md
├── SEARCH_TERMS.md
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── BooksAPI.js
    ├── components
    │   ├── Book.js
    │   ├── BookAuthors.js
    │   ├── BookList.js
    │   ├── BookSearch.js
    │   ├── BookShelf.js
    │   ├── Header.js
    │   ├── OpenSearch.js
    │   ├── ShelfChanger.js
    ├── icons
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css
    └── index.js
```

## Backend Server

The server file [`BooksAPI.js`](src/BooksAPI.js) contains the methods needed to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

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

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Frontend Used Packages

- [React Router](https://reactrouter.com/web/guides/quick-start)
- [Prop Types](reactjs.org/docs/typechecking-with-proptypes.html)