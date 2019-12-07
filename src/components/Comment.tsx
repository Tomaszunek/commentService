import React from 'react';
import { IComment } from '../models';

interface IProps {
  comment: IComment;
}

const Comment: React.FC<IProps> = (props) => {
  const {comment} = props;
  const { body, email, name } = comment;
  return ( 
    <div className="comments">
      <p>{name}</p>
      <p>{body}</p>
      <p>{email}</p>
    </div>
  );
}

export default Comment;
