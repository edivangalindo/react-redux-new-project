import * as actionTypes from '../Actions/types';

const initialState = {
    newValue: "Atualizado ppto's via Redux!"
};

export const pptoReducer = (state = initialState, action) => {
    debugger;
    switch (action.type) {
        case actionTypes.CLICK_UPDATE_VALUE:
            return { ...state, newValue: action.newValue };
        default:
            return state;
    }
};