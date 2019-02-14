/* eslint-disable no-undef,no-throw-literal,no-unused-vars,import/prefer-default-export,import/no-unresolved,import/no-webpack-loader-syntax */
import qs from 'qs';
import axios from 'axios';

import 'core-js/es6/string';
import 'core-js/es6/number';
import 'core-js/es6/array';
import 'core-js/es7/array';

require('script-loader!mux.js/dist/mux');
require('es6-promise').polyfill();

const parseServerError = (error) => {
	const { message } = error;
	if (typeof message !== 'string') {
		if (Object.keys(message).length) {
			const firstKey = Object.keys(message)[0];
			return {
				status: error.status,
				message: `${firstKey}: ${message[firstKey] ? message[firstKey][0] : 'Error'}`,
				error: error.message,
			};
		}
		if (Array.isArray(error.message) && error.message.length) {
			return { status: error.status, message: error.message[0] };
		}
	}

	return { status: error.status, message: error.message };
};

export function get(url, params) {
	const query = qs.stringify(params);

	return new Promise((resolve, reject) => {
		axios.get(`${__API_URL__}${url}?${query}`).then((response) => {
			resolve(response.data);
		}).catch((error) => {
			reject(parseServerError(error));
		});
	});
}

