import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import useGameQueryStore from "../store";
import { Game } from "../entities/Game";

const apiClient = new APIClient<Game>('/games');

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

const useGames = () => {
    const gameQuery = useGameQueryStore(s => s.gameQuery)
    return useInfiniteQuery<FetchResponse<Game>, Error>({
        queryKey: ['games', gameQuery],
        queryFn: ({ pageParam = 1 }) =>
            apiClient.getAll({
                params: {
                    genres: gameQuery.genreId,
                    parent_platforms: gameQuery.platformId,
                    ordering: gameQuery.sortOrder,
                    search: gameQuery.searchText,
                    page: pageParam
                },
            }),
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.next ? allPages.length + 1 : undefined;
        },
        staleTime: 24 * 60 * 60 * 1000 //24hrs
    });
}

export default useGames;