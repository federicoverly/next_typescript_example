import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import Head from "next/head";
import { CivilizationInterface } from "../../interfaces/interfaces";
import { ParsedUrlQuery } from "querystring";
import { CivilizationDetailComponent } from "../../components/CivilizationDetail";

// First step: generate an array of ids using the getStaticPaths
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(
    "https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations"
  );
  const data = await res.json();

  const paths = data.civilizations.map(
    (civilization: CivilizationInterface) => {
      return {
        params: { id: civilization.id.toString() }
      };
    }
  );

  return {
    paths,
    fallback: false
  };
};

// Second step: request based on the previous paths generated
interface IParams extends ParsedUrlQuery {
  id: string;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as IParams;

  const res = await fetch(
    "https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/" + id
  );
  const data = await res.json();

  // console.log(data);

  return {
    props: {
      civilization: data
    }
  };
};

type Props = {
  civilization: CivilizationInterface;
};

const CivilizationDetail: React.FC<Props> = ({ civilization }: Props) => {
  // console.log(civilization);
  return (
    <>
      <Head>
        <title>Age of Empires | Civilization Detail </title>
        <meta name="keywords" content="age of empires" />
      </Head>
      <CivilizationDetailComponent civilization={civilization} />
    </>
  );
};

export default CivilizationDetail;
