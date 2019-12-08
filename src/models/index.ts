export interface IComment {
    id: number;
    name: string;
    email: string;
    body: string;
    favorite?: boolean;
}

export interface ICommentState {
    readonly comments: IComment[];
}