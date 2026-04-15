import styled from "styled-components";
import Image from "../../assets/images/background3.svg"

export const ContactsSection = styled.section`
    width: 100%;
    min-height: 100vh;

    background: url(${Image}) center/cover no-repeat;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 100px;
    padding-bottom: 100px;
`;

export const ContactsTitle = styled.h2`
    margin: 0 0 40px 0;

    font-family: Montserrat, sans-serif;
    font-weight: 600;
    font-size: 72px;
    line-height: 100%;
    color: #ffffff;
    text-shadow: 0 0 10px #0a0e39;

    /*background: linear-gradient(90deg, #00F5A0 0%, #00D9F5 100%);*/
    /*-webkit-background-clip: text;
    -webkit-text-fill-color: transparent;*/
    letter-spacing: 0.04em;

`;

export const FormWrapper = styled.div`
  width: 676px;
  height: 429px;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FormRow = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Input = styled.input`
  flex: 1;
  height: 51px;

  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;

  padding: 0 16px;

  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);

  color: white;
  outline: none;
    
`;

export const Textarea = styled.textarea`
  flex: 1;
  height: 225px;

  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;

  padding: 16px;

  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);

  color: white;
  resize: none;
  outline: none;
`;

export const FormLabel = styled.div`

    font-family: Montserrat, sans-serif;
    font-size: 24px;
    color: #ffffff;
    text-shadow: 0 0 10px #0a0e39;
    text-transform: uppercase;
    font-weight: 600;
`;