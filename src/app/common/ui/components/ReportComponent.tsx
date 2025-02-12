"use client";

interface ReportComponentProps {
  url: string;
  title?: string;
}

export const ReportComponent = ({
  url,
  title = "Reportar error",
}: ReportComponentProps) => {
  return (
    <div className="fixed left-4 bottom-4 z-10 sm:top-0 sm:right-0 sm:relative sm:left-auto">
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          window.open(url, "_blank");
        }}
      >
        {/* <span className="sm:hidden">!</span> */}
        <span>{title}</span>
      </button>
    </div>
  );
};
