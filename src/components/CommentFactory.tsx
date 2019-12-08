import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import axios from 'axios';
import { RootState } from '../store';
import { GET_COMMENTS, UPDATE_ID_COMMENT } from '../constants/actions';
import { IComment } from '../models';

const mapState = (state: RootState) => ({
})

const mapDispatch = {
    getComments: (comments: IComment[]) => ({ type: GET_COMMENTS, payload: comments }),
    updateIdComment: (id: number) => ({ type: UPDATE_ID_COMMENT, payload: id })
}

const connector = connect(
    mapState,
    mapDispatch
)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & {}

const getCommentsFromService = async (getCommentsAction: Function, updateIdComment: Function) => {
    const start = 20;
    const limit = 20;
    const fetchUrl = `https://jsonplaceholder.typicode.com/comments?_start=${start}&_limit=${limit}`;
    const { data } = await axios.get(fetchUrl);
    const maxIndex = data
        .map((comment: IComment) => comment.id)
        .sort((a: number,b: number) => b - a);
    getCommentsAction(data);
    updateIdComment(maxIndex[0]);
}

const CommentFactory: React.FC<Props> = props => {
    const { getComments, updateIdComment } = props;
    getCommentsFromService(getComments, updateIdComment);
    return (
        <></>
    );
}

export default connector(CommentFactory);

