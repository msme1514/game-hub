import { Button, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import { GameCardSkeleton } from "./GameCardSkeleton";
import { Genres } from "../hooks/useGenres";
import React from "react";
import GameCardContainer from "./GameCardContainer";
import InfiniteScroll from "react-infinite-scroll-component";

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
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames({
    selectedGenre,
    selectedPlatform,
    sortOrder,
    searchText,
  });
  const skeletons = [1, 2, 3, 4, 5, 6];

  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <>
      {error && <Text>{error.message}</Text>}
      <InfiniteScroll
        dataLength={fetchedGamesCount}
        hasMore={!!hasNextPage}
        next={() => fetchNextPage()}
        loader={<Spinner />}
      >
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

          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((game) => (
                <GameCardContainer key={game.id}>
                  <GameCard game={game} />
                </GameCardContainer>
              ))}
            </React.Fragment>
          ))}

          {/* {data?.map((game) => (
          <GameCard key={game.id} game={game} />
        ))} */}
        </SimpleGrid>
      </InfiniteScroll>
    </>
  );
};

export default GameGrid;
