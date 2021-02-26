import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShelfChanger extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 'move'
		};
	}

	/**
	 * Update state & server with the selected value.
	 *
	 * @memberof ShelfChanger
	 */
	selectionHandler = (value) => {
		this.setState({ value });
		this.props.onUpdate(this.props.book, value);
	};

	render = () => {
		const {shelf} = this.props.book;
		return (
			<div className="book-shelf-changer">
				<select
					onChange={(event) => this.selectionHandler(event.target.value)}
					value={shelf ? shelf : this.state.value}
				>
					<option value="move" disabled>
						Move to...
					</option>
					<option value="currentlyReading">Currently Reading</option>
					<option value="wantToRead">Want to Read</option>
					<option value="read">Read</option>
					<option value="none">None</option>
				</select>
			</div>
		);
	};
}

ShelfChanger.propTypes = {
	book    : PropTypes.object.isRequired,
	onUpdate: PropTypes.func.isRequired
};

export default ShelfChanger;
