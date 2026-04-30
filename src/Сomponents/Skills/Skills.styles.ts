import styled from "styled-components";

export const SkillsSection = styled.section`
    width: 100%;
    background: #07070f;

    display: flex;
    
    
`;

export const SkillsTitle = styled.h2`
    font-family: Montserrat, sans-serif;
    font-weight: 600;
    font-size: 1rem;
    line-height: 120%;
    letter-spacing: 0.04em;

    color: #e5f8f1;

    text-align: center;
    display: none;
`;

export const SkillsRow = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    

    gap: clamp(20px, 4vw, 50px);
    padding: clamp(40px, 4vw, 70px) 20px;

    @media (max-width: 800px) {
        grid-template-columns: repeat(4, 1fr);
        justify-content: center;
    }

    @media (max-width: 500px) {
        grid-template-columns: repeat(3, 1fr);
        justify-content: center;
    }

    @media (max-width: 350px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;



