import { Eye } from "lucide-react";

const FILE_NAME = "CV_Juliana_Giraldo.pdf";

export function CvDownload() {
  const handlePreview = () => {
    window.open(`./${FILE_NAME}`, "_blank");
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
      <button
        type="button"
        onClick={handlePreview}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-colors hover:bg-primary/90"
      >
        <Eye className="h-4 w-4" />
        Ver CV
      </button>
    </div>
  );
}
