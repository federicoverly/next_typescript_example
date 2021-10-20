import React from "react";
import styled from "styled-components";
import { Footer } from "./Footer";
import { Header } from "./Header";

// Typescript props reception
type LayoutProps = {
  children: React.ReactNode;
};

export const PageLayout: React.FC<LayoutProps> = ({
  children
}: LayoutProps) => {
  return (
    <Wrapper>
      <Header />
      <Main>
        <ContentContainer>{children}</ContentContainer>
      </Main>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  min-height: 100%;
  overflow: auto;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
`;

const Main = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: calc(100vh - 60px - 60px); // header + footer
`;

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 10px 10px 60px;
  justify-content: center;
  align-items: center;
`;
