import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Swiper from 'react-id-swiper';

import { VIDEO_DETAIL_PATH } from './../../constants/RouterConstants';

import Poster from './../../components/Poster';

const Carousel = (props) => {
	const { list } = props;

	const params = {
		slidesPerView: 5,
		grabCursor: true,
		spaceBetween: 38,
		loop: true,
		navigation: {
			nextEl: '.slide-next-btn',
			prevEl: '.slide-prev-btn',
		},
		breakpoints: {
			// when window width is <= 320px
			320: {
				slidesPerView: 1,
				spaceBetween: 10,
				centeredSlides: true,
			},
			// when window width is <= 480px
			480: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			// when window width is <= 640px
			640: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
		},
	};

	return (
		<React.Fragment>
			<Swiper {...params}>
				{
					list.map((item) => (
						<Link to={VIDEO_DETAIL_PATH.replace(/:type/, item.type).replace(/:id/, item.id)} key={item.id} className="element">
							<Poster image={item.poster_path} alt={item.title} />
							<div className="film-title"><span>{item.title}</span></div>
						</Link>
					))
				}
			</Swiper>
		</React.Fragment>
	);
};

Carousel.propTypes = {
	list: PropTypes.array,
};

Carousel.defaultProps = {
	list: [],
};

export default Carousel;
