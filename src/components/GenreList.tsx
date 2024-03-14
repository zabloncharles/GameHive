import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import styled from "styled-components";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />;
  const { colorMode } = useColorMode();

  const isDarkMode = colorMode === "dark";

  return (
    <>
      <Header fontSize="2xl" marginTop={9} marginBottom={3}>
        Category
      </Header>
      <AsideList isDarkMode={isDarkMode}>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <GameGenreButton isDarkMode={isDarkMode}>
              <HStack>
                <Image
                  boxSize="32px"
                  borderRadius={8}
                  objectFit="cover"
                  src={getCroppedImageUrl(genre.image_background)}
                />
                <Button
                  whiteSpace="normal"
                  textAlign="left"
                  fontWeight={
                    genre.id === selectedGenre?.id ? "bold" : "normal"
                  }
                  onClick={() => onSelectGenre(genre)}
                  fontSize="md"
                  variant="unstyled"
                >
                  {genre.id != selectedGenre?.id && (
                    <GameGenre isDarkMode={isDarkMode}>{genre.name}</GameGenre>
                  )}
                  {genre.id === selectedGenre?.id && (
                    <GameGenreSelected isDarkMode={isDarkMode}>
                      {genre.name}
                    </GameGenreSelected>
                  )}
                </Button>
              </HStack>
            </GameGenreButton>
          </ListItem>
        ))}
      </AsideList>
    </>
  );
};

export default GenreList;

const AsideList = styled(List)`
  border-right: ${(props) =>
    props.isDarkMode ? "solid 1px #e3cfcf14" : "solid 1px #24232312"};
  padding-right: 15px;
`;
const Header = styled.h1`
  margin-top: 50px;
  font-size: 25px;
  padding-bottom: 10px;
  font-family: "Spline Sans Mono", "Times New Roman", Times, serif;
`;

const GameGenre = styled.div`
  font-size: 15px;
  font-family: "Spline Sans Mono", "Times New Roman", Times, serif;
  text-align: start;
  color: ${(props) => (props.isDarkMode ? "white" : "black")};
`;
const GameGenreButton = styled.div`
  /* background-color: #252529; */
  border-bottom: ${(props) =>
    props.isDarkMode ? "1px solid #ffffff42" : "1px solid #5e595975"};
  padding: 5px 5px;
  border-radius: 11px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  & :hover {
    color: #916210;
    border-bottom: #000000;
  }
`;
const GameGenreSelected = styled.div`
  font-size: 15px;
  font-family: "Spline Sans Mono", "Times New Roman", Times, serif;
  color: #916210 !important;
  color: ${(props) => (props.isDarkMode ? "white" : "black")};
  text-align: start;
`;
