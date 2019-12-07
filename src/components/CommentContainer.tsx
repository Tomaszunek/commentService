import React from 'react';
import styled from 'styled-components';
import { IComment } from '../models';
import Comment from './Comment';
import { device } from '../constants/devices'

interface IProps {
    comments: IComment[];
}

const Container = styled.div`
    @media ${device.mobileL} {
        grid-template-columns: repeat(1, 1fr);
    }

    @media ${device.mobileL} {
        grid-template-columns: repeat(2, 1fr);
    }

    @media ${device.laptop} {
        grid-template-columns: repeat(3, 1fr);
    }

    @media ${device.desktop} {
        grid-template-columns: repeat(4, 1fr);
    }

    display: grid;
    grid-gap: 20px 25px;
    background-color: #010208;   
`

const CommentContainer: React.FC<IProps> = props => {
    const { comments } = props;
    return (
        <Container>
            {
                comments.map((comment, index) =>
                    <Comment key={index} comment={comment} />)
            }
        </Container>
    );
}

export default CommentContainer;
