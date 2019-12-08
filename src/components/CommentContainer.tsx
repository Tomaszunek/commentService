import React from 'react';
import styled from 'styled-components';
import { IComment } from '../models';
import Comment from './Comment';
import { device } from '../constants/devices'
import { ConnectedProps, connect } from 'react-redux';
import { ADD_TO_FAVORITE } from '../constants/actions';

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
`;

const mapState = () => ({
})

const mapDispatch = {
    addToFavorite: (id: number) => ({ type: ADD_TO_FAVORITE, payload: id })
}

const connector = connect(
    mapState,
    mapDispatch
)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & {
    comments: IComment[]
}

const CommentContainer: React.FC<Props> = props => {
    const { comments, addToFavorite } = props;
    return (
        <Container>
            {
                comments.map((comment, index) =>
                    <Comment key={index} comment={comment} addToFavorite={addToFavorite} />)
            }
        </Container>
    );
}

export default connector(CommentContainer)
