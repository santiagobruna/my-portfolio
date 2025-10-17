import styled from 'styled-components';

export const Section = styled.section`
    background-color: #4b2c2c;
    padding: 4rem 2rem;
    text-align: center;
    color: #fff;
`;

export const Title = styled.h2`
    font-size: 2.5rem;
    margin-bottom: 2.5rem;
`;

export const CardsContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
`;

export const Card = styled.div`
    background-color: #f9f9f9;
    width: 280px;
    border-radius: 12px;
    padding: 2rem 1.5rem;
    box-shadow: 0 8px 20px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
    cursor: default;

    &:hover {
        transform: translateY(-8px);
        box-shadow: 0 12px 25px rgba(0,0,0,0.15);
    }
`;

export const IconWrapper = styled.div`
    font-size: 3.5rem;
    color: #4b2c2c;
    margin-bottom: 1.2rem;
`;

export const CardTitle = styled.h3`
    font-size: 1.4rem;
    margin-bottom: 1rem;
    color: #333;
`;

export const CardDescription = styled.p`
    font-size: 1rem;
    color: #555;
    line-height: 1.5;
`;