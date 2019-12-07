import React from 'react';

const CreateComment: React.FC = () => {
  return (
    <form className="comment-form">
        <input type="text"/>
        <input type="email"/>
        <textarea></textarea>
        <button type="submit">Create</button>     
    </form>
  );
}

export default CreateComment;
