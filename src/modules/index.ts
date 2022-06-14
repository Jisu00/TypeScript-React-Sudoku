import { combineReducers } from 'redux';
import buttonReducer from './button';

const rootReducer = combineReducers({
  buttonReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;