import { HStack, Image, useColorMode } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import logowhite from "../assets/logo-white.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import styled from "styled-components";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  const { colorMode } = useColorMode();

  const isDarkMode = colorMode === "dark";
  return (
    <GameNav>
      {isDarkMode && <CustomImageLogo src={logo} />}
      {!isDarkMode && <CustomImageLogo src={logowhite} />}
      <CustomSearchBox isDarkMode={isDarkMode}>
        <SearchInput onSearch={onSearch} />
        <ColorModeSwitch />
      </CustomSearchBox>
    </GameNav>
  );
};

export default NavBar;
const CustomImageLogo = styled(Image)`
  width: none !important;
  height: 60px;
  filter: invert(1);
`;

const CustomSearchBox = styled(HStack)<{ isDarkMode: boolean }>`
  background-color: ${(props) =>
    props.isDarkMode ? "#16161875" : "#ececec75"};
  border-radius: 59px;
  padding: 8px 10px;
`;
const GameNav = styled.div`
  padding: 10px;
  padding-left: 35px;
  padding-right: 35px;
  padding-top: 20px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  font-family: "Spline Sans Mono", "Times New Roman", Times, serif;
`;
