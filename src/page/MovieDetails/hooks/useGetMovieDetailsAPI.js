import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { getMovieDetails } from "../API";

const useGetMovieDetailsAPI = (movieId) => {
    const {
        data: movie,
        isFetching,
        error,
        refetch
    } = useQuery({
        queryKey: ["MovieDetails"],
        queryFn: ()=>getMovieDetails(movieId)
    });

    

    useEffect(() => {
        if (!error) return;
        console.log(error);
    }, [error]);

    return {
        Movie: movie ?? [],
        isFetching,
        refetch
    };
};

export default useGetMovieDetailsAPI;
