import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import { Formik } from 'formik';
import SearchActions from './../../actions/SearchActions';

import { getUrlParams } from './../../helpers/NavigationHelper';
import ToastActions from '../../actions/ToastActions';

class Form extends React.Component {

	constructor(props) {
		super(props);

		const urlParams = getUrlParams(window.location.search);
		this.state = {
			defaultQuery: urlParams.query || '',
		};
	}

	componentDidMount() {
		if (this.state.defaultQuery) {
			this.props.search(this.state.defaultQuery).catch((error) => {
				ToastActions.toastError(error);
			});
		}
	}

	onSubmit(values, { setSubmitting }) {
		this.props.search(values.query).then(() => {
			setSubmitting(false);
		}).catch((error) => {
			ToastActions.toastError(error);
			setSubmitting(false);
		});
	}

	validate(values) {
		const errors = {};
		if (!values.query) {
			errors.query = 'Field is required';
		}

		return errors;
	}

	render() {

		return (
			<Formik
				initialValues={{ query: this.state.defaultQuery }}
				validate={(values) => this.validate(values)}
				onSubmit={(values, actions) => this.onSubmit(values, actions)}
			>
				{({
					values,
					handleChange,
					handleBlur,
					handleSubmit,
					isSubmitting,
				}) => (
					<form className="search-field" onSubmit={handleSubmit}>
						<input
							type="text"
							name="query"
							placeholder="Enter query..."
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.query}
						/>
						<Button loading={isSubmitting} disabled={isSubmitting}>Search <div className="icon search" /></Button>
					</form>
				)}
			</Formik>
		);
	}

}

Form.propTypes = {
	search: PropTypes.func.isRequired,
};

export default connect(
	() => ({}),
	(dispatch) => ({
		search: (query) => dispatch(SearchActions.search(query)),
	}),
)(Form);
