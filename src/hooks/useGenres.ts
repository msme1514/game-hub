import useData from "./useData";
import genres from "../data/genres";

export interface Genres {
    id: number
    name: string
    slug: string
    image_background: string
}

// const useGenres = () => useData<Genres>('/genres');
const useGenres = () => ({ data: genres, error: null, isLoading: false })

export default useGenres;