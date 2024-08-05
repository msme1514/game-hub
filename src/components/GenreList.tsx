import { HStack, List, Image, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenre";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { genres, error, isLoading } = useGenres();
  return (
    <>
      <List>
        {genres.map((genre) => (
          <ListItem key={genre.id} paddingY={1}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
      ;
    </>
  );
};

export default GenreList;
