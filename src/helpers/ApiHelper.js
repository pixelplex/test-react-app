/* eslint-disable import/prefer-default-export */

import { IMAGE_URL, IMAGE_WIDTH } from '../constants/ApiConstants';

/**
 * Get full image url
 * @param {string} fileName
 * @param {number|null} widthSize
 * @returns {string}
 */
export const getImagePath = (fileName, widthSize = null) =>
	`${IMAGE_URL}w${widthSize && IMAGE_WIDTH.includes(widthSize) ? widthSize : IMAGE_WIDTH[0]}${fileName}`;
