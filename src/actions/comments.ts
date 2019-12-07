import { createAction } from 'redux-actions';
import { IComment } from '../models';

export namespace CommentActions {
  export enum Type {
    FETCH_COMMENTS = 'FETCH_COMMENTS',
  }
  export const fetchAbilitiesSucess = createAction<PartialPick<IComment, "text">>(Type.FETCH_COMMENTS);

}

export type CommentActions = Omit<typeof CommentActions, 'Type'>;