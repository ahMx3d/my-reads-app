import React from 'react';
import BookAuthors from './BookAuthors';
import ShelfChanger from './ShelfChanger';
import PropTypes from 'prop-types';

const Book = (props) => {
	const { book, onUpdate } = props;
	return (
		<li key={book.id}>
			<div className="book">
				<div className="book-top">
					<div
						className="book-cover"
						style={{
							width: 128,
							height: 193,
							backgroundImage: !book.imageLinks
								? 'url("https://himalayansolution.com/img/large-default-product.jpg")'
								: `url("${book.imageLinks.thumbnail}")`
						}}
					/>
					<ShelfChanger book={book} onUpdate={onUpdate} />
				</div>
				<div className="book-title">{book.title}</div>
				<BookAuthors authors={book.authors} />
			</div>
		</li>
	);
};

Book.propTypes = {
	book    : PropTypes.object.isRequired,
	onUpdate: PropTypes.func.isRequired
};

export default Book;
