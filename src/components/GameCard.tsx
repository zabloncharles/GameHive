import {
  Card,
  CardBody,
  Box,
  Heading,
  HStack,
  Image,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React, { Component } from "react";
import { Game } from "../hooks/useGames";
import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import PlatformIconList from "./PlatformIconList";
// import styled from "@emotion/styled";
import styled from "styled-components";
interface Props {
  game: Game;
}
interface CustomCardProps {
  src: string;
  isDarkMode: boolean;
}
const GameCard = ({ game }: Props) => {
  const { colorMode } = useColorMode();

  const isDarkMode = colorMode === "dark";
  return (
    <CustomCard
      isDarkMode={isDarkMode}
      src={getCroppedImageUrl(game.background_image)}
    >
      {/* <CustomImage src={getCroppedImageUrl(game.background_image)} /> */}
      <div className="image"></div>
      <Top>
        {/* <CardBody>
          <HStack justifyContent="space-between" marginBottom={3}>
            <div className="title">{game.name}</div>
          </HStack>

          <HStack justifyContent="space-between" marginBottom={3}>
            <PlatformIconList
              platforms={game.parent_platforms?.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
          <Emoji rating={game.rating_top} />
        </CardBody> */}
      </Top>
      <div className="linear"></div>
      <div className="title">{game.name}</div>
      <div className="icon-and-desc">
        <PlatformIconList
          platforms={game.parent_platforms?.map((p) => p.platform)}
        />
        <div className="sentiment">
          <Emoji rating={game.rating_top} />
          {!game.metacritic && <div></div>}
          <div className="number">
            {!game.metacritic ? "No Score" : game.metacritic + "%"}
          </div>
        </div>
      </div>
    </CustomCard>
  );
};

export default GameCard;

const CustomImage = styled(Image)`
  z-index: 0;
  position: relative;
  border-radius: 17px;
  padding: 20px;
  box-shadow: 0px 0px 1px 0px aliceblue;
  transform: scale(0.95);
`;
const Top = styled.div`
  z-index: 0;
`;
const CustomCard = styled.div<CustomCardProps>`
  /* Custom CSS for the Card component */

  background: url(${(props) => props.src});
  background-position: center;
  border-radius: 12px;
  /* padding: 20px; */
  min-height: 300px;
  position: relative;
  font-size: 17px;
  line-height: 1.2;
  padding: 10px 7px;
  z-index: 0;
  width: calc(100% / 2 - 16px - 0.01px);
  overflow: hidden;
  border: ${({ isDarkMode }) => (isDarkMode ? "#232323" : "rgb(219 219 219)")}
    1px solid;
  &:hover {
    transition: linear 0.2s;
    transform: scale(0.989);
  }
  .image {
    background: url(${(props) => props.src});
    min-height: 300px;
    width: 100%;
    background-position: center;
    background-size: cover;
    padding: 20px;
    box-shadow: 3px 5px 11px 5px
      ${({ isDarkMode }) => (isDarkMode ? "#000000" : "#ffffff")};
    border-radius: 6px;
  }
  .linear {
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: -1;
    backdrop-filter: blur(23px);
    background: linear-gradient(
      0deg,
      ${({ isDarkMode }) => (isDarkMode ? "#000000" : "#ffffff")},
      transparent
    );
    left: 0px;
    top: 0px;
  }
  .title {
    color: var(--chakra-colors-chakra-body-text);

    font-family: "Roboto", "Arial", sans-serif;
    font-size: 1rem;
    line-height: 1.2rem;
    font-weight: 500;
    overflow: hidden;
    display: block;
    width: fit-content;
    margin-top: 10px;
    padding: 1px 5px;
    border-radius: 12px;
    backdrop-filter: blur(26px);
    border: 1px solid #decccc38;
  }
  .desc {
    font-size: 10px;
    color: white;
    padding-left: 10px;
    width: 100%;
    display: -webkit-box;
    -webkit-line-clamp: 16;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: "Spline Sans Mono", sans-serif;
  }
  .icon-and-desc {
    text-transform: uppercase;
    color: white;

    gap: 10px;
    display: flex;
    flex-direction: column;

    font-family: "Spline Sans Mono", sans-serif;
    font-size: 23px;
    line-height: 1.5;
    z-index: 0;
    position: relative;

    padding: 6px 5px;
    border-radius: 12px;
    backdrop-filter: brightness(
      ${({ isDarkMode }) => (isDarkMode ? "0.35" : "0.9")}
    );
    border: 1px solid rgba(222, 204, 204, 0.22);
    margin-top: 10px;

    .sentiment {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
    }
  }

  .number {
    font-size: 17px;
    color: gray;
  }
`;
