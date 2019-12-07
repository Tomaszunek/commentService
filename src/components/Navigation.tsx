import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 250px;
    height: 250px;
    margin: 0 auto;
    position: relative;
`

const Circle = styled.div`
    width: 250px;
    height: 250px;
    opacity: 1;
    
    -webkit-transform: scale(0);
    -moz-transform: scale(0);
    transform: scale(0);

    -webkit-transition: all 0.4s ease-out;
    -moz-transition: all 0.4s ease-out;
    transition: all 0.4s ease-out;

    &.open {
        opacity: 1;

        -webkit-transform: scale(1);
        -moz-transform: scale(1);
        transform: scale(1);
    }

    &:hover {
        color: #eef;
    }
`

const CircleMenu = styled.div`
    position: absolute;
    top: calc(50% - 30px);
    left: calc(50% - 30px);
    text-decoration: none;
    text-align: center;
    color: #444;
    border-radius: 50%;
    display: block;
    height: 40px;
    width: 40px;
    line-height: 40px;
    padding: 10px;
    background: #dde;

    &:hover {
        background-color: #eef;
    }
`

const Link = styled('a')<ILinkProps>`
    ${props => {
        const left = (50 - 35*Math.cos(-0.5 * Math.PI - 2*(1/props.arrLength + 7)*props.index + 7*Math.PI)).toFixed(4) + "%";
        const top = (50 + 35*Math.sin(-0.5 * Math.PI - 2*(1/props.arrLength + 7)*props.index + 7*Math.PI)).toFixed(4) + "%"
     return `
        text-decoration: none;
        color: black;
        display: block;
        height: 40px;
        width: 40px;
        line-height: 40px;
        margin-left: -20px;
        margin-top: -20px;
        position: absolute;
        text-align: center;
        left: ${left}
        top: ${top}
    `}}
`

interface ILink {
    href: string,
    text: string,
}

interface ILinkProps {
    index: number,
    arrLength: number,
}

const Navigation: React.FC = () => {
    const [visibleMenu, setVisible] = useState(false);
    const links: ILink[] = [
        {
            href: '/a',
            text: 'a'
        },
        {
            href: '/b',
            text: 'b'
        },
        {
            href: '/c',
            text: 'c'
        }
    ]

    const showMenu = () => {
        console.log("abc");
        setVisible(!visibleMenu)
    }
    return (
        <Container>
            <Circle className={visibleMenu ? "open" : ""}>
                {
                    links.map((link, index, arrLinks) => <Link href={link.href} index={index} arrLength={arrLinks.length} className="open"> {link.text}</Link>)
                }
            </Circle>
            <CircleMenu onClick={() => { showMenu() }} />
        </Container>
    );
}

export default Navigation;
