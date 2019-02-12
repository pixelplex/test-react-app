import React from 'react';
import PropTypes from 'prop-types';

import Carousel from './Carousel';

const Category = (props) => {
	const {
		title, list, ...options
	} = props;

	return (
		<article className="dashboard-film-slider" {...options}>
			<div className="title">{title}</div>
			<Carousel list={list} />
		</article>
	);
};


Category.propTypes = {
	title: PropTypes.string,
	list: PropTypes.array,
};

Category.defaultProps = {
	title: '',
	list: [],
};

export default Category;
