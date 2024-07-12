import axiosInstance from "../../../config/axios/axios.config";

export const getMovies = async () => {
    const res = await axiosInstance.get(`/trending/movie/day?api_key=ad2e4f85e87dc071d546d2930fef7a1a`);
    return res.data.results;
};