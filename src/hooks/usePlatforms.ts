import { useQuery } from "@tanstack/react-query";
import useData, { FetchResponse } from "./useData";
import apiClient from "../services/api-client";

export interface Platform {
    id: number
    name: string
    slug: string
}

// const usePlatforms = () => useData<Platform>('/platforms/lists/parents');
const usePlatforms = () => {
    const fetchPlatform = () =>
        apiClient
            .get<FetchResponse<Platform>>('/platforms/lists/parents')
            .then((res) => res.data.results)

    return useQuery<Platform[], Error>({
        queryKey: ['platforms'],
        queryFn: fetchPlatform,
        staleTime: 24 * 60 * 60 * 1000 //24hrs
    })
}

export default usePlatforms