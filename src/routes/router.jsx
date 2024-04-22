import { createBrowserRouter } from "react-router-dom";
import Round from "../pages/Round";
import Question from "../pages/Question";
import Welcome from "../pages/Welcome";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "round",
    element: <Round />,
  },
  {
    path: "question",
    element: <Question />,
  },
]);
