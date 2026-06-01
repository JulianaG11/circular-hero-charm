import { useRef, useState, useEffect, type ChangeEvent } from "react";
import { Download, Upload, Check } from "lucide-react";

const STORAGE_KEY = "hero-cv-file";
const NAME_KEY = "hero-cv-name";
const FILE_NAME = "CV_Juliana_Giraldo.pdf";

export function CvDownload() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [cv, setCv] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>(FILE_NAME);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      const savedName = localStorage.getItem(NAME_KEY);
      if (saved) setCv(saved);
      if (savedName) setFileName(savedName);
    } catch {
      // ignore storage errors
    }
  }, []);

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || file.type !== "application/pdf") return;
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setCv(result);
      setFileName(file.name || FILE_NAME);
      try {
        localStorage.setItem(STORAGE_KEY, result);
        localStorage.setItem(NAME_KEY, file.name || FILE_NAME);
      } catch {
        // ignore quota errors
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = cv ?? `./${FILE_NAME}`;
    link.download = fileName || FILE_NAME;
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

      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-card-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
      >
        {cv ? <Check className="h-4 w-4 text-primary" /> : <Upload className="h-4 w-4" />}
        {cv ? "CV cargado" : "Subir CV"}
      </button>

      <input
        ref={inputRef}
        type="file"
        accept="application/pdf,.pdf"
        onChange={handleFile}
        className="sr-only"
      />
    </div>
  );
}
