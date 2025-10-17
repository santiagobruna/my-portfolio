import styled from 'styled-components';

export const Container = styled.section`
    background-color: #4b2c2c;
    padding: 4rem 2rem;
    color: #fff;
`;

export const Title = styled.h2`
    text-align: center;
    font-size: 2.2rem;
    margin-bottom: 2.5rem;
`;

export const ProjectsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
    max-width: 1200px;
    margin: 0 auto;
`;

export const ProjectCard = styled.div`
    background-color: #fff;
    color: #222;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
    transition: transform 0.2s;

    &:hover {
        transform: translateY(-4px);
    }
`;

export const Thumbnail = styled.img`
    width: 100%;
    height: 160px;
    object-fit: cover;
`;

export const Content = styled.div`
    padding: 1rem 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    flex: 1;
`;

export const ProjectTitle = styled.h3`
    font-size: 1.1rem;
    margin: 0;
`;

export const Description = styled.p`
    font-size: 0.85rem;
    line-height: 1.4;
    color: #444;
`;

export const TechList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
`;

export const Tech = styled.li`
    background-color: #4b2c2c;
    color: #fff;
    padding: 0.25rem 0.6rem;
    border-radius: 5px;
    font-size: 0.75rem;
    list-style-type: none;
`;

export const ButtonGroup = styled.div`
    display: flex;
    gap: 0.6rem;
    margin-top: auto;
`;

export const Button = styled.a<{ secondary?: boolean }>`
    text-decoration: none;
    background-color: ${({ secondary }) => (secondary ? "#eee" : "#C37670")};
    color: ${({ secondary }) => (secondary ? "#333" : "#fff")};
    padding: 0.4rem 0.9rem;
    border-radius: 5px;
    font-weight: 500;
    font-size: 0.8rem;
    transition: background 0.3s;
    font-weight: bold;

    &:hover {
        background-color: ${({ secondary }) => (secondary ? "#fff" : "#AC5452")};
    }
`;
