import { Heading } from "@chakra-ui/react";
import React from "react";
import { Genres } from "../hooks/useGenres";
import { Platform } from "../hooks/useGames";

interface Props {
  genre: Genres | null;
  platform: Platform | null;
}

const GameHeading = ({ genre, platform }: Props) => {
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" marginY={5} fontSize="4xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
