import React, { useState } from 'react';
import styled from 'styled-components';

interface IProps {
    labelText: string;
    type: string;
    spec: IInputSpec;
    name: string;
}

interface IInputSpec {
    min?: number;
    type: string;
}

const InputContainer = styled.label`
    position: relative;
    margin: auto;
    width: 100%;
    max-width: 380px;
    box-sizing: border-box;
    margin-bottom: 40px;
`;

const Input = styled.input`
     -webkit-appearance: none;
    width: 100%;
    border: 0;
    font-family: inherit;
    padding: 20px 10px;
    height: 60px;
    font-size: 26px;
    font-weight: 500;
    border-bottom: 1px solid #C8CCD4;
    background: none;
    border-radius: 0;
    color: white;
    transition: all .15s ease;
    box-sizing: border-box;

    &:hover {
      background: rgba(#223254,.03);
    }

    &:not(:placeholder-shown) {
      + span {
        color: #c0d5ff;
        transform: translateY(-30px) scale(1);
      }
    }

    &:focus {
      background: none;
      outline: none;
        + span {
            color: #0077FF;
            transform: translateY(-26px) scale(1.2);
            + .border {
                transform: scaleX(1);
            }
        }
    }
`;

const LabelText = styled.span`
    position: absolute;
    top: 16px;
    left: 0;
    font-size: 16px;
    color: #9098A9;
    font-weight: 500;
    transform-origin: 0 0;
    transition: all .2s ease;
    box-sizing: border-box;

    &.error {
        color: red;
    }

    &.valid {
        color: green;
    }
`;

const Border = styled.span`
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 100%;
    background: #0077FF;
    transform: scaleX(0);
    transform-origin: 0 0;
    transition: all .15s ease;
    box-sizing: border-box;
`;

const checkInput = (text: string, minLenght: number | undefined, type: string, changeStatusEvent: Function, setValidState: Function) => {
    changeStatusEvent(true);
    let isValid = true;
    if(minLenght && minLenght > text.length) {
        isValid = false;
    }
    if(type === 'char' && !(text.match(/[a-zA-Z]/gi))) {
        isValid = false;
    }
    if(type === 'charDigit' && !(text.match(/[a-zA-Z0-9]/gi))) {
        isValid = false;
    }
    if(type === 'mail' && !(text.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/gi))) {
        isValid = false;
    }
    setValidState(isValid);
}

const InputForm: React.FC<IProps> = (props) => {
    const { labelText, type, spec, name } = props;
    const { min, type: specType } = spec;

    const [isValid, setValid] = useState(false);
    const [changeStatus, setChangeStatus] = useState(false);
    const isValidChange = () => changeStatus ? isValid ? "valid" : "error" : "";
    const [validMessage, setValidMessage] = useState(`   ( ${min ? 'min length ' + min + ',' : ''}  ${specType}) ${isValidChange()}`)
    return (
        <InputContainer>
            <Input type={type} name={name} placeholder="&nbsp;" onChange={(e) => {
                checkInput(e.currentTarget.value, min, specType, setChangeStatus, setValid);
                setValidMessage(`   ( ${min ? 'min length ' + min + ',' : ''}  ${specType}) ${isValidChange()}`)
            }}></Input>
            <LabelText className={isValidChange()}>{labelText + validMessage}</LabelText>
            <Border/>
        </InputContainer>
    );
}

export default InputForm;
