import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';

import { IComment, ICommentState } from '../models';

export enum CommentActionsTypes {
  GET_ALL = 'GET_ALL',
  MAKE_FAVORITE = 'MAKE_FAVORITE',
}

// Interface for Get All Action Type
export interface ICommentGetAllAction {
  type: CommentActionsTypes.GET_ALL;
  comments: IComment[];
}

export interface ICommentMakeFavorite {
  type: CommentActionsTypes.MAKE_FAVORITE;
  comments: IComment[];
}

export type CommentActions = ICommentGetAllAction | ICommentMakeFavorite;

export const getAllComments: ActionCreator<
  ThunkAction<Promise<any>, ICommentState, null, ICommentGetAllAction>
> = () => {
  return async (dispatch: Dispatch) => {
    try {
      const start = 20;
      const limit = 20;
      const response = await axios.get(`http://jsonplaceholder.typicode.com/comments?_start=${start}&_limit=${limit}`);
      dispatch({
        comments: response.data,
        type: CommentActionsTypes.GET_ALL,
      });
    } catch (err) {
      console.error(err);
    }
  };
};