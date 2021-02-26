import React from 'react';
import PropTypes from 'prop-types';

const BookAuthors = (props) =>
	props.authors ? (
		props.authors.map((author, idx) => (
			<div key={idx} className="book-authors">
				{author}
			</div>
		))
	) : (
		<div className="book-authors">Unknown</div>
	);

	BookAuthors.propTypes = {
		authors: PropTypes.array,
	}

export default BookAuthors;
