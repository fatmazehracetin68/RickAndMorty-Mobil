import {combineReducers} from 'redux';
import chatracterReducer from './charactersReducer';

const rootReducer = combineReducers({
  characters: chatracterReducer,
});

export default rootReducer;
