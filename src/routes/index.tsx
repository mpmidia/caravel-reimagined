import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

const HERO_IMG =
  "https://ciaalvo.com.br/wp-content/uploads/2022/09/DIV-1-scaled.jpg";
const SHOW_IMG =
  "https://ciaalvo.com.br/wp-content/uploads/2022/09/header-1024x678.jpg";
const FABIANO_IMG =
  "https://ciaalvo.com.br/wp-content/uploads/2022/09/foto-fabiano.jpg";
const LOGO_IMG =
  "https://ciaalvo.com.br/wp-content/uploads/2023/07/ALVO_LOGO_TRANS_1024-1024x1024.png";
const WHATSAPP =
  "https://api.whatsapp.com/send/?phone=5511983167188&text=Ol%C3%A1+%2ACia+Alvo%2A%21";

function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-cream/70 border-b border-border/60">
      <div className="container-x flex items-center justify-between py-4">
        <a href="#top" className="flex items-center gap-3">
          <img src={LOGO_IMG} alt="Cia Alvo" className="h-10 w-10 object-contain" />
          <span className="font-display text-xl tracking-tight">Cia Alvo</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#sobre" className="hover:text-primary transition-colors">A Cia</a>
          <a href="#espetaculos" className="hover:text-primary transition-colors">Espetáculos</a>
          <a href="#direcao" className="hover:text-primary transition-colors">Direção</a>
          <a href="#contato" className="hover:text-primary transition-colors">Contato</a>
        </nav>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:opacity-90 transition"
        >
          Fale com a gente
        </a>
      </div>
    </header>
  );
}

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
              <a
                href="#espetaculos"
                className="inline-flex items-center rounded-full bg-ink text-cream px-7 py-3.5 text-sm font-semibold hover:bg-primary transition-colors"
              >
                Nossos espetáculos
              </a>
              <a
                href="#sobre"
                className="inline-flex items-center rounded-full border border-ink/20 px-7 py-3.5 text-sm font-semibold hover:border-ink transition-colors"
              >
                Conheça a Cia
              </a>
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

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-stretch">
          <div className="relative rounded-[2rem] overflow-hidden group">
            <img
              src={SHOW_IMG}
              alt="Espetáculo Cia Alvo"
              className="w-full h-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-cream">
              <span className="text-xs font-semibold uppercase tracking-widest opacity-80">
                Em cartaz
              </span>
              <h3 className="mt-2 text-3xl md:text-4xl font-display">
                Meu Pequeno Universo
              </h3>
            </div>
          </div>

          <blockquote className="relative rounded-[2rem] bg-ink text-cream p-10 md:p-14 flex flex-col justify-between">
            <span className="font-display text-8xl leading-none text-accent">“</span>
            <p className="font-display text-2xl md:text-3xl leading-snug -mt-4">
              Lemos a Bíblia como quem ouve um eco antigo, que ainda ressoa nas
              dores e nos sonhos do agora.
            </p>
            <div className="mt-8 flex items-center gap-3 text-sm opacity-80">
              <span className="h-px w-8 bg-cream/40" />
              Cia Alvo
            </div>
          </blockquote>
        </div>
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

function Footer() {
  return (
    <footer id="contato" className="bg-ink text-cream">
      <div className="container-x py-20">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <img src={LOGO_IMG} alt="Cia Alvo" className="h-14 w-14 object-contain" />
            <p className="mt-6 text-cream/70 max-w-xs leading-relaxed">
              Teatro que toca. Arte que constrói. Experiências que ficam.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-accent">
              Contato
            </h3>
            <ul className="mt-5 space-y-3 text-cream/80">
              <li>
                <a href="tel:+5511983167188" className="hover:text-accent">(11) 98316-7188</a>
              </li>
              <li>
                <a href="mailto:contato@ciaalvo.com.br" className="hover:text-accent">
                  contato@ciaalvo.com.br
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-accent">
              Siga a Cia Alvo
            </h3>
            <ul className="mt-5 space-y-3 text-cream/80">
              <li><a target="_blank" rel="noreferrer" href="https://www.instagram.com/ciaalvo/" className="hover:text-accent">Instagram</a></li>
              <li><a target="_blank" rel="noreferrer" href="https://www.facebook.com/ciaalvo" className="hover:text-accent">Facebook</a></li>
              <li><a target="_blank" rel="noreferrer" href="https://www.youtube.com/@CiaAlvoOficial" className="hover:text-accent">YouTube</a></li>
              <li><a target="_blank" rel="noreferrer" href={WHATSAPP} className="hover:text-accent">WhatsApp</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-cream/10 text-sm text-cream/50 flex flex-wrap justify-between gap-4">
          <span>© {new Date().getFullYear()} Cia Alvo. Todos os direitos reservados.</span>
          <span>A Bíblia reencontrada pela arte.</span>
        </div>
      </div>
    </footer>
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
