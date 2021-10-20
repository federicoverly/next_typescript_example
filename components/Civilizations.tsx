import React from "react";
import { CivilizationInterface } from "../interfaces/interfaces";
import { Container, Title } from "../themes/globalThemes";
import { Civilization } from "./Civilization";

type Props = {
  civilizations: CivilizationInterface[];
};

export const Civilizations: React.FC<Props> = ({ civilizations }: Props) => {
  return (
    <Container>
      <Title>Age of Empires II: Civilizations</Title>
      {civilizations.map((civilization) => (
        <Civilization
          name={civilization.name}
          id={civilization.id}
          key={civilization.id}
        />
      ))}
    </Container>
  );
};
