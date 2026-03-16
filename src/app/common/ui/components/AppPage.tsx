export const AppPage = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="relative w-full px-6 py-10 md:px-10 md:py-14 max-w-6xl m-auto">{children}</div>;
};
