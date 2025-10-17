import styled from "styled-components";
import { ProfileImage } from "../Apresentation/Styled";
import variables from "../../style/Variables";

export const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 3rem;
    background-color: #4b2c2c; 
    color: #fff;
    padding: 4rem 6rem;
    flex-wrap: wrap;
    min-height: 100vh;

    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
        justify-content: center;
        padding: 2rem;
    }
`;

export const Image = styled(ProfileImage)`
    box-shadow: none;
`;

export const Info = styled.div`
    max-width: 600px;

    h1 {
        font-size: 2.3rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
        @media (max-width: 768px) {
            font-size: 1.9rem;
        }
    }

    h3 {
        color: #ffbebe;
        font-weight: 400;
        margin-bottom: 1rem;
    }

    p {
        line-height: 1.6;
        margin-bottom: 1.5rem;
        color: #f0eaea;
    }
`;

export const Button = styled.a`
    background-color: ${variables.colorHeader};
    color: #fff;
    border: none;
    padding: 0.9rem 2rem;
    border-radius: 40px;
    font-weight: 700;
    font-size: 1rem;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    transition: all 0.3s;
    width: 245px;
    text-align: center;
    margin-right: 10px;
    text-transform: uppercase;
    @media (max-width: 768px) {
        margin-bottom: 20px;
    }

    &:hover {
        background-color: #ff6b6b;
        transform: translateY(-3px);
    }
`;