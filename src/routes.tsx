import { createBrowserRouter } from "react-router";
import { LoadingScreen } from "./Components/LoadingScreen";
import { RoutesUrls } from "./utils/enums/routes-url";
import { CancelSubscriptionView } from "./Pages/cancel-subscription/views/cancel-subscription.view";
import { AboutSubscriptionView } from "./Pages/about-subscription/views/about-subscription.view";

export const router = createBrowserRouter([
  {
    path: RoutesUrls.BASE_URL,
    element: <LoadingScreen redirectTo={RoutesUrls.CANCEL_SUBSCRIPTION} />,
  },
  {
    path: RoutesUrls.CANCEL_SUBSCRIPTION,
    element: <CancelSubscriptionView />,
  },
    {
    path: RoutesUrls.ABOUT_SUBSCRIPTION,
    element: <AboutSubscriptionView />,
  },
]);