import { combineReducers } from 'redux'
import tokens from './tokenReducer';
import selectors from './selectorReducer';

export default combineReducers({
    selectors,
    tokens
});
