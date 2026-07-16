import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "../components/site/Nav";
import { Footer } from "../components/site/Footer";
import { ShapeDivider } from "../components/site/ShapeDivider";
import { CTAContact } from "../components/site/CTAContact";

const HERO_IMG =
  "https://ciaalvo.com.br/wp-content/uploads/2022/09/DIV-1-scaled.jpg";
const FABIANO_IMG =
  "https://ciaalvo.com.br/wp-content/uploads/2022/09/foto-fabiano.jpg";
const WHATSAPP_DIRETOR =
  "https://api.whatsapp.com/send/?phone=5511983167188&text=Ol%C3%A1+Fabiano%21";

export const Route = createFileRoute("/aciaalvo")({
  head: () => ({
    meta: [
      { title: "A Cia Alvo — Teatro que toca. Arte que constrói." },
      { name: "description", content: "Somos a Cia Alvo, um grupo teatral que acredita no poder da arte para emocionar, conectar pessoas e contar histórias que ficam na memória." },
      { property: "og:title", content: "A Cia Alvo — Teatro que toca. Arte que constrói." },
      { property: "og:description", content: "Conheça a Cia Alvo e a direção de Fabiano Moreira." },
      { property: "og:image", content: HERO_IMG },
    ],
  }),
  component: ACiaAlvoPage,
});

function ACiaAlvoPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <ShapeDivider />
      <main>
        <section className="relative overflow-hidden">
          <div className="container-x pt-16 pb-16 md:pt-24 md:pb-24">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
              <div>
                <span className="inline-flex items-center rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-ink/70">
                  A Cia. Alvo
                </span>
                <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl leading-[1.02]">
                  Arte que <span className="italic text-primary">emociona</span>,
                  conecta e permanece.
                </h1>
                <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                  Somos a Cia Alvo, um grupo teatral que acredita no poder da
                  arte para emocionar, conectar pessoas e contar histórias que
                  ficam na memória.
                </p>
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

        <section className="py-24 md:py-32 bg-secondary/40">
          <div className="container-x">
            <div className="max-w-3xl">
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                Manifesto
              </span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl leading-tight">
                Acreditamos que o teatro existe para aproximar pessoas.
              </h2>
            </div>
            <div className="mt-14 grid md:grid-cols-2 gap-8 md:gap-14 text-lg leading-relaxed text-ink/85">
              <div className="space-y-6">
                <p>
                  A Cia Alvo nasce do encontro entre arte, sensibilidade e
                  humanidade. Criamos espetáculos que emocionam, provocam
                  reflexões e convidam o público a enxergar a vida por novas
                  perspectivas.
                </p>
                <p>
                  Unimos teatro, música, dança e audiovisual para transformar
                  histórias em experiências vivas, capazes de despertar
                  sentimentos, memórias e diálogos que continuam muito além do
                  palco.
                </p>
              </div>
              <div className="space-y-6">
                <p>
                  Acreditamos em uma arte que acolhe, forma e transforma. Por
                  isso, nossos projetos unem criação artística, educação e
                  impacto social, ampliando o acesso à cultura e fortalecendo
                  encontros entre pessoas e comunidades.
                </p>
                <p>
                  Entre o clássico e o contemporâneo, construímos narrativas
                  sobre liberdade, pertencimento, esperança e transformação,
                  fazendo da arte um espaço de conexão e descoberta.
                </p>
                <p className="font-display italic text-2xl text-ink">
                  Porque, no fim, mais do que contar histórias, criamos
                  experiências que permanecem na memória e no coração.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-secondary/40">
          <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-4 bg-accent/25 rounded-[2rem] rotate-2" />
              <img src={FABIANO_IMG} alt="Fabiano Moreira" className="relative rounded-[2rem] object-cover aspect-[4/5] w-full shadow-xl" />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">Direção e visão</span>
              <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl">Fabiano Moreira</h2>
              <p className="mt-6 font-display italic text-2xl md:text-3xl leading-snug text-ink/90">
                “Fazer arte com propósito não é uma escolha estética. É uma decisão de vida.”
              </p>
              <div className="mt-8 space-y-5 text-lg text-ink/80 leading-relaxed">
                <p>
                  Há mais de 20 anos, Fabiano Moreira constrói sua trajetória
                  no teatro, transformando histórias em experiências que unem
                  arte, sensibilidade e significado.
                </p>
                <p>
                  Diretor e fundador da Cia Alvo, acredita no palco como um
                  espaço de encontro, reflexão e transformação, onde técnica,
                  criatividade e fé caminham juntas para tocar pessoas.
                </p>
                <p>
                  Também atua na coordenação de projetos da ACRIART,
                  contribuindo para a formação de novos artistas e incentivando
                  caminhos construídos com propósito, valores e paixão pela
                  arte.
                </p>
                <p>
                  Mais do que criar espetáculos, Fabiano busca criar
                  experiências que permanecem na memória e no coração.
                </p>
              </div>
              <a href={WHATSAPP_DIRETOR} target="_blank" rel="noreferrer" className="mt-10 inline-flex items-center rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm hover:opacity-90 transition">
                Fale com o Diretor
              </a>
            </div>
          </div>
        </section>

        <CTAContact />
      </main>
      <Footer />
    </div>
  );
}