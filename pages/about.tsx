import Head from "next/head";
import React from "react";
import { Content, Title } from "../themes/globalThemes";

const about = () => {
  return (
    <>
      <Head>
        <title>Age of Empires | About </title>
        <meta name="keywords" content="age of empires" />
      </Head>
      <Title>About</Title>
      <Content>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nemo
        est corporis obcaecati vel officia totam. Repellendus tempore modi
        dolorem eos est ipsa, id temporibus esse sed quasi, natus delectus.
      </Content>
    </>
  );
};

export default about;
