export const AppPage = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="p-6 md:p-10">{children}</div>;
};
