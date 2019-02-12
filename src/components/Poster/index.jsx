import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getImagePath } from '../../helpers/ApiHelper';

const Poster = (props) => {
	const { url, image, title } = props;

	return (
		<Link to={url}>
			{image ?
				<img className="image" src={getImagePath(image)} alt={title} />
				:
				<div className="no-image" />
			}
			<div className="film-title"><span>{title}</span></div>
		</Link>
	);
};

Poster.propTypes = {
	url: PropTypes.string,
	image: PropTypes.string,
	title: PropTypes.string,
};

Poster.defaultProps = {
	url: '',
	image: '',
	title: '',
};

export default Poster;
