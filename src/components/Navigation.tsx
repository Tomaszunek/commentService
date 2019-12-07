import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineHome } from 'react-icons/ai';
import { FiEdit, FiStar } from 'react-icons/fi'
import styled from 'styled-components';

const Container = styled.div`
    width: 250px;
    height: 250px;
    margin: 0 auto;
    position: absolute;
    top: -11px;
    left: -14px;
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

    svg {
        fill: white;
        font-size: 32px;
        padding-top: 4px;
    }
`

const Link = styled('a')<ILinkProps>`
    ${props => {
        const left = (48 - 35*Math.cos(-0.5 * Math.PI - 2*(1/props.arrLength)*props.index*Math.PI)).toFixed(4) + "%";
        const top = (51 + 35*Math.sin(-0.5 * Math.PI - 2*(1/props.arrLength)*props.index*Math.PI)).toFixed(4) + "%"
     return `
        text-decoration: none;
        color: black;
        display: block;
        height: 50px;
        width: 50px;
        line-height: 40px;
        margin-left: -20px;
        margin-top: -20px;
        position: absolute;
        text-align: center;
        left: ${left};
        top: ${top};
        background: gray;
        border-radius: 45px;

        &:hover {
            border: 2px solid #353535;
            height: 46px;
            width: 46px;
        }

        svg {
            font-size: 30px;
            padding-top: 5px;
            fill: white;
        }
    `}}
`

interface ILink {
    href: string,
    icon: any,
}

interface ILinkProps {
    index: number,
    arrLength: number,
}

const Navigation: React.FC = () => {
    const [visibleMenu, setVisible] = useState(false);
    const links: ILink[] = [
        {
            href: '/home',
            icon: <AiOutlineHome/>
        },
        {
            href: '/favorite',
            icon: <FiStar/>
        },
        {
            href: '/create',
            icon: <FiEdit/>
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
                    links.map((link, index, arrLinks) => (
                        <Link href={link.href} index={index} arrLength={arrLinks.length} className="open"> 
                            {link.icon}                        
                        </Link>)                        
                    )
                }
            </Circle>
            <CircleMenu onClick={() => { showMenu() }}>
                <GiHamburgerMenu/>
            </CircleMenu>
        </Container>
    );
}

export default Navigation;
