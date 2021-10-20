import Head from "next/head";
import Link from "next/link";
import { Content, Title } from "../themes/globalThemes";

// Head allows the inclusion of the title and the metadata

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Age of Empires | Home </title>
        <meta name="keywords" content="age of empires" />
      </Head>
      <Title>Home</Title>
      <Content>Welcome to the Next JS Age of Empires example!</Content>
      <Content>
        Please check the civilizations <Link href="/civilizations"> here </Link>{" "}
      </Content>
    </>
  );
};

export default Home;
