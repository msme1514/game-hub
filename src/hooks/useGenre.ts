import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Game } from "./useGames";

interface Genres {
    id: number
    name: string
    slug: string
    image_background: string
}

interface FetchGenresResponse {
    count: number;
    results: Genres[];
}


const useGenres = () => {
    const [genres, setGenres] = useState<Genres[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        const controller = new AbortController()

        setLoading(true)
        apiClient
            .get<FetchGenresResponse>("/genres", { signal: controller.signal })
            .then((res) => {
                setGenres(res.data.results)
                setLoading(false)
            })
            .catch((error) => {
                if (error instanceof CanceledError) return;
                setError(error.message)
                setLoading(false)
            });

        return () => controller.abort()
    }, []);

    return { genres, error, setGenres, setError, isLoading }
}

export default useGenres;