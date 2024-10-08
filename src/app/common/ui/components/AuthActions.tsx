import {
  getKindeServerSession,
  LoginLink,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/server";

export const AuthActions = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <>
      {!user && (
        <>
          <RegisterLink>Registro</RegisterLink>{" "}
          <LoginLink>Iniciar sesión</LoginLink>
        </>
      )}
      {!!user && (
        <>
          <span>Hola, {user.given_name}</span>
          <LogoutLink>Cerrar sesión</LogoutLink>
        </>
      )}
    </>
  );
};
