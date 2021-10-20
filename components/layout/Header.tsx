import React from "react";
import styled from "styled-components";
import Link from "next/link";

export const Header = () => {
  return (
    <NavbarContainer>
      <Link href="/">
        <Logo src="/images/logo.png" alt="Logo" />
      </Link>
      <LinksContainer>
        <Link href="/civilizations">
          <Links>Civilizations</Links>
        </Link>
        <Link href="/about">
          <Links>About</Links>
        </Link>
      </LinksContainer>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.div`
  height: 80px;
  width: 100vw;
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid lightgray;
  background-color: #f2f2f2;
`;

const Logo = styled.img`
  height: 40px;
  width: 40px;
  object-fit: contain;
  flex: 0.4;
  display: flex;
  margin-right: auto;
  cursor: pointer;
`;

const LinksContainer = styled.div`
  display: flex;
  flex: 0.6;
  justify-content: space-evenly;
  align-items: center;
  margin-left: 12px;
`;
const Links = styled.p`
  color: color;
  font-size: 1.5em;
  cursor: pointer;
`;
