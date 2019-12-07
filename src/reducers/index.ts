import { combineReducers } from 'redux';
import { IRootState, RootState } from './state';
import { commentsReducer } from './commentReducer';

export { IRootState, RootState };

// NOTE: current type definition of Reducer in 'redux-actions' module
// doesn't go well with redux@4
export const rootReducer = combineReducers<IRootState>({
    comments: commentsReducer as any,
});