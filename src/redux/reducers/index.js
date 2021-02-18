import { combineReducers } from 'redux';
import { uiReducer } from './uiReducer';
import { contactFormReducer } from './contactFormReducer';

export const rootReducer = combineReducers({
    uiReducer,
    contactFormReducer,
});
