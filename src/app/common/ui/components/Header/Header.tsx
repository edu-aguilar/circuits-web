import { AuthActions } from "../AuthActions";
import { ClientHeader } from "./ClientHeader";

export const Header = async () => {
  const authActions = await AuthActions();
  
  return <ClientHeader authActions={authActions} />;
};


