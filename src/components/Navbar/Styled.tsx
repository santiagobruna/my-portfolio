import styled from "styled-components";
import variables from "../../style/Variables";

export const Nav = styled.nav`
    width: 100%;
    padding: 2rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #4b2c2c;
    font-family:  'Nunito', sans-serif;
    overflow: visible; 
`;

export const Logo = styled.a`
    font-weight: 700;
    font-size: 1.5rem;
    color: #fff;
    cursor: pointer;
    user-select: none;
    letter-spacing: 2px;
    text-decoration: none;
    display: flex;
    align-items: center;
`;


export const Hamburger = styled.div`
    display: none;
    cursor: pointer;
    color: white;

    @media (max-width: 768px) {
        display: block;
    }
`;

export const Menu = styled.ul<{ open: boolean }>`
    list-style: none;
    display: flex;
    gap: 2rem;

    @media (max-width: 768px) {
        flex-direction: column;
        position: absolute;
        top: 60px;
        right: 1rem;
        background-color: ${variables.colorHeader};
        border-radius: 8px;
        padding: 1rem 1.5rem;
        box-shadow: 0 4px 10px rgba(0,0,0,0.15);
        opacity: ${({ open }) => (open ? 1 : 0)};
        pointer-events: ${({ open }) => (open ? 'auto' : 'none')};
        transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-10px)')};
        transition: opacity 0.3s ease, transform 0.3s ease;
        z-index: 1000;
        width: 180px; 
    }

`;

export const MenuItem = styled.li``;

export const MenuLink = styled.a`
    color: white;
    text-decoration: none;
    font-weight: 500;
    font-size: 1rem;
    position: relative;
    cursor: pointer;
    transition: color 0.3s ease;

    &:after {
        content: "";
        position: absolute;
        width: 0%;
        height: 2px;
        bottom: -4px;
        left: 0;
        background-color: #ffffff;
        transition: width 0.3s ease;
    }

    &:hover:after {
        width: 100%;
    }
`;