import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';
import {FaBars} from 'react-icons/fa';

export const Nav = styled.nav`
    background: #fff;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    z-index: 10;
`

export const NavLink = styled(Link)`
    color: pink;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 1.5rem  2rem;
    height: 100%;
    cursor: pointer;

    &.active {
        color: #063863;
        //border-bottom: 3px solid #F6AB0E;
    }
`

export const Bars = styled(FaBars)`
    display: none;
    color: #fff;
    background: #063863;
    padding: 10px;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 2.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`