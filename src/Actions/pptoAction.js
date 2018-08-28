import * as actionTypes from './types';

export const pptoButtonClick = (value) => ({
    type: actionTypes.CLICK_UPDATE_VALUE,
    newValue: value
});