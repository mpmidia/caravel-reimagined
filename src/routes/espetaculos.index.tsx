import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "../components/site/Nav";
import { Footer } from "../components/site/Footer";
import { SHOWS } from "../lib/shows";

export const Route = createFileRoute("/espetaculos/")({
  head: () => ({
    meta: [
      { title: "Espetáculos — Cia Alvo" },
      { name: "description", content: "Conheça os espetáculos da Cia Alvo: Gálatas, Éfeso, Guardado em Silêncio, Meu Pequeno Universo, O Passageiro e O Mundo de Gael." },
      { property: "og:title", content: "Espetáculos — Cia Alvo" },
      { property: "og:description", content: "Teatro, música, dança e audiovisual em experiências acessíveis para toda a família." },
    ],
  }),
  component: EspetaculosPage,
});

function EspetaculosPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <section className="container-x pt-16 pb-10 md:pt-24 md:pb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Nossos espetáculos
          </span>
          <h1 className="mt-4 text-5xl md:text-6xl lg:text-7xl leading-[1.02] max-w-4xl">
            A Bíblia reencontrada <span className="italic text-primary">pela arte.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Cada espetáculo é uma jornada — uma forma de tocar corações, provocar
            reflexões e reencontrar o sagrado em cena.
          </p>
        </section>

        <section className="container-x pb-24 md:pb-32">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {SHOWS.map((s, i) => (
              <Link
                key={s.slug}
                to="/espetaculos/$slug"
                params={{ slug: s.slug }}
                className={`group relative overflow-hidden rounded-[2rem] bg-ink text-cream ${
                  i % 3 === 0 ? "md:col-span-2" : ""
                }`}
              >
                <div className="aspect-[16/9] md:aspect-[21/10] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8 md:p-10">
                  <div className="flex items-center gap-3 text-xs uppercase tracking-widest opacity-80">
                    {s.year && <span>{s.year}</span>}
                    {s.year && <span className="h-px w-6 bg-cream/40" />}
                    <span>{s.subtitle}</span>
                  </div>
                  <h3 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl">
                    {s.title}
                  </h3>
                  <p className="mt-3 max-w-lg text-cream/80">{s.tagline}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent group-hover:gap-3 transition-all">
                    Conhecer espetáculo <span aria-hidden>→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}