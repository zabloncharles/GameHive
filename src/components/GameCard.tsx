import {
  Card,
  CardBody,
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

const GameCard = ({ game }: Props) => {
  const { colorMode } = useColorMode();

  const isDarkMode = colorMode === "dark";
  return (
    <CustomCard boxShadow="none" isDarkMode={isDarkMode}>
      <CustomImage src={getCroppedImageUrl(game.background_image)} />
      <Top>
        <CardBody>
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
        </CardBody>
      </Top>
      <div className="linear"></div>
    </CustomCard>
  );
};

export default GameCard;

const CustomImage = styled(Image)``;
const Top = styled.div`
  z-index: 1;
`;
const CustomCard = styled(Card)`
  /* Custom CSS for the Card component */

  min-width: 166px;
  min-height: 416px;
  border-radius: 18px !important;
  font-family: "Spline Sans Mono", "Times New Roman", Times, serif;
  background-repeat: no-repeat;
  background-position: center;

  overflow: visible !important;

  gap: 5px;
  display: flex;
  border: ${(props) =>
    !props.isDarkMode ? "1px solid gainsboro !important" : ""};
  flex-direction: column;
  text-align: end;
  cursor: pointer;
  transition: linear 0.2s;
  --card-shadow: none !important;
  &:hover {
    transition: linear 0.2s;
    transform: scale(0.908);
  }
  .linear {
    display: ${(props) => (props.isDarkMode ? "block" : "none")};
    position: absolute;
    width: 100%;
    height: 40%;
    top: 107px;
    /* z-index: 2; */
    /* backdrop-filter: blur(13px); */
    background-image: linear-gradient(
      #ff000000,
      var(--chakra-colors-chakra-body-bg),
      var(--chakra-colors-chakra-body-bg)
    );
    border-radius: 18px;
    z-index: 0;
  }
  .title {
    font-size: 18px;
    font-family: "Spline Sans Mono", "Times New Roman", Times, serif;
    margin-top: 55px;
    color: var(--chakra-colors-chakra-body-text);
    text-transform: uppercase;
    text-align: start;
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
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: end;
  }
  .project-star-icon {
    height: 24px;
    width: 24px;

    background-image: url(https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Golden_star.svg/2140px-Golden_star.svg.png);
    background-size: cover;
    background-position: center center;
  }
`;
