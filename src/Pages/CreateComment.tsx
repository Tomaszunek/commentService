import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: gray;
`;

const CreateComment: React.FC = () => {
  return (
    <form className="comment-form">
        <input type="text"/>
        <input type="email"/>
        <input type="text"/>
        <Button type="submit">Create</Button>     
    </form>
  );
}

export default CreateComment;
