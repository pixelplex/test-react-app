/* eslint-disable import/prefer-default-export */
import randomstring from 'randomstring';

export const generateUniqueKey = (key) => `${Date.now()}_${randomstring.generate(10)}${key || ''}`;

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
