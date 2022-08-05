import { combineReducers } from 'redux';
import { reducer as trivia } from '../features/Trivia';

const rootReducer = { trivia };

export default combineReducers(rootReducer);
