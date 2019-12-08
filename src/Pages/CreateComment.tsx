import React from 'react';
import styled from 'styled-components';
import InputForm from '../components/InputForm';
import { Link } from 'react-router-dom';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import { connect, ConnectedProps } from 'react-redux';
import { ICommentState, IComment } from '../models';
import { ADD_COMMENT } from '../constants/actions';

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

const handleSubmit = (event: any, addComment: Function) => {
  event.preventDefault();
  const inputs = event.target.getElementsByTagName("input");
  const comment:any = {};
  for (let a of inputs) {
    comment[a.getAttribute("name")] = a.value;
    a.value = "";
  }
  addComment(comment);
  console.log(comment);
}


const mapState = (state: ICommentState) => ({
})

const mapDispatch = {
  addComment: (newComment: IComment) => ({ type: ADD_COMMENT, payload: newComment})
}

const connector = connect(
  mapState,
  mapDispatch
)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & {}


const CreateComment: React.FC<Props> = (props) => {
  const { addComment } = props;
  return (
    <Form className="comment-form" onSubmit={(e) => {handleSubmit(e, addComment)}}>
        <InputForm labelText="Name" name="name" type="text" spec={{min: 3, type: "char"}}/>
        <InputForm labelText="Mail" name="mail" type="email" spec={{type: "email"}}/>
        <InputForm labelText="Content" name="body" type="text" spec={{min: 2, type: "charDigit"}}/> 
        <BackSubmitCont>
          <LinkHref to="/">
            <MdArrowBack/>
            <span>Back to Home</span>            
            </LinkHref>
          <Button>
            <span>Create Comment</span>
            <MdArrowForward/>
          </Button>
        </BackSubmitCont>
    </Form>
  );
}

export default connector(CreateComment)
