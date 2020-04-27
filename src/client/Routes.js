import UserListPage from "./pages/UserListPage";
import HomePage from "./pages/HomePage";
import App from "./App";
import NotPageFound from "./pages/NotPageFound";
import AdminsListPage from "./pages/AdminsListPage";
export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: "/",
        exact: true,
      },
      {
        ...UserListPage,
        path: "/users",
      },
      {
        ...AdminsListPage,
        path: "/admins",
      },
      {...NotPageFound}
    ],
  },
];
