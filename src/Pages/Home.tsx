import React from 'react';
import { connect } from 'react-redux';
import { IAppState } from '../store';

import { IComment } from '../models';

interface IProps {
  comments: IComment[];
}

const Home: React.FC<IProps> = (props) => {
  const { comments } = props;
  return (
    <div>{comments.map(item => <p>{item.title}</p>)}</div>
  );
}

const mapStateToProps = (store: IAppState) => {
  return {
    comments: store.commentState.comments,
  };
};

export default connect(mapStateToProps)(Home);

