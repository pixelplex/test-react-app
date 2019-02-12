import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Swiper from 'react-id-swiper';
import { Link } from 'react-router-dom';
import { generateUniqueKey } from '../../helpers/GlobalHelper';

class Slider extends Component {

	render() {
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

		const { filmList } = this.props;

		return (
			<React.Fragment>
				<Swiper {...params} ref={(node) => { this.swiper = node; }} >
					{
						filmList.map((element) => (
							<Link to="/detail/:type/:id" key={generateUniqueKey()}>
								<div className="image" />
								<div className="film-title"><span>{element.title}</span></div>
							</Link>
						))
					}
				</Swiper>
			</React.Fragment>
		);
	}

}

Slider.propTypes = {
	filmList: PropTypes.array.isRequired,
};


export default Slider;
