import { Badge } from "@chakra-ui/react";
import styled from "styled-components";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "red";

  return (
    <CustomBadge
      colorScheme={color}
      fontSize="39px"
      paddingX={2}
      borderRadius="4px"
    >
      {score}%
    </CustomBadge>
  );
};

export default CriticScore;

const CustomBadge = styled(Badge)`
  backdrop-filter: blur(20px);
  background: none !important;
  font-family: "NCL Sebgorq";
`;
