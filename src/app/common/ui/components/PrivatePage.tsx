import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { AppPage } from "./AppPage";
import { redirect } from "next/navigation";

export const PrivatePage = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { isAuthenticated } = getKindeServerSession();

  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }

  return <AppPage> {children} </AppPage>;
};
