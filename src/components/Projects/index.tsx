import * as S from './Styled';
import projectData from '../../constants/Projects/projectsData';

export default function Projects() {
    return (
        <S.Container id="projects">
            <S.Title>Meus Projetos</S.Title>
            <S.ProjectsGrid>
                {projectData.map((project, index) => (
                <S.ProjectCard key={index}>
                    <S.Thumbnail src={project.image} alt={project.title} />
                    <S.Content>
                    <S.ProjectTitle>{project.title}</S.ProjectTitle>
                    <S.Description>{project.description}</S.Description>
                    <S.TechList>
                        {project.technologies.map((tech, i) => (
                        <S.Tech key={i}>{tech}</S.Tech>
                        ))}
                    </S.TechList>
                    <S.ButtonGroup>
                        {project.demo && (
                        <S.Button href={project.demo} target="_blank">Projeto</S.Button>
                        )}
                        {project.repo && (
                        <S.Button href={project.repo} target="_blank" secondary> Código</S.Button>
                        )}
                    </S.ButtonGroup>
                    </S.Content>
                </S.ProjectCard>
                ))}
            </S.ProjectsGrid>
        </S.Container>
    );
}
