import { combineReducers } from 'redux';

import todo from '@components/Home/reducer';

const composedReducer = combineReducers({
  todo
});

export default composedReducer;