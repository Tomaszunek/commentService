import React from 'react';
import styled from 'styled-components';
import InputForm from '../components/InputForm';
import { Link } from 'react-router-dom';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';

const Button = styled.button`
  background: gray;
  border: 0;
`;

const Form = styled.form`
  display: grid;
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
`;

const BackSubmitCont = styled.div`
  display: flex;
  margin: auto;
  margin-top: 50px;

  > * {
    margin-left: 20px;
    font-size: 30px;
    color: white;
    background: #0c0c88;
    padding: 5px 15px;
    font-weight: 500;
    font-family: none;
  }
`;

const LinkHref = styled(Link)`
  text-decoration: none;
`;


const CreateComment: React.FC = () => {
  return (
    <Form className="comment-form">
        <InputForm labelText="Name" type="text" spec={{min: 3, type: "char"}}/>
        <InputForm labelText="Mail" type="email" spec={{type: "email"}}/>
        <InputForm labelText="Content" type="text" spec={{min: 2, type: "charDigit"}}/> 
        <BackSubmitCont>
          <LinkHref to="/">
            <MdArrowBack/>
            <span>Back to Home</span>            
            </LinkHref>
          <Button type="submit">
            <span>Create Comment</span>
            <MdArrowForward/>
          </Button>
        </BackSubmitCont>
    </Form>
  );
}

export default CreateComment;
