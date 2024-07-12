import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { getMovies } from "../API";

const useGetMoviesAPI = () => {
    const {
        data: movies,
        isFetching,
        error,
    } = useQuery({
        queryKey: ["Movies"],
        queryFn: getMovies
    });

    useEffect(() => {
        if (!error) return;
        console.log(error);
    }, [error]);

    return {
        Movies: movies ?? [],
        isFetching,
    };
};

export default useGetMoviesAPI;
