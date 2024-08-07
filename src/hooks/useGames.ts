import useData from "./useData";
import { Genres } from "./useGenres";

export interface Platform {
    id: number
    name: string
    slug: string
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[]
    metacritic: number
}

const useGames = (selectedGenre: Genres | null, selectedPlatform: Platform | null, sortOrder: string, searchText: string) =>
    useData<Game>('/games',
        {
            params: {
                genres: selectedGenre?.id,
                platforms: selectedPlatform?.id,
                ordering: sortOrder,
                search: searchText
            }
        },
        [selectedGenre?.id, selectedPlatform?.id, sortOrder, searchText]);

export default useGames;