import { APP_ROUTES } from "@/app/routes";

export const checkRoute = (asPath: string) => {
  const appPublicRoutes = Object.values(APP_ROUTES.public)
  return appPublicRoutes.includes(asPath)
}