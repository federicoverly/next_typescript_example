import React from "react";
import styled from "styled-components";

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>Developed by Federico Verly</FooterText>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  height: 60px;
  width: 100vw;
  background-color: #f2f2f2;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid lightgray;
  background-color: #f2f2f2;
`;

const FooterText = styled.p`
  font-size: 1.5em;
`;
