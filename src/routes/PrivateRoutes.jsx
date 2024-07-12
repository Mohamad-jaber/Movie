import AuthRoute from "./AuthRoute";

import {
  Home,
  MovieDetails,
  Profile,
  FavoriteMovies,
  History
} from "./imports";

const privateRoutes = {
  element: <AuthRoute />,
  children: [
    {
      path: "movies",
      element: <Home />,
    },
    {
      path: "profile",
      element: <Profile />,
    },
    {
      path: "details",
      element: <MovieDetails />,
    },
    {
      path: "favorite",
      element: <FavoriteMovies />,
    },
    {
      path: "history",
      element: <History />,
    },
  ],
};

export default privateRoutes;
