import React from 'react';
import { connect } from 'react-redux';
import { IAppState } from '../store';

import { IComment } from '../models';
import Comment from '../components/Comment';

interface IProps {
  comments: IComment[];
}

const Home: React.FC<IProps> = (props) => {
  const { comments } = props;
  return (
    <div>{comments.map(comment => <Comment comment={comment}/>)}</div>
  );
}

const mapStateToProps = (store: IAppState) => {
  return {
    comments: store.commentState.comments,
  };
};

export default connect(mapStateToProps)(Home);

