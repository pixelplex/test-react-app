import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DetailsActions from '../../actions/DetailsActions';

class Detail extends React.Component {

	componentDidMount() {
		this.props.init(this.props.match.params.id);
	}

	render() {

		return (
			<h1>Detail</h1>
		);
	}

}

Detail.propTypes = {
	init: PropTypes.func.isRequired,
	match: PropTypes.object.isRequired,
};

Detail.defaultProps = {
};


export default connect(
	() => ({
	}),
	(dispatch) => ({
		init: (id) => dispatch(DetailsActions.initDetails(id)),
	}),
)(Detail);

