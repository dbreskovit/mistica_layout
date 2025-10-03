export const RoutesUrls = {
    BASE_URL: "/",
    ABOUT_SUBSCRIPTION: "/about-subscription",
    CANCEL_SUBSCRIPTION: "/cancel-subscription",
} as const;

export type RoutesUrlsType = (typeof RoutesUrls)[keyof typeof RoutesUrls];