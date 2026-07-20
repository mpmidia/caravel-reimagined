import { useMemo } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "../components/site/Nav";
import { Footer } from "../components/site/Footer";
import { ShapeDivider } from "../components/site/ShapeDivider";
import { CTAContact } from "../components/site/CTAContact";
import { SHOWS } from "../lib/shows";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cia Alvo — Teatro que toca. Arte que constrói." },
      { name: "description", content: "Somos um grupo teatral que mistura emoção, reflexão e fé para redescobrir o sagrado com arte, humanidade e sensibilidade." },
      { property: "og:title", content: "Cia Alvo — Teatro que toca. Arte que constrói." },
      { property: "og:description", content: "Experiências teatrais que emocionam e ficam na memória." },
    ],
  }),
  component: Index,
});

const HERO_IMG =
  "https://ciaalvo.com.br/wp-content/uploads/2022/09/DIV-1-scaled.jpg";

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="container-x pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
          <div>
            <span className="inline-flex items-center rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-ink/70">
              Em destaque
            </span>
            <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl leading-[1.02]">
              Teatro que toca.{" "}
              <span className="italic text-primary">Arte que constrói.</span>{" "}
              Experiências que ficam.
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Somos um grupo teatral que mistura emoção, reflexão e fé para
              redescobrir o sagrado com arte, humanidade e sensibilidade.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/espetaculos"
                className="inline-flex items-center rounded-full bg-ink text-cream px-7 py-3.5 text-sm font-semibold hover:bg-primary transition-colors"
              >
                Nossos espetáculos
              </Link>
              <Link
                to="/aciaalvo"
                className="inline-flex items-center rounded-full border border-ink/20 px-7 py-3.5 text-sm font-semibold hover:border-ink transition-colors"
              >
                Conheça a Cia
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 bg-primary/10 rounded-[2rem] rotate-2" />
            <div className="absolute -inset-3 bg-accent/20 rounded-[2rem] -rotate-1" />
            <img
              src={HERO_IMG}
              alt="Cena da Cia Alvo"
              className="relative rounded-[2rem] shadow-2xl object-cover object-top aspect-[4/5] w-full"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Shows() {
  const shuffled = useMemo(() => {
    const arr = [...SHOWS];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }, []);
  return (
    <section id="espetaculos" className="py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Nossos espetáculos
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl max-w-2xl">
              Onde tradicional e contemporâneo se encontram.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-lg">
            Teatro, música, dança e audiovisual para criar experiências únicas,
            emocionantes e acessíveis para todas as idades.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shuffled.map((s) => (
            <Link
              key={s.slug}
              to="/espetaculos/$slug"
              params={{ slug: s.slug }}
              className="group relative overflow-hidden rounded-2xl bg-ink text-cream aspect-[4/5]"
            >
              <img
                src={s.gallery[0]}
                alt={s.title}
                className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-xs uppercase tracking-widest text-accent">
                  {s.subtitle}
                </span>
                <h3 className="mt-2 font-display text-2xl md:text-3xl">{s.title}</h3>
                <p className="mt-1 text-sm text-cream/80">{s.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <ShapeDivider />
      <main>
        <Hero />
        <Shows />
        <CTAContact />
      </main>
      <Footer />
    </div>
  );
}
