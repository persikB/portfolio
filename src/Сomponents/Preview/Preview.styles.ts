import styled from "styled-components";
import backgroundImg from "../../assets/images/background1.svg";

export const PreviewWrapper = styled.div`
  width: 100%;
  min-height: 100vh;

  background-image: url(${backgroundImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PreviewSection = styled.section`
  height: 100vh;
  background: #0d0e1b;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PreviewContainer = styled.div`
    width: 1200px;
    height: 530px;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PreviewLabel = styled.div`
  font-family: Tinos, serif;
  font-weight: 400;
  font-size: 20px;
  color: #D7E5EC;
  line-height: 100%;
`;

export const PreviewName = styled.h1`
  font-family: Montserrat, sans-serif;
  font-weight: 600;
  font-size: 72px;
  line-height: 100%;

  background: linear-gradient(90deg, #00F5A0 0%, #00D9F5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const PreviewText = styled.p`
  font-family: Montserrat, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.04em;
  color: #BDEBEA;
`;

export const PreviewImage = styled.img`
    width: 500px;
    height: 500px;
    object-fit: cover;
`;


