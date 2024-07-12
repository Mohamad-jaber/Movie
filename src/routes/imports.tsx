import { lazy } from "react";

// --- PUBLIC ROUTES ---
// export const AccessDenied = lazy(() => import("@/pages/AccessDenied"));
// export const NotFound = lazy(() => import("@/pages/NotFound"));

// --- PRIVATE ROUTES ---
export const Login = lazy(() => import("../page/Login"));

export const Home = lazy(() => import("../page/Home"));
export const Profile = lazy(() => import("../page/Profile"));
export const MovieDetails = lazy(() => import("../page/MovieDetails"));
export const FavoriteMovies = lazy(() => import("../page/FavoriteMovies"));
export const History = lazy(() => import("../page/History"));
