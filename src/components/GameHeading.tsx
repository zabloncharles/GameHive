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
      <CustomHeading>
        <div className="title">{heading}</div>
        <div className="description">
          🔍Discover More: Uncover hidden gems, read in-depth reviews, and stay
          up-to-date with the latest news and releases from the indie game
          scene.
        </div>
      </CustomHeading>
    </Heading>
  );
};

export default GameHeading;

const CustomHeading = styled.h1`
  font-family: "Spline Sans Mono", "Times New Roman", Times, serif;
  font-size: 54px;
  font-weight: bold;
  padding: 0px 10px 0px 10px;
  margin-top: 210px;
  /* background: linear-gradient(to right, rgb(0, 228, 255), rgb(35, 206, 255))
    text;
  text-shadow: rgb(0, 0, 0) 4px 3px 8px, rgb(79, 0, 0) 0px 0px 0px; */
  .title {
    font-family: cisnero;
    color: crimson;
    text-transform: lowercase;
    font-size: 24px;
    margin: 20px 0px 5px 0px;
    text-decoration-line: overline;
  }

  .description {
    margin-bottom: 10px;
    font-size: 12px;
    font-family: "Spline Sans Mono", -apple-system, BlinkMacSystemFont,
      "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
      "Helvetica Neue", sans-serif;
    text-align: justify;
    line-height: 1.5;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    position: relative;
  }
`;
