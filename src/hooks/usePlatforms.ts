import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "../services/api-client";
import APIClient from "../services/api-client";
import { Platform } from "../entities/Platform";

const apiClient = new APIClient<Platform>('/platforms/lists/parents');

const usePlatforms = () =>
    useQuery({
        queryKey: ['platforms'],
        queryFn: apiClient.getAll,
        staleTime: 24 * 60 * 60 * 1000 //24hrs
    });

// const usePlatforms = () => useData<Platform>('/platforms/lists/parents');
// const usePlatforms = () => {
//     // const fetchPlatform = () =>
//     //     apiClient
//     //         .get<FetchResponse<Platform>>('/platforms/lists/parents')
//     //         .then((res) => res.data.results)

//     return useQuery<Platform[], Error>({
//         queryKey: ['platforms'],
//         queryFn: apiClient.getAll,
//         staleTime: 24 * 60 * 60 * 1000 //24hrs
//     })
// }

export default usePlatforms