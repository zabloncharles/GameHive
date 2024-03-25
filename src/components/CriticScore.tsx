import { Badge } from "@chakra-ui/react";
import styled from "styled-components";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "red";

  return (
    <CustomBadge colorScheme={color} fontSize="16px" borderRadius="0px">
      {score}%
    </CustomBadge>
  );
};

export default CriticScore;

const CustomBadge = styled(Badge)`
  background: none !important;
`;
