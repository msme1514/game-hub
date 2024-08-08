import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { Genres } from "./useGenres";
import APIClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";

const apiClient = new APIClient<Game>('/games');

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

// const useGames = (query: GameQuery) => {
//     const fetchGames = ({ pageParam = 1 }) =>
//         apiClient
//             .get<FetchResponse<Game>>('/games', {
//                 params: {
//                     genres: query.selectedGenre?.id,
//                     parent_platforms: query.selectedPlatform?.id,
//                     ordering: query.sortOrder,
//                     search: query.searchText,
//                     page: pageParam
//                 }
//             })
//             .then((res) => res.data.results)

//     return useInfiniteQuery<FetchResponse<Game>, Error>({
//         queryKey: ['games', query],
//         queryFn: fetchGames,
//         staleTime: 60 * 1000, //60s
//         getNextPageParam: (lastPage, allPages) => {
//             return lastPage.next ? allPages.length + 1 : undefined
//         }
//     })
// }

const useGames = (query: GameQuery) =>
    useInfiniteQuery<FetchResponse<Game>, Error>({
        queryKey: ['games', query],
        queryFn: ({ pageParam = 1 }) =>
            apiClient.getAll({
                params: {
                    genres: query.selectedGenre?.id,
                    parent_platforms: query.selectedPlatform?.id,
                    ordering: query.sortOrder,
                    search: query.searchText,
                    page: pageParam
                },
            }),
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.next ? allPages.length + 1 : undefined;
        },
        staleTime: 24 * 60 * 60 * 1000 //24hrs
    });

export default useGames;