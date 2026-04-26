import styled from "styled-components";

export const ProjectSection = styled.section`
    width: 100%;
    background: #07070f;

    display: flex;
`;

export const ProjectsTitle = styled.h2`
    text-align: center;
    margin-bottom: 50px;
    font-family: Montserrat, sans-serif;
    font-weight: 600;
    letter-spacing: 0.04em;
    font-size: clamp(1.5rem, 4vw, 3.5rem);
    line-height: 100%;

    color: #ffffff;
`;

export const ProjectsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 350px);
    justify-content: center;
    gap: 30px;
    margin-bottom: 20px;

    @media (max-width: 1200px) {
        grid-template-columns: repeat(2, 350px);
    }

    @media (max-width: 800px) {
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    }
`;