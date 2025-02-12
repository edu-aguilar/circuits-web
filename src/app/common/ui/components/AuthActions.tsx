import {
  LoginLink,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";

export const AuthActions = async ({ user }: {  user: KindeUser<Record<string, any>> | null }) => {

  return (
    <>
      {!!user && (
        <LogoutLink>Cerrar sesión</LogoutLink>
      )}
      {!user && (
        <>
          <RegisterLink>Registro</RegisterLink>{" "}
          <LoginLink>Iniciar sesión</LoginLink>
        </>
      )}
    </>
  );
};
