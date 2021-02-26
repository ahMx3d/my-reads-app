import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import Book from './Book';
import PropTypes from 'prop-types';

class BooksSearch extends Component {
	state = {
		query: '',
		searchable: false,
		books: []
	};

	/**
	 * Update component state fetch & invoke the server for the input value.
	 * @param {string} val 
	 * @memberof BooksSearch
	 */
	handleChange = (val) => {
		const query = val.trimStart();
		if (query) {
			this.setState({ query, searchable: true });
			this.handleSearch(query);
		} else {
			this.setState({
				query: '',
				searchable: false,
				books: []
			});
		}
	};

	/**
	 * Fetch the server for the input value & Update state with fetched books.
	 * @param {string} query 
	 * @memberof BooksSearch
	 */
	handleSearch = (query) => {
		const { booksByShelfName } = this.props;
		BooksAPI.search(query).then((books) => {
			if (books instanceof Array) {
				books.forEach((nBook) => {
					for (const shelf in booksByShelfName) {
						booksByShelfName[shelf].forEach((oBook) => {
							if (oBook.id === nBook.id) {
								nBook.shelf = oBook.shelf;
							}
						});
					}
				});
				this.setState({ books });
			}
		});
	};

	render = () => (
		<div className="search-books">
			<div className="search-books-bar">
				<Link className="close-search" to="/">
					Close
				</Link>
				<div className="search-books-input-wrapper">
					<input
						type="text"
						value={this.state.query}
						placeholder="Search by title or author"
						onChange={(event) => this.handleChange(event.target.value)}
						autoFocus={true}
					/>
				</div>
			</div>
			<div className="search-books-results">
				<ol className="books-grid">
					{this.state.searchable &&
						this.state.books.map((book) => (
							<Book key={book.id} book={book} onUpdate={this.props.onUpdate} />
						))}
				</ol>
			</div>
		</div>
	);
}

BooksSearch.propTypes = {
	booksByShelfName: PropTypes.object.isRequired,
	onUpdate        : PropTypes.func.isRequired
};

export default BooksSearch;
