import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { Container, Content } from "../themes/globalThemes";

type Props = {
  name: string;
  id: number;
  key: number;
};

export const Civilization: React.FC<Props> = ({ name, id }: Props) => {
  return (
    <CivilizationCardContainer>
      <Link href={"/civilizations/" + id} key={id}>
        <CivilizationName>{name}</CivilizationName>
      </Link>
    </CivilizationCardContainer>
  );
};

const CivilizationCardContainer = styled(Container)`
  height: 30px;
  padding: 20px 0px;
  border-bottom: solid 1px lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const CivilizationName = styled(Content)`
  cursor: pointer;
`;
