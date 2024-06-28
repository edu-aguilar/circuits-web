export const CircuitCardSkeleton = () => {
  return (
    <div className="w-[280px] bg-white border border-gray-200 rounded-lg shadow">
      <div className="w-full h-[200px] relative rounded-t-lg overflow-hidden flex justify-center items-center bg-gray-100 animate-pulse">
        <div className="w-full h-full bg-gray-300"></div>
      </div>
      <div className="p-5">
        <div className="mb-2 h-6 bg-gray-300 rounded w-3/4 animate-pulse"></div>
        <div className="h-4 bg-gray-300 rounded w-full animate-pulse mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6 animate-pulse"></div>
      </div>
    </div>
  );
};
