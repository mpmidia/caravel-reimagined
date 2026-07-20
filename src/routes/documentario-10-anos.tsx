import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "../components/site/Nav";
import { Footer } from "../components/site/Footer";
import { ShapeDivider } from "../components/site/ShapeDivider";
import { CTAContact } from "../components/site/CTAContact";

export const Route = createFileRoute("/documentario-10-anos")({
  head: () => ({
    meta: [
      { title: "Documentário 10 Anos — Cia Alvo" },
      { name: "description", content: "Uma década de teatro, arte e fé. O documentário que celebra os 10 anos da Cia Alvo." },
      { property: "og:title", content: "Documentário 10 Anos — Cia Alvo" },
      { property: "og:description", content: "Uma década de teatro, arte e fé." },
    ],
  }),
  component: DocPage,
});

function DocPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <ShapeDivider />
      <main>
        <section className="container-x pt-16 pb-16 md:pt-24 md:pb-24">
          <div className="max-w-4xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Documentário
            </span>
            <h1 className="mt-4 font-display text-6xl md:text-7xl lg:text-8xl leading-[0.95]">
              10 anos <span className="italic text-primary">de Cia Alvo.</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground leading-relaxed">
              Este documentário reúne os bastidores e os momentos que fizeram
              da trajetória da Cia Alvo numa década de histórias, encontros e
              muita arte.
            </p>
          </div>
        </section>

        <section className="container-x pb-24 md:pb-32">
          <div className="relative rounded-[2rem] overflow-hidden bg-ink aspect-video">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-cream">
                <div className="w-20 h-20 mx-auto rounded-full bg-accent/90 flex items-center justify-center">
                  <span className="text-ink text-3xl">▶</span>
                </div>
                <p className="mt-6 font-display text-2xl">Em breve</p>
                <p className="mt-2 text-cream/70 text-sm max-w-sm mx-auto">
                  Fique de olho no nosso canal para o lançamento oficial do
                  documentário.
                </p>
                <a
                  href="https://www.youtube.com/@CiaAlvoOficial"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center rounded-full bg-cream text-ink px-6 py-3 text-sm font-semibold hover:bg-accent transition"
                >
                  Acompanhar no YouTube
                </a>
              </div>
            </div>
          </div>
        </section>

        <CTAContact />
      </main>
      <Footer />
    </div>
  );
}