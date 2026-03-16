export const CircuitCardSkeleton = () => {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-black/10 bg-white">
      <div className="relative h-[200px] w-full overflow-hidden bg-black/5">
        <div className="h-full w-full animate-pulse bg-black/10"></div>
      </div>
      <div className="flex h-full flex-col gap-3 p-5">
        <div className="h-6 w-3/4 animate-pulse rounded bg-black/10"></div>
        <div className="h-4 w-full animate-pulse rounded bg-black/10"></div>
        <div className="h-4 w-5/6 animate-pulse rounded bg-black/10"></div>
        <div className="mt-auto h-3 w-24 animate-pulse rounded bg-black/10"></div>
      </div>
    </div>
  );
};
