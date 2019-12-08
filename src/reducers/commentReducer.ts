import { CommentActionTypes } from '../actions/commentsActions'
import { ICommentState } from '../models'
import { ADD_COMMENT } from '../constants/actions'

const initialState: ICommentState = {
  comments: []
}

let id = 0;

export function commentReducer(
  state = initialState,
  action: CommentActionTypes
): ICommentState {
  switch (action.type) {
    case ADD_COMMENT: {
      const abc = [...state.comments, {
        ...action.payload,
        id
      }]
      console.log(state, action, abc)
      return {
        ...state,
        comments: abc
      };
    }
  }
  return state;
}