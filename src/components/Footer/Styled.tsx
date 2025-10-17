import styled from 'styled-components';

export const FooterContainer = styled.footer`
    background-color: #4b2c2c;
    color: #fff;
    padding: 3rem 2rem 1.5rem 2rem;
    font-family: 'Nunito', sans-serif;
`;

export const FooterContent = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;

    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
    }
`;

export const LeftSide = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const Logo = styled.img`
    width: 110px;
    height: 110px;
    border-radius: 50%;
    object-fit: cover;
`;

export const TextBlock = styled.div`
    max-width: 350px;

    p {
        margin: 0.4rem 0;
        line-height: 1.6;
        font-size: 1rem;
    }

    p:first-child {
        font-weight: 700;
    }
`;

export const RightSide = styled.div`
    min-width: 220px;

    @media (max-width: 768px) {
        text-align: center;
    }
`;

export const ContactTitle = styled.h3`
    font-size: 1.4rem;
    margin-bottom: 1rem;
    font-weight: 700;
    color: #c37670;
`;

export const ContactList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const ContactItem = styled.li`
    margin-bottom: 0.8rem;

    a {
        display: flex;
        align-items: center;
        gap: 0.6rem;
        color: #fff;
        font-weight: 600;
        text-decoration: none;
        font-size: 1rem;
        transition: color 0.3s;

        &:hover {
        color: #c37670;
        }
    }

    @media (max-width: 768px) {
        justify-content: center;
    }
`;

export const Divider = styled.div`
    width: 100%;
    height: 1px;
    background-color: #c3767050;
    margin: 2rem 0 1rem;
`;

export const FooterBottom = styled.p`
    text-align: center;
    font-size: 0.9rem;
    color: #fff;
    opacity: 0.8;
    margin: 0;

    a{
        color: #fff;
        text-decoration: none;
    }
`;