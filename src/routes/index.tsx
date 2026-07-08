import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "../components/site/Nav";
import { Footer } from "../components/site/Footer";
import { SHOWS } from "../lib/shows";

export const Route = createFileRoute("/")({
  component: Index,
});

const HERO_IMG =
  "https://ciaalvo.com.br/wp-content/uploads/2022/09/DIV-1-scaled.jpg";
const FABIANO_IMG =
  "https://ciaalvo.com.br/wp-content/uploads/2022/09/foto-fabiano.jpg";
const WHATSAPP =
  "https://api.whatsapp.com/send/?phone=5511983167188&text=Ol%C3%A1+%2ACia+Alvo%2A%21";

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="container-x pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
          <div>
            <span className="inline-flex items-center rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-ink/70">
              A Cia. Alvo
            </span>
            <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl leading-[1.02]">
              Teatro que toca.{" "}
              <span className="italic text-primary">Arte que constrói.</span>{" "}
              Experiências que ficam.
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Somos a Cia Alvo — um grupo teatral que mistura emoção, reflexão
              e fé para redescobrir o sagrado com arte, humanidade e
              sensibilidade.
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
              className="relative rounded-[2rem] shadow-2xl object-cover aspect-[4/5] w-full"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-secondary/40">
      <div className="container-x">
        <div className="max-w-4xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Manifesto
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl">
            A Bíblia reencontrada pela arte.
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-8 md:gap-12 text-lg leading-relaxed text-ink/85">
          <p>
            Somos a Cia Alvo, um grupo teatral que rompe barreiras e convida
            todo mundo a viver uma experiência que mistura emoção, reflexão e
            fé.
          </p>
          <p>
            Aqui a gente quebra rótulos, acolhe histórias e abre caminhos pra
            quem quer enxergar o mundo com outros olhos, e sentir com o coração
            aberto.
          </p>
          <p>
            A gente mergulha nas Escrituras para redescobrir o que é sagrado —
            com arte, humanidade e sensibilidade.
          </p>
        </div>
      </div>
    </section>
  );
}

function Shows() {
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
            emocionantes e acessíveis — para todas as idades.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SHOWS.map((s) => (
            <Link
              key={s.slug}
              to="/espetaculos/$slug"
              params={{ slug: s.slug }}
              className="group relative overflow-hidden rounded-2xl bg-ink text-cream aspect-[4/5]"
            >
              <img
                src={s.image}
                alt={s.title}
                className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-xs uppercase tracking-widest text-accent">
                  {s.year || "Espetáculo"}
                </span>
                <h3 className="mt-2 font-display text-2xl md:text-3xl">{s.title}</h3>
                <p className="mt-1 text-sm text-cream/80">{s.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>

        <blockquote className="mt-16 rounded-[2rem] bg-ink text-cream p-10 md:p-14 max-w-4xl mx-auto text-center">
          <span className="font-display text-8xl leading-none text-accent">“</span>
          <p className="font-display text-2xl md:text-3xl leading-snug -mt-4">
            Lemos a Bíblia como quem ouve um eco antigo, que ainda ressoa nas
            dores e nos sonhos do agora.
          </p>
        </blockquote>
      </div>
    </section>
  );
}

function Director() {
  return (
    <section id="direcao" className="py-24 md:py-32 bg-secondary/40">
      <div className="container-x">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-accent/25 rounded-[2rem] rotate-2" />
            <img
              src={FABIANO_IMG}
              alt="Fabiano Moreira, diretor da Cia Alvo"
              className="relative rounded-[2rem] object-cover aspect-[4/5] w-full shadow-xl"
            />
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Direção e visão
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl">
              Fabiano Moreira
            </h2>
            <p className="mt-6 font-display italic text-2xl md:text-3xl leading-snug text-ink/90">
              “Fazer arte com propósito não é uma escolha estética. É uma decisão
              de vida.”
            </p>
            <div className="mt-8 space-y-5 text-lg text-ink/80 leading-relaxed">
              <p>
                Com mais de 20 anos de história no teatro,{" "}
                <strong>Fabiano Moreira</strong> — diretor e idealizador da Cia
                Alvo — é a mente e o coração que impulsionam nosso caminho.
              </p>
              <p>
                Sua arte combina excelência técnica, fé viva e um olhar profundo
                sobre o poder transformador da cultura.
              </p>
              <p>
                Além da Cia Alvo, Fabiano é <strong>coordenador de projetos
                da ACRIART</strong> e <strong>palestrante na formação de jovens
                artistas</strong>, sempre incentivando carreiras guiadas por
                propósito, valores e visão empreendedora.
              </p>
            </div>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm hover:opacity-90 transition"
            >
              Fale com o Diretor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Shows />
        <Director />
      </main>
      <Footer />
    </div>
  );
}
