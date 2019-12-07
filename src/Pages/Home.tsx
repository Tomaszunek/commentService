import React from 'react';
import { connect } from 'react-redux';
import { IAppState } from '../store';
import { IComment } from '../models';
import CommentContainer from '../components/CommentContainer';

interface IProps {
  comments: IComment[];
}

const Home: React.FC<IProps> = props => {
  const { comments } = props;
  return (
    <CommentContainer comments={comments}/>
  );
}

const mapStateToProps = (store: IAppState) => {
  return {
    comments: store.commentState.comments,
  };
};

export default connect(mapStateToProps)(Home);

