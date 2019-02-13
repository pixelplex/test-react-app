import React from 'react';
import PropTypes from 'prop-types';
import { getImagePath } from '../../helpers/ApiHelper';

const Poster = (props) => {
	const { image, alt } = props;

	return (
		<React.Fragment>
			{image ?
				<img className="image" src={getImagePath(image)} alt={alt} />
				:
				<div className="no-image" />
			}
		</React.Fragment>
	);
};

Poster.propTypes = {
	image: PropTypes.string,
	alt: PropTypes.string,
};

Poster.defaultProps = {
	image: '',
	alt: '',
};

export default Poster;
