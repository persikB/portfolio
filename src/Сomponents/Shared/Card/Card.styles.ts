import styled from "styled-components";

export const CardSection = styled.div`
    width: 350px;
    height: 500px;

    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);

    display: flex;
    flex-direction: column;

    overflow: hidden;

    border: 1px solid rgba(255, 255, 255, 0.1);

    border-radius: 2px;

`;

export const CardImage = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
`;

export const CardBody = styled.div`
    padding: 20px;

    display: flex;
    flex-direction: column;
    
    height: 100%;
`;

export const CardTitle = styled.h3`
    
    font-family: Montserrat, sans-serif;
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 1.5rem;
    letter-spacing: 0.04em;

    color: #ffffff;
    
    margin-bottom: 20px;
    
`;

export const CardText = styled.p`
    font-family: Montserrat, sans-serif;
    font-weight: 100;
    font-size: 1.1rem;
    line-height: 1.5rem;
    letter-spacing: 0.05em;

    color: rgba(255, 255, 255, 0.7);

`;

export const CardLinks = styled.div`
    margin-top: auto; //прижимает ссылку вниз контейнера

    display: flex;
    justify-content: space-between; //распределяет по контейнеру не оставляя отступов слева и справа

    padding-top: 15px;
`;

export const CardLink = styled.a`
    display: flex;
    align-items: center;
    gap: 10px;

    font-size: 1rem;
    background: linear-gradient(90deg, #ff6200, #ffcc00);

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    background-clip: text;
    color: transparent;
`;