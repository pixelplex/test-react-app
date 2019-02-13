/* eslint-disable import/prefer-default-export */

/**
 * Get time from minutes
 * @param {number} minutes
 * @returns {string}
 */
export const getTimeFromMinutes = (minutes) => {
	let h = Math.floor(minutes / 60);
	let m = minutes % 60;
	h = h < 10 ? `0${h}` : h;
	m = m < 10 ? `0${m}` : m;
	return `${h}:${m}`;
};

/**
 * Format price
 * @param n
 * @param _c
 * @param _d
 * @param _t
 * @returns {string}
 */
export const formatPrice = (n, _c = 2, _d = '.', _t = ' ') => {
	_c = Math.abs(_c);
	const c = Number.isNaN(_c) ? 2 : _c;
	const d = _d === undefined ? '.' : _d;
	const t = _t === undefined ? ',' : _t;
	const s = n < 0 ? '-' : '';
	const i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c), 10));
	const jt = i.length;
	const j = jt > 3 ? jt % 3 : 0;
	return s + (j ? i.substr(0, j) + t : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, `$1${t}`) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : '');
};

/**
 * Get object by fields
 * @param {Array} fields
 * @param {Object} object
 * @returns {*}
 * @private
 */
export const getObjectByField = (fields, object) => fields.reduce((obj, item) => {
	obj[item] = object[item];
	return obj;
}, {});

export const extendObjectKey = (extendedKey, extendedObj) => Object.keys(extendedObj)
	.reduce((obj, key) => {
		obj[`${extendedKey}.${key}`] = extendedObj[key];
		return obj;
	}, {});
