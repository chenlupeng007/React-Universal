import { combineReducers } from 'redux';

import todo from '@components/About/reducer';

const composedReducer = combineReducers({
  todo
});

export default composedReducer;