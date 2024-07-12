import axiosInstance from "../../../config/axios/axios.config";

export const getMovieDetails = async (movieId) => {
    const res = await axiosInstance.get(`/movie/${movieId}?api_key=ad2e4f85e87dc071d546d2930fef7a1a`);
    return res.data;
};