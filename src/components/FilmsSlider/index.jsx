import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from '../Slider';

class FilmsSlider extends Component {

	constructor(props) {
		super(props);
		this.state = { };
	}
	render() {

		const { title, filmList } = this.props;

		return (
			<article className="dashboard-film-slider">
				<div className="title">{title}</div>
				<Slider filmList={filmList} />
			</article>
		);
	}

}

FilmsSlider.propTypes = {
	title: PropTypes.string.isRequired,
	filmList: PropTypes.array.isRequired,
};

export default FilmsSlider;
