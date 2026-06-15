import { useState } from "react";
import { Eye } from "lucide-react";

const FILE_NAME = "CV_Juliana_Giraldo.pdf";

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
        <iframe
          src={`/${FILE_NAME}`}
          title="CV Juliana Giraldo"
          className="h-[75vh] w-full rounded-lg border border-border bg-background"
        />
      )}
    </div>
  );
}
