/* eslint-disable import/prefer-default-export */

import { IMAGE_URL, IMAGE_WIDTH } from '../constants/ApiConstants';

export const getImagePath = (fileName, widthSize) => `${IMAGE_URL}w${widthSize && IMAGE_WIDTH.includes(widthSize) ? widthSize : IMAGE_WIDTH[0]}${fileName}`;
