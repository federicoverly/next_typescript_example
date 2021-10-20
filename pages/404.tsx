// Custom 404 with automatic redirection to home after 3 seconds with useEffect and useRouter

import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Container, Content, Title } from "../themes/globalThemes";

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  return (
    <>
      <Head>
        <title>Age of Empires | Error </title>
      </Head>
      <Container>
        <Title>Oooooopsss!</Title>
        <Content>That page cannot be found.</Content>
        <RedirectText>
          Better go to <Link href="/">Homepage</Link>
        </RedirectText>
      </Container>
    </>
  );
};

export default NotFound;

const RedirectText = styled.p`
  font-size: 1.3em;
`;
