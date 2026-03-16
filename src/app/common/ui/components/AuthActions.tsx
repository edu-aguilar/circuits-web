import { LoginLink, LogoutLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";

export const AuthActions = async ({ user }: { user: KindeUser<Record<string, unknown>> | null }) => {
  return (
    <>
      {!!user && <LogoutLink className="text-sm text-black/70 transition hover:text-black">Cerrar sesion</LogoutLink>}
      {!user && (
        <>
          <RegisterLink className="text-sm text-black/70 transition hover:text-black">Registro</RegisterLink>{" "}
          <LoginLink className="inline-flex items-center rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-black transition hover:border-black/20">
            Iniciar sesion
          </LoginLink>
        </>
      )}
    </>
  );
};
