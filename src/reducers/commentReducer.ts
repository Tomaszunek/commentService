import { CommentActionTypes } from '../actions/commentsActions'
import { ICommentState, IComment } from '../models'
import { ADD_COMMENT, GET_COMMENTS, ADD_TO_FAVORITE } from '../constants/actions'

const initialState: ICommentState = {
  comments: []
}

let id = 0

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
    default:
      return state
  }
}

const addToFavoriteById = (id: number, comments: IComment[]) => {
  const comment: any = comments.filter(comment => comment.id === id);
  const otherComments = comments.filter(comment => comment.id !== id);
  return [
    ...otherComments,
    {
      ...comment,
      favorite: !comment.favorite
    }]
  }
