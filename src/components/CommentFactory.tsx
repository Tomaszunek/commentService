import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import axios from 'axios';
import { RootState } from '../store';
import { GET_COMMENTS } from '../constants/actions';
import { IComment } from '../models';

const mapState = (state: RootState) => ({
})

const mapDispatch = {
    getComments: (comments: IComment[]) => ({ type: GET_COMMENTS, payload: comments })
}

const connector = connect(
    mapState,
    mapDispatch
)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & {}

const getCommentsFromService = async (getCommentsAction: Function) => {
    const start = 20;
    const limit = 20;
    const fetchUrl = `https://jsonplaceholder.typicode.com/comments?_start=${start}&_limit=${limit}`;
    const { data } = await axios.get(fetchUrl);
    getCommentsAction(data)
}

const CommentFactory: React.FC<Props> = props => {
    const { getComments } = props;
    getCommentsFromService(getComments);
    return (
        <></>
    );
}

export default connector(CommentFactory);

