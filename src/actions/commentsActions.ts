import { ADD_COMMENT, GET_COMMENTS, ADD_TO_FAVORITE, UPDATE_ID_COMMENT } from "../constants/actions";
import { IComment } from "../models";

interface AddCommentAction {
  type: typeof ADD_COMMENT
  payload: IComment
}

interface GetCommentsAction {
  type: typeof GET_COMMENTS
  payload: IComment[]
}

interface AddToFavoriteAction {
  type: typeof ADD_TO_FAVORITE,
  payload: number
}

interface UpdateIdCommentAction {
  type: typeof UPDATE_ID_COMMENT,
  payload: number
}

export function addComment(newComment: IComment): AddCommentAction {
  return {
    type: ADD_COMMENT,
    payload: newComment
  }
}

export function getComments(comments: IComment[]): GetCommentsAction {
  return {
    type: GET_COMMENTS,
    payload: comments
  }
}

export function addToFavorite(id: number): AddToFavoriteAction {
  return {
    type: ADD_TO_FAVORITE,
    payload: id
  }
}

export function updateIdComment(id: number): UpdateIdCommentAction {
  return {
    type: UPDATE_ID_COMMENT,
    payload: id
  }
}

export type CommentActionTypes = AddCommentAction | GetCommentsAction | AddToFavoriteAction | UpdateIdCommentAction;
