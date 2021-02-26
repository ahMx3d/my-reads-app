import React from 'react';
import Header from './Header';
import BooksShelf from './BooksShelf';
import OpenSearch from './OpenSearch';
import PropTypes from 'prop-types';

const BooksList = (props) => {
	const { books, onUpdate, shelves } = props;
	return (
		<div className="list-books">
			<Header />
			<div className="list-books-content">
				{shelves.map((shelf, idx) => {
					const shelfBooks = books.filter((book) => book.shelf === shelf);
					return <BooksShelf key={idx} shelf={shelf} shelfBooks={shelfBooks} onUpdate={onUpdate} />;
				})}
				<OpenSearch />
			</div>
		</div>
	);
};

BooksList.propTypes = {
	books   : PropTypes.array.isRequired,
	shelves : PropTypes.array.isRequired,
	onUpdate: PropTypes.func.isRequired
};

export default BooksList;
