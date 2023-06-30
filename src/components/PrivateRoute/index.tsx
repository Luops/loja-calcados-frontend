import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

import { APP_ROUTES } from "@/app/routes";
import { checkRoute } from "@/helpers/checkRouteHelper";

type PrivateRouteProps = {
  children: ReactNode
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { push } = useRouter()

  const isUserAuthenticated = false;

  useEffect(() => {
    if(!isUserAuthenticated){
      push(APP_ROUTES.public.login)
    }
  }, [isUserAuthenticated, push])

  return (
    <>
      {!isUserAuthenticated && null}
      {isUserAuthenticated && children}
    </>
  )
}