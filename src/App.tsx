// import { categories } from "./expense-tracker/categories";
import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

interface User {
  id: number;
  name: string;
}

const App = () => {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside">Aside</GridItem>
        </Show>
        <GridItem area="main">
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
