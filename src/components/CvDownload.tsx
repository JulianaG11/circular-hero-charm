import { useState } from "react";
import { Eye } from "lucide-react";

const CV_PAGES = [
  "/cv-preview/page-1.png",
  "/cv-preview/page-2.png",
  "/cv-preview/page-3.png",
];

export function CvDownload() {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <div className="flex w-full flex-col items-center gap-4 lg:items-start">
      <button
        type="button"
        onClick={() => setShowPreview((current) => !current)}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-colors hover:bg-primary/90"
      >
        <Eye className="h-4 w-4" />
        {showPreview ? "Ocultar CV" : "Ver CV"}
      </button>

      {showPreview && (
        <div className="max-h-[75vh] w-full overflow-y-auto rounded-lg border border-border bg-background p-3">
          <div className="mx-auto flex max-w-3xl flex-col gap-3">
            {CV_PAGES.map((page, index) => (
              <img
                key={page}
                src={page}
                alt={`CV Juliana Giraldo página ${index + 1}`}
                className="h-auto w-full rounded-md"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
