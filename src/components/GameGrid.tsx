import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import { GameCardSkeleton } from "./GameCardSkeleton";
import { Genres } from "../hooks/useGenres";

interface Props {
  selectedGenre: Genres | null;
  selectedPlatform: Platform | null;
  sortOrder: string;
  searchText: string;
}

const GameGrid = ({
  selectedPlatform,
  selectedGenre,
  sortOrder,
  searchText,
}: Props) => {
  const { data, error, isLoading } = useGames(
    selectedGenre,
    selectedPlatform,
    sortOrder,
    searchText
  );
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 4,
        }}
        spacing={6}
      >
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {data.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
