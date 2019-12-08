import React from 'react';
import CommentContainer from '../components/CommentContainer';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../store';

const mapState = (state: RootState) => ({
  comments: state.commentReducer.comments.filter(({ favorite }) => favorite)
})

const mapDispatch = {
}

const connector = connect(
  mapState,
  mapDispatch
)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & {}

const Favorite: React.FC<Props> = props => {
  const { comments } = props;
  return (
    <CommentContainer comments={comments}/>
  );
}

export default connector(Favorite);

