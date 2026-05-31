import { createFileRoute } from "@tanstack/react-router";
import { ProfileAvatar } from "@/components/ProfileAvatar";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mi Presentación" },
      { name: "description", content: "Sección de presentación personal con foto de perfil." },
      { property: "og:title", content: "Mi Presentación" },
      { property: "og:description", content: "Sección de presentación personal con foto de perfil." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6 py-16">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, color-mix(in oklab, var(--primary) 14%, transparent), transparent 70%)",
        }}
        aria-hidden
      />
      <section className="relative z-10 flex max-w-2xl flex-col items-center text-center">
        <ProfileAvatar />
        <p className="mt-8 text-sm font-medium uppercase tracking-[0.25em] text-muted-foreground">
          Hola, soy
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
          Tu Nombre
        </h1>
        <p className="mt-5 max-w-xl text-balance text-lg leading-relaxed text-muted-foreground">
          Una breve descripción sobre ti. Cuenta a qué te dedicas, qué te apasiona
          y qué te hace único. Edita este texto para personalizar tu presentación.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#contacto"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
          >
            Contáctame
          </a>
          <a
            href="#sobre-mi"
            className="inline-flex items-center justify-center rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-card-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Saber más
          </a>
        </div>
      </section>
    </main>
  );
}
