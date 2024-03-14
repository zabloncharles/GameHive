import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import styled from "styled-components";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      <CustomHeading>{heading}</CustomHeading>
    </Heading>
  );
};

export default GameHeading;

const CustomHeading = styled.h1`
  font-family: "Spline Sans Mono", "Times New Roman", Times, serif;
  font-size: 54px;
  font-weight: bold;
  font-family: cisnero;
  background: linear-gradient(to right, rgb(0, 228, 255), rgb(35, 206, 255))
    text;
  text-shadow: rgb(0, 0, 0) 4px 3px 8px, rgb(79, 0, 0) 0px 0px 0px;
`;
