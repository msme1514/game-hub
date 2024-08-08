import useData, { FetchResponse } from "./useData";
import genres from "../data/genres";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import apiClient from "../services/api-client";

export interface Genres {
    id: number
    name: string
    slug: string
    image_background: string
}

const useGenres = () => {
    const fetchGenre = () =>
        apiClient
            .get<FetchResponse<Genres>>('/genres')
            .then((res) => res.data.results)

    return useQuery<Genres[], Error>({
        queryKey: ['genres'],
        queryFn: fetchGenre,
        staleTime: 24 * 60 * 60 * 1000 //24hrs
    })
}
// const useGenres = () => useData<Genres>('/genres');
// const useGenres = () => ({ data: genres, error: null, isLoading: false })

export default useGenres;