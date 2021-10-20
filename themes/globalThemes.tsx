// Global styled components, to be used in different components/pages

import styled from "styled-components";

export const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  color: black;
  margin-bottom: 20px;
`;

export const Content = styled.p`
  font-size: 1.5em;
  text-align: center;
  color: black;
`;

export const Container = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`;
