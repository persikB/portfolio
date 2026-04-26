import styled from "styled-components";
import Image from "../../assets/images/backgroundContacts.svg"

export const DescriptionSection = styled.section`
    width: 100%;
    height: 90vh;

    display: flex;
    flex-direction: column;
    
    background: url(${Image});
    background-size: cover; //масштабирование изображения
    background-position: center; //центрируем изображение
    background-repeat: no-repeat; //изображение не повторяется
    position: relative;
`;

export const DescriptionTitle = styled.h2`
    font-family: Montserrat, sans-serif;
    font-weight: 600;
    font-size: clamp(2.5rem, 5vw, 4.5rem);
    line-height: 1.5rem;
    letter-spacing: 0.04em;

    color: #ffffff;

    text-shadow: 0 0 10px #000000;

    text-align: center;
    margin-bottom: 25px;
`;

export const DescriptionText = styled.p`
   

    font-family: Montserrat, sans-serif;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 100%;
    letter-spacing: 0.05em;

    color: #ffffff;
    text-shadow: 0 0 10px #000000;

    text-align: center;

    padding: 0 20px;
`;
