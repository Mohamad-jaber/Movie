import axios from "axios";

const headers = {
  Accept: "application/json",
  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDJlNGY4NWU4N2RjMDcxZDU0NmQyOTMwZmVmN2ExYSIsIm5iZiI6MTcyMDYxODUxOS42MjQzNiwic3ViIjoiNjJmOGVjOWQ2ZjUzZTEwMDdiMzg4MmM1Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.HNZkzlWxaLSkarm94aHHOe-G-4ZOCBYCMAHdRsaQsBA',
  "Content-Type": "application/json"
};

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  Accept: "application/json",
  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOWE0MmMxMTE3NzE0MGM3ZjE0NWUyM2U5OTM4MzBlNSIsIm5iZiI6MTcyMDYxOTM0Mi4wNDkyMzEsInN1YiI6IjY2OGU4ZTNjNjczNmY1OTU1OGQ1YWRkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mkReLKrAGKc-_EV3TYqILLgki9n6K57AP7qZ7WtROCA'
  ,
  "Content-Type": "application/json"
});

export default axiosInstance;
