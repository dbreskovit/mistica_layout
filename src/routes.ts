import { createBrowserRouter } from "react-router";
import { createElement } from "react";
import { LoadingScreen } from "./Components/LoadingScreen";

export const router = createBrowserRouter([
  {
    path: '/',
    element: createElement(LoadingScreen, {redirectTo: '/home'}),
  },
]);