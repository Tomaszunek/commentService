import React from 'react';
import styled from 'styled-components';
import { FiStar } from 'react-icons/fi';

interface IProps {
    favoriteState: boolean | undefined;
    id: number;
    addToFavorite: Function;
}

const Icon = styled.span`
    position: absolute;
    bottom: -2px;
    right: -1px;
    border-top: 1px solid #ffffff50;
    border-left: 1px solid #ffffff50;
    padding: 6px;
    border-radius: 5px;

    svg {
        font-size: 24px;

        &:hover {
            stroke: yellow;
        }

        &.is-active {
            fill: yellow;
            stroke: yellow;

            &:hover {
                fill: transparent;
                stroke: white;
            }
        }
    }
`;

const FavoriteButton: React.FC<IProps> = props => {
    const { addToFavorite, id, favoriteState } = props;
    return (
        <Icon onClick={(e) => {addToFavorite(id)}}>
            <FiStar className ={favoriteState ? "is-active" : ""}/>
        </Icon>
    );
}

export default FavoriteButton;
