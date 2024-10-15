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
    <div className="sm:absolute right-0 sm:mx-6 md:mx-10 flex justify-end mb-4">
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          window.open(url, "_blank");
        }}
      >
        <span className="sm:hidden">!</span>
        <span className="hidden sm:block">{title}</span>
      </button>
    </div>
  );
};
