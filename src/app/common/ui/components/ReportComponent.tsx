"use client";

interface ReportComponentProps {
  url: string;
  title?: string;
}

export const ReportComponent = ({ url, title = "Reportar error" }: ReportComponentProps) => {
  return (
    <div className="fixed left-4 bottom-4 z-10 sm:top-0 sm:right-0 sm:relative sm:left-auto">
      <button
        className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-xs text-black/80 shadow-[var(--shadow-soft)] transition hover:border-black/20"
        onClick={() => {
          window.open(url, "_blank");
        }}
      >
        <span>{title}</span>
      </button>
    </div>
  );
};
