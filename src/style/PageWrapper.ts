import styled from "styled-components";
import variables from "./Variables";

export const PageSection = styled.section`
  width: 100%;
`;

export const SectionInner = styled.div`
  width: 100%;
  max-width: ${variables.maxWidth};
  margin: 0 auto;
  padding-left: 2rem;
  padding-right: 2rem;

  @media (max-width: 768px) {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }
`;
