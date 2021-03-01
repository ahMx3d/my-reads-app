import './App.css';

import * as BooksAPI from './BooksAPI';

import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import BooksList from './components/BooksList';
import BooksSearch from './components/BooksSearch';

class App extends Component {
	state = {
		books: []
	};

	/**
	 * Categorizes all stated books by shelf name.
	 *
	 * @returns {object}
	 * @memberof App
	 */
	getBooksByShelfName = () => {
		const booksByShelfName = {};
		this.state.books.forEach((book) => {
			const shelfName = book.shelf;
			booksByShelfName[shelfName]
				? booksByShelfName[shelfName].push(book)
				: (booksByShelfName[shelfName] = [ book ]);
		});
		return booksByShelfName;
	};

	/**
	 * Update state with all books from server.
	 *
	 * @returns {void}
	 * @memberof App
	 */
	fetchAllBooks = () => BooksAPI.getAll().then((books) => this.setState({ books }));

	/**
	 * Hook the server to get all books.
	 *
	 * @returns {void}
	 * @memberof App
	 */
	componentDidMount = () => this.fetchAllBooks();

	/**
	 * Get unique shelf names related to the whole books in server.
	 *
	 * @returns {array}
	 * @memberof App
	 */
	getShelfNames = () => [ ...new Set(this.state.books.map((book) => book.shelf)) ];

	/**
	 * Update state and server with the a book new shelf
	 * 
	 * @param {object} book 
	 * @param {string} shelf 
	 * 
	 * @returns {void}
	 * @memberof App
	 */
	bookUpdate = (book, shelf) => {
		book.shelf = shelf;
		this.setState((currentState) => {
			// const books = [ ...currentState.books.filter((b) => b.id !== book.id), book ];
			const otherBooks = currentState.books.filter((b) => b.id !== book.id);
			const books = (book.shelf === 'none')? otherBooks: [ ...otherBooks, book ];
			return { books };
		});
		BooksAPI.update(book, shelf);
	};

	render = () => (
		<div className="App">
			<Route
				exact
				path="/"
				render={() => (
					<BooksList
						onUpdate={this.bookUpdate}
						books={this.state.books}
						// booksByShelfName={this.getBooksByShelfName()}
						shelves={this.getShelfNames()}
					/>
				)}
			/>
			<Route
				path="/search"
				render={() => <BooksSearch onUpdate={this.bookUpdate} booksByShelfName={this.getBooksByShelfName()} />}
			/>
		</div>
	);
}
export default App;
