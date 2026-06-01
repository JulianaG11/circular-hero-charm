import { Download } from "lucide-react";

const FILE_NAME = "CV_Juliana_Giraldo.pdf";

export function CvDownload() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = `./${FILE_NAME}`;
    link.download = FILE_NAME;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
      <button
        type="button"
        onClick={handleDownload}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-colors hover:bg-primary/90"
      >
        <Download className="h-4 w-4" />
        Descargar CV
      </button>
    </div>
  );
}
