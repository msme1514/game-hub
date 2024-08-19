import { Image, SimpleGrid, Spinner } from "@chakra-ui/react";
import React from "react";
import useScreenshots from "../hooks/useScreenshot";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId);

  if (isLoading) return null;
  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
      {data?.results.map((sc) => (
        <Image key={sc.id} src={sc.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
