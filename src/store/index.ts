import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import {
  commentReducer,
} from '../reducers/commentReducer';
import { ICommentState } from '../models'

export interface IAppState {
  commentState: ICommentState;
}

const rootReducer = combineReducers<IAppState>({
  commentState: commentReducer,
});

export default function configureStore(): Store<IAppState, any> {
  const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
  return store;
}