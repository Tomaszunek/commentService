import { Reducer } from 'redux';
import {
  CommentActions,
  CommentActionsTypes,
} from '../actions/commentsActions';
import { ICommentState } from '../models'


// Define the initial state
const initialCommentState: ICommentState = {
  comments: [],
};

export const commentReducer: Reducer<ICommentState, CommentActions> = (
  state = initialCommentState,
  action
) => {
  switch (action.type) {
    case CommentActionsTypes.GET_ALL: {
      return {
        ...state,
        comments: action.comments,
      };
    }
    default:
      return state;
  }
};