import React from "react";
import { CivilizationInterface } from "../interfaces/interfaces";
import { Container, Content, Title } from "../themes/globalThemes";

type Props = {
  civilization: CivilizationInterface;
};

export const CivilizationDetailComponent: React.FC<Props> = ({
  civilization
}: Props) => {
  return (
    <Container>
      <Title>Civilization Detail: {civilization.name}</Title>
      <Content>Army Type: {civilization.army_type}</Content>
      <Content>
        Civilization Bonus:{" "}
        {civilization.civilization_bonus.map((each) => (
          <p>{each}</p>
        ))}
      </Content>

      <Content>Team Bonus: {civilization.team_bonus}</Content>
    </Container>
  );
};
