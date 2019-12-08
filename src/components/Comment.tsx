import React from 'react';
import { IComment } from '../models';
import styled from 'styled-components';
import FavoriteButton from './FavoriteButton';

interface IProps {
  comment: IComment;
  addToFavorite: Function;
}

const CommentDiv = styled.div`
  border: 1px solid #ffffff40;
  border-radius: 5px;
  padding: 10px 20px;
  position: relative;
`

const Email = styled.p`
  color: #d82624;
  font-size: 22px;
  font-weight: 800;
  text-align: center;
  padding-bottom: 0.5em;
`;

const Name = styled.p`
  font-style: italic;
  font-size: 18px;
  padding-bottom: 0.5em;

  &::first-letter {
    font-size: 25px;
    text-transform: capitalize;
    font-weight: 900;
  }
`;

const Body = styled.p`
  font-size: 18px;
`;

const Comment: React.FC<IProps> = props => {
  const { comment, addToFavorite } = props;
  const { body, email, name, favorite, id } = comment;

  const cutCommentBody = (body: string, cutLength:number) => body.length > cutLength ? `${body.substring(0, cutLength)}...` : body ;
  return (
    <CommentDiv>
      <Email>{email}</Email>
      <Name>{name}</Name>
      <Body>{cutCommentBody(body, 20)}</Body>
      <FavoriteButton favoriteState={favorite} id={id} addToFavorite={addToFavorite}/>
    </CommentDiv>
  );
}

export default Comment;
