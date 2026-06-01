import { createFileRoute } from "@tanstack/react-router";
import { ProfileAvatar } from "@/components/ProfileAvatar";
import { CvDownload } from "@/components/CvDownload";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Juliana Giraldo | Portafolio QA" },
      {
        name: "description",
        content:
          "Portafolio de Juliana Giraldo con experiencia en QA, proyectos de pruebas y herramientas como Jira, Postman, Figma, Python, Android Studio y Selenium.",
      },
      { property: "og:title", content: "Juliana Giraldo | Portafolio QA" },
      {
        property: "og:description",
        content:
          "Portafolio de Juliana Giraldo con proyectos de QA, reporte de bugs y herramientas clave para testing y aseguramiento de calidad.",
      },
    ],
  }),
  component: Index,
});

const skills = ["Jira", "Postman", "Python", "Selenium", "SQL", "Figma", "Android Studio"];

const projects = [
  {
    title: "Diseño de casos de prueba",
    description:
      "Planificación y documentación de escenarios funcionales, validación de flujos críticos y cobertura de pruebas enfocada en calidad y trazabilidad.",
  },
  {
    title: "Reporte de Bugas",
    description:
      "Registro claro de incidencias, reproducción de errores, evidencia visual y seguimiento estructurado para facilitar la corrección por parte del equipo.",
  },
];

function Index() {
  return (
    <main className="relative overflow-hidden bg-background">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, color-mix(in oklab, var(--primary) 14%, transparent), transparent 70%)",
        }}
        aria-hidden
      />
      <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl items-center px-6 py-16 sm:px-8">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_auto] lg:gap-16">
          <div className="order-2 text-center lg:order-1 lg:text-left">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-muted-foreground">
              Portafolio QA
            </p>
            <p className="mt-4 text-pretty text-lg font-semibold italic text-primary sm:text-xl">
              "Asegurando la excelencia, un detalle a la vez."
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Juliana Giraldo
            </h1>
            <p className="mt-3 text-base font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Junior QA Tester
            </p>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground lg:max-w-xl">
              Me especializo en identificar riesgos, estructurar pruebas y documentar
              hallazgos de forma precisa. Cuento con una sólida trayectoria de 5 años en el
              sector inmobiliario que transformé con éxito hacia el aseguramiento de la
              calidad de software.
            </p>
            <div className="mt-8">
              <CvDownload />
              <div className="mt-3 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <a
                  href="#proyectos"
                  className="inline-flex items-center justify-center rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-card-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  Ver proyectos
                </a>
                <a
                  href="#sobre-mi"
                  className="inline-flex items-center justify-center rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-card-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  Sobre mí
                </a>
              </div>
            </div>
          </div>

          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <ProfileAvatar />
          </div>
        </div>
      </section>

      <section id="sobre-mi" className="relative z-10 border-t border-border/70 bg-background/90">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-16 sm:px-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-muted-foreground">
              Sobre mí
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
              QA con foco en detalle, claridad y mejora continua
            </h2>
            <p className="mt-5 max-w-2xl text-pretty leading-7 text-muted-foreground">
              Me especializo en identificar riesgos, estructurar pruebas y documentar
              hallazgos de forma precisa. Cuento con una sólida trayectoria de 5 años en el
              sector inmobiliario que transformé con éxito hacia el aseguramiento de la
              calidad de software.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {skills.map((skill) => (
              <div
                key={skill}
                className="rounded-lg border border-border bg-card px-4 py-4 text-sm font-medium text-card-foreground shadow-sm"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="proyectos" className="relative z-10 border-t border-border/70">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-8">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-muted-foreground">
            Proyectos
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
            Experiencia destacada en pruebas y documentación de errores
          </h2>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-lg border border-border bg-card p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-card-foreground">{project.title}</h3>
                <p className="mt-3 leading-7 text-muted-foreground">{project.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
