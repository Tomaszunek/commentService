import { IComment } from '../models';

export interface IRootState {
  articles: RootState.CommentState;  
  router?: any;
}

export namespace RootState {
  export type CommentState = Array<IComment>;
}