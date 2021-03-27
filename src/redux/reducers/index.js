import {combineReducers} from 'redux';
import AppReducer from './AppReducer';

const appReducer = combineReducers({
  dataState: AppReducer,
});
const rootReducer = (state, action) => {
  return appReducer(state, action);
};
export default rootReducer;
