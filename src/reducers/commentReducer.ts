import { handleActions } from 'redux-actions';
import { RootState } from './state';
import { IComment } from '../models';
import { CommentActions } from '../actions';

const initialState: RootState.CommentState = [  
];

export const commentsReducer = handleActions<RootState.CommentState, IComment>(  
  {
    [CommentActions.Type.FETCH_COMMENTS]: (state, action) => {
      if(action.payload) {
        return {
          ...state,
          ...action.payload
        }
      }      
      return state
    },    
  },
  initialState
);