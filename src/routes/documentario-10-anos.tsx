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
          <div className="relative rounded-[2rem] overflow-hidden bg-ink aspect-video shadow-2xl">
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/nbDEGq5msHM"
              title="Documentário 10 Anos — Cia Alvo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div className="mt-6 text-center">
            <a
              href="https://youtu.be/nbDEGq5msHM"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:opacity-80 transition"
            >
              Assistir no YouTube <span aria-hidden>→</span>
            </a>
          </div>
        </section>

        <CTAContact />
      </main>
      <Footer />
    </div>
  );
}