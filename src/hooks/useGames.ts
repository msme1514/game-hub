import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import useData, { FetchResponse } from "./useData";
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
    rating_top: number
}

interface GameQuery {
    selectedGenre: Genres | null,
    selectedPlatform: Platform | null,
    sortOrder: string,
    searchText: string
}

// const useGames = (selectedGenre: Genres | null, selectedPlatform: Platform | null, sortOrder: string, searchText: string) =>
//     useData<Game>('/games',
//         {
//             params: {
//                 genres: selectedGenre?.id,
//                 platforms: selectedPlatform?.id,
//                 ordering: sortOrder,
//                 search: searchText
//             }
//         },
//         [selectedGenre?.id, selectedPlatform?.id, sortOrder, searchText]);

const useGames = (query: GameQuery) => {
    const fetchGames = () =>
        apiClient
            .get<FetchResponse<Game>>('/games', {
                params: {
                    genres: query.selectedGenre?.id,
                    parent_platforms: query.selectedPlatform?.id,
                    ordering: query.sortOrder,
                    search: query.searchText
                }
            })
            .then((res) => res.data.results)

    return useQuery<Game[], Error>({
        queryKey: ['games', query],
        queryFn: fetchGames,
        staleTime: 60 * 1000 //60s
    })
}




export default useGames;