import React from 'react';
import { IComment } from '../models';
import CommentContainer from '../components/CommentContainer';

interface IProps {
  comments: IComment[];
}

const Home: React.FC<IProps> = props => {
  // const { comments } = props;
  const comments:IComment[] = [];
  return (
    <CommentContainer comments={comments}/>
  );
}

export default Home;

