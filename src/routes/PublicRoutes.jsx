import {
  Login,
  // NotFound,
} from "./imports";

const publicRoutes = {
  path: "",
  children: [
    {
      index: true,
      path: "",
      element: (
          <Login />
      ),
    },
    // {
    //   path: "*",
    //   element: <NotFound />,
    // },
  ],
};

export default publicRoutes;
