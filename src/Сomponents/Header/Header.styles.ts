import styled from "styled-components";

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  margin: 0 auto;

  width: 1400px;
  height: 70px;

  background: #090a14;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 0 0 10px 1px #00D9F5;

  z-index: 1000;
`;

export const HeaderNav = styled.nav`
  display: flex;
  gap: 40px;
`;

export const HeaderNavItem = styled.div<{ $active?: boolean }>`
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
    text-transform: uppercase;
    font-family: 'Oswald', sans-serif;

  color: #00F5A0;

  transition: color, text-shadow 0.2s ease;

  ${({ $active }) => {
    if ($active) {
      return `
      color: #00D9F5;
      text-shadow: 0 0 10px #00D9F5;
    `;
    }
    return "";
  }}
`;