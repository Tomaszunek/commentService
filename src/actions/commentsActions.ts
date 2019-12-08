import { ADD_COMMENT } from "../constants/actions";
import { IComment } from "../models";

interface AddCommentAction {
  type: typeof ADD_COMMENT
  payload: IComment
}

export function addComment(newComment: IComment): CommentActionTypes {
  return {
    type: ADD_COMMENT,
    payload: newComment
  }
}

export type CommentActionTypes = AddCommentAction;
