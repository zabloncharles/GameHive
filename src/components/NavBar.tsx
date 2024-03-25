import { HStack, Box, Image, useColorMode } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import logowhite from "../assets/logo-white.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import styled from "styled-components";
import { useState } from "react";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  const { colorMode } = useColorMode();

  const isDarkMode = colorMode === "dark";

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <GameNav isDarkMode={isDarkMode}>
      <MobileNav>
        <IconMode>
          {isDarkMode && <CustomImageLogo src={logo} />}
          {!isDarkMode && <CustomImageLogo src={logowhite} />}
          <HamburgerMenuIcon isOpen={isOpen} onClick={toggleMenu}>
            <div className="topLine"></div>
            <div className="middleLine"></div>
            <div className="bottomLine"></div>
          </HamburgerMenuIcon>
        </IconMode>
        {isOpen && (
          <MenuResult isOpen={isOpen}>
            <ColorModeSwitch />
          </MenuResult>
        )}
        <SearchInput onSearch={onSearch} />
      </MobileNav>

      <WebNav>
        {isDarkMode && <CustomImageLogo src={logo} />}
        {!isDarkMode && <CustomImageLogo src={logowhite} />}
        <CustomSearchBox isDarkMode={isDarkMode}>
          <SearchInput onSearch={onSearch} />
          <ColorModeSwitch />
        </CustomSearchBox>
      </WebNav>
    </GameNav>
  );
};

export default NavBar;

const IconMode = styled.div`
  display: flex;
  padding-bottom: 20px;
  padding-top: 10px;
  align-items: center;
  border-bottom: 1px #00000030 solid;
  margin-bottom: 18px;
  justify-content: space-between;
`;
const MenuResult = styled.div<{ isOpen: boolean }>`
  padding: 13px 10px;
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-end;
  border-radius: 0px;
  border-bottom: 0.1px solid #564320;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transition: all 0.3s ease-in-out;
`;
const MobileNav = styled.div`
  width: 100%;
  @media screen and (min-width: 999px) {
    display: none !important;
  }
`;
const WebNav = styled(HStack)`
  @media screen and (max-width: 1000px) {
    display: none !important;
  }
`;
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
const GameNav = styled.div<{ isDarkMode: boolean }>`
  width: 100%;
  padding: 10px;
  padding-left: 35px;
  padding-right: 35px;
  padding-top: 20px;
  align-items: center;
  backdrop-filter: blur(34px);
  display: flex;
  justify-content: space-between;
  font-family: "Spline Sans Mono", "Times New Roman", Times, serif;
  background: linear-gradient(
    180deg,
    ${(props) => (props.isDarkMode ? "#000000" : "#ffffff")},
    ${(props) => (props.isDarkMode ? "#000000" : "#ffffff")},
    transparent
  );
  position: fixed;
  z-index: 5;
  @media screen and (max-width: 1000px) {
    padding: 15px 10px;

    gap: 20px;
    justify-content: space-between;
  }
`;

const HamburgerMenuIcon = styled(Box)<{ isOpen: boolean }>`
  width: 30px;
  height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  div {
    width: 100%;
    height: 2px;
    background-color: var(--chakra-colors-chakra-body-text);
    transition: all 0.3s ease-in-out;
  }

  .topLine {
    transform: ${({ isOpen }) =>
      isOpen ? "rotate(45deg) translate(5px, 6px)" : "none"};
  }

  .middleLine {
    opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
  }

  .bottomLine {
    transform: ${({ isOpen }) =>
      isOpen ? "rotate(-45deg) translate(5px, -6px)" : "none"};
  }
`;
