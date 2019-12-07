export interface IComment {
    title: string;
}

export interface ICommentState {
    readonly comments: IComment[];
}