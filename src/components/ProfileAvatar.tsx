import { useRef, useState, useEffect, type ChangeEvent } from "react";
import { Camera, Upload } from "lucide-react";

const STORAGE_KEY = "hero-profile-photo";

export function ProfileAvatar() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setImage(saved);
    } catch {
      // ignore storage errors
    }
  }, []);

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setImage(result);
      try {
        localStorage.setItem(STORAGE_KEY, result);
      } catch {
        // ignore quota errors
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex flex-col items-center gap-5">
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="group relative h-44 w-44 rounded-full p-[3px] bg-gradient-to-br from-primary via-accent to-primary shadow-[var(--shadow-glow)] transition-transform duration-300 hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-ring/50 sm:h-52 sm:w-52"
        aria-label="Cargar foto de perfil"
      >
        <div className="relative h-full w-full overflow-hidden rounded-full bg-muted">
          {image ? (
            <img
              src={image}
              alt="Foto de perfil"
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-muted-foreground">
              <Camera className="h-9 w-9" />
              <span className="text-xs font-medium">Tu foto</span>
            </div>
          )}
          <div className="absolute inset-0 flex items-center justify-center bg-foreground/45 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
            <span className="flex flex-col items-center gap-1 text-background">
              <Upload className="h-7 w-7" />
              <span className="text-xs font-semibold">Cambiar</span>
            </span>
          </div>
        </div>
      </button>

      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-card-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
      >
        <Upload className="h-4 w-4" />
        {image ? "Cambiar foto" : "Subir foto"}
      </button>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleFile}
        className="sr-only"
      />
    </div>
  );
}
