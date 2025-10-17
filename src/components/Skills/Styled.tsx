import styled from "styled-components";

export const Container = styled.section`
    padding: 4rem 2rem;
    background-color: #fff;
    text-align: center;
`;

export const Title = styled.h2`
    font-size: 2rem;
    margin-bottom: 2rem;
    color: #111;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 2rem;
    max-width: 1000px;
    margin: 0 auto;
`;

export const SkillCard = styled.div`
    background-color: #f9f9f9;
    border-radius: 12px;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 0 0 transparent;
    cursor: pointer;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }
`;

export const IconWrapper = styled.div`
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
`;

export const SkillName = styled.span`
    font-weight: 500;
    color: #222;
`;
export const GitHubButton = styled.a`
    display: inline-block;
    margin-top: 2.5rem;
    padding: 0.75rem 1.5rem;
    background-color: #333;
    color: white;
    font-weight: 500;
    border-radius: 8px;
    text-decoration: none;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #555;
    }
`;
