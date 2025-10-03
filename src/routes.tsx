import { createBrowserRouter } from "react-router";
import { LoadingScreen } from "./Components/LoadingScreen";
import { RoutesUrls } from "./utils/enums/routes-url";

export const router = createBrowserRouter([
  {
    path: RoutesUrls.BASE_URL,
    element: <LoadingScreen redirectTo={RoutesUrls.ABOUT_SUBSCRIPTION} />,
  },
]);