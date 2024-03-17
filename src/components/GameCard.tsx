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
      <CustomImage src={getCroppedImageUrl(game.background_image)} />
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
        </div>
      </div>

      <div className="number">
        <CriticScore score={game.metacritic} />
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
  border-radius: 18px;
  /* padding: 20px; */
  min-height: 500px;
  position: relative;
  font-size: 17px;
  line-height: 1.2;
  z-index: 0;
  width: 100%;
  border: ${({ isDarkMode }) => (isDarkMode ? "#232323" : "rgb(219 219 219)")}
    1px solid;
  &:hover {
    transition: linear 0.2s;
    transform: scale(0.908);
  }
  .linear {
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: -1;
    backdrop-filter: blur(23px);
    background-image: linear-gradient(
      rgba(133, 105, 105, 0),
      rgba(133, 105, 105, 0),
      var(--chakra-colors-chakra-body-bg),
      var(--chakra-colors-chakra-body-bg)
    );
    border-radius: 17px;
    left: 0px;
    top: 0px;
  }
  .title {
    color: var(--chakra-colors-chakra-body-text);
    font-family: "Spline Sans Mono", sans-serif;
    font-size: 33px;
    line-height: 1.5;
    padding: 10px 20px;
    z-index: 0;
    position: relative;
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
    padding: 10px 20px;
    gap: 10px;
    display: flex;
    flex-direction: column;

    font-family: "Spline Sans Mono", sans-serif;
    font-size: 23px;
    line-height: 1.5;
    z-index: 0;
    position: relative;
    filter: hue-rotate(45deg);

    .sentiment {
      display: flex;
      gap: 10px;
    }
  }

  .number {
    position: absolute;
    bottom: 20px;
    right: 20px;
    z-index: 0;
  }
`;
