import { pptoReducer } from './pptoReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
    pptoState: pptoReducer
});