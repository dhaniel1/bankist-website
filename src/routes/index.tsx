import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/errorPage";

const route = [
  {
    path: "/",
    element: <App />,

    errorElement: <ErrorPage />,
  },
];

const router = createBrowserRouter(route);

export default router;
