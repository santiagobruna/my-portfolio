import styled from "styled-components";

export const Nav = styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color:#C37670;
`;

export const Logo = styled.a`
    font-weight: 700;
    font-size: 1.5rem;
    color: #fff;
    cursor: pointer;
    user-select: none;
    letter-spacing: 2px;
`;


export const Menu = styled.ul`
    list-style: none;
    display: flex;
    gap: 2rem;
`;

export const MenuItem = styled.li``;

export const MenuLink = styled.a`
    color: #cbd5e1;
    font-weight: 500;
    font-size: 1rem;
    position: relative;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
        color: #60a5fa; /* azul suave */
    }

    &:after {
        content: "";
        position: absolute;
        width: 0%;
        height: 2px;
        bottom: -4px;
        left: 0;
        background-color: #60a5fa;
        transition: width 0.3s ease;
    }

    &:hover:after {
        width: 100%;
    }
`;