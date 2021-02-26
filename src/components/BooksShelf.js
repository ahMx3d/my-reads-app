import React from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

const BooksShelf = (props) => {
	const { shelfBooks, shelf, onUpdate } = props;

	/**
	 * Convert shelf name into Human readable name.
	 * @param {string} name 
	 * @returns {string}
	 */
	const readableName = (name) => {
		const shelfName     = name.replace(/([A-Z]+)/g, ' $1').replace(/([A-Z][a-z])/g, ' $1');
		const diffForHumans = shelfName.charAt(0).toUpperCase() + shelfName.slice(1);
		return diffForHumans;
	};
	
	return (
		<div className="bookshelf">
			<h2 className="bookshelf-title">{readableName(shelf)}</h2>
			<div className="bookshelf-books">
				<ol className="books-grid">
					{shelfBooks.map((book, idx) => <Book book={book} key={idx} onUpdate={onUpdate} />)}
				</ol>
			</div>
		</div>
	);
};

BooksShelf.propTypes = {
	shelf     : PropTypes.string.isRequired,
	shelfBooks: PropTypes.array.isRequired,
	onUpdate  : PropTypes.func.isRequired
};

export default BooksShelf;
