import { CommentActionTypes } from '../actions/commentsActions'
import { ICommentState, IComment } from '../models'
import { ADD_COMMENT, GET_COMMENTS, ADD_TO_FAVORITE, UPDATE_ID_COMMENT } from '../constants/actions'

const initialState: ICommentState = {
  comments: [],
  id: 0
}

export function commentReducer(
  state = initialState,
  action: CommentActionTypes
): ICommentState {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.payload]
      }
    case GET_COMMENTS:
      return {
        ...state,
        comments: action.payload
      }
    case ADD_TO_FAVORITE:
      return {
        ...state,
        comments: addToFavoriteById(action.payload, state.comments)
      }
    case UPDATE_ID_COMMENT: 
      return {
        ...state,
        id: action.payload
      }
    default:
      return state
  }
}

const addToFavoriteById = (id: number, comments: IComment[]) => {
  const comment: any = comments.filter(comment => comment.id === id)[0];
  const otherComments = comments.filter(comment => comment.id !== id);
  const { favorite } = comment;
  comment.favorite =  !favorite;  
  return [...otherComments, comment].sort((a,b) => a.id - b.id);
  
}
