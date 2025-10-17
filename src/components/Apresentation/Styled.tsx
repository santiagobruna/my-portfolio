import styled from "styled-components";
import variables from "../../style/Variables";

export const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: ${variables.backgroundSectionSecond};
    color: black;
    min-height: 90vh;
    gap: 4rem;

    @media (max-width: 768px) {
        flex-direction: column-reverse;
        /* padding: 2rem; */
        text-align: center;
        gap: 2rem;
        justify-content: center;
    }
    `;

    export const Info = styled.div`
    h1 {
        font-size: 3rem;
        margin-bottom: 0.5rem;
        
        @media (max-width: 768px) {
            font-size: 2rem;
        }
    }

    p {
        color: ${variables.colorText};
        font-size: 1.3rem;
        margin-bottom: 2rem;
    }
`;

export const SocialIcons = styled.div`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        align-items: center;
        justify-content: center;
    }
`;

export const IconButton = styled.a`
    background-color: ${variables.colorHeader};
    color: white;
    border-radius: 12px;
    padding: 0.8rem 1rem;
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s ease;

    &:hover {
        transform: translateY(-4px);
        background-color: ${variables.colorText};
    }
`;

export const ProfileImage = styled.img`
    width: 350px;
    height: 350px;
    object-fit: cover;
    border-radius: 25px;
    box-shadow: 0 0 20px rgba(255, 20, 147, 0.3);
    cursor: pointer;

    @media (max-width: 768px) {
        width: 280px;
        height: 280px;
    }
`;
