/* eslint-disable */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Swiper from 'react-id-swiper';

import { VIDEO_DETAIL_PATH } from './../../constants/RouterConstants';

import Poster from './../../components/Poster';

class Carousel extends Component {

	constructor(props) {
		super(props);

		this.goNext = this.goNext.bind(this);
		this.goPrev = this.goPrev.bind(this);
	}

	goNext(e) {
		e.preventDefault();
		this.swiper.slideNext();
	}

	goPrev(e) {
		e.preventDefault();
		this.swiper.slidePrev();
	}

	render() {

		const params = {
			slidesPerView: 5,
			grabCursor: true,
			spaceBetween: 38,
			loop: true,
			breakpoints: {
				// when window width is <= 480px
				480: {
					slidesPerView: 1,
					spaceBetween: 20,
					centeredSlides: true,
				},
				767: {
					slidesPerView: 1,
					spaceBetween: 20,
				},
				// when window width is <= 640px
				1070: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
				1314: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
		};

		const { list } = this.props;

		return (
			<div className="inner-section">
				<Swiper {...params} ref={(node) => { this.swiper = node ? node.swiper : null; }} >
					{
						list.map((item) => (
							<Link
								to={VIDEO_DETAIL_PATH.replace(/:type/, item.type).replace(/:id/, item.id)}
								key={item.id}
								className="element"
							>
								<div className="help-container">
									<Poster image={item.poster_path} alt={item.title} />
									<div className="film-title"><span>{item.title}</span></div>
								</div>
							</Link>
						))
					}
				</Swiper>
				<a href="" className="slide-next-btn" onClick={(e) => this.goNext(e)} />
				<a href="" className="slide-prev-btn" onClick={(e) => this.goPrev(e)} />
			</div>
		);
	}

}

Carousel.propTypes = {
	list: PropTypes.array,
};

Carousel.defaultProps = {
	list: [],
};

export default Carousel;
