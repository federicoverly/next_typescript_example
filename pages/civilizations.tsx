import type { GetStaticProps } from "next";
import Head from "next/head";
import { Civilizations } from "../components/Civilizations";
import { CivilizationInterface } from "../interfaces/interfaces";

type Props = {
  data: {
    civilizations: CivilizationInterface[];
  };
};

const CivilizationsPage: React.FC<Props> = ({ data }: Props) => {
  // console.log(data);
  // console.log(data.civilizations);
  return (
    <>
      <Head>
        <title>Age of Empires | Civilizations </title>
        <meta name="keywords" content="age of empires" />
      </Head>
      <Civilizations civilizations={data.civilizations} />
    </>
  );
};

// This function gets called at build time
export const getStaticProps: GetStaticProps = async () => {
  // Call an external API endpoint to get posts
  const res = await fetch(
    "https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations"
  );
  const data = await res.json();

  return {
    props: {
      data
    }
  };
};

export default CivilizationsPage;
