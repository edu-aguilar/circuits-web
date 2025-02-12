import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { AuthActions } from "../AuthActions";
import { ClientHeader } from "./ClientHeader";

export const Header = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const authActions = await AuthActions({ user });

  return <ClientHeader user={user} authActions={authActions} />;
};


