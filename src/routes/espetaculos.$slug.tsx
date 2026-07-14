import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Nav } from "../components/site/Nav";
import { Footer } from "../components/site/Footer";
import { getShow, SHOWS, type Show } from "../lib/shows";

const WHATSAPP =
  "https://api.whatsapp.com/send/?phone=5511983167188&text=Ol%C3%A1+%2ACia+Alvo%2A%21";

export const Route = createFileRoute("/espetaculos/$slug")({
  loader: ({ params }) => {
    const show = getShow(params.slug);
    if (!show) throw notFound();
    return { show };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Espetáculo não encontrado — Cia Alvo" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { show } = loaderData;
    const title = `${show.title} — ${show.subtitle} | Cia Alvo`;
    return {
      meta: [
        { title },
        { name: "description", content: show.tagline },
        { property: "og:title", content: title },
        { property: "og:description", content: show.tagline },
        { property: "og:image", content: show.image },
        { name: "twitter:image", content: show.image },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <div className="container-x py-32 text-center">
        <h1 className="font-display text-5xl">Espetáculo não encontrado</h1>
        <Link to="/espetaculos" className="mt-8 inline-flex text-primary underline">
          Ver todos os espetáculos
        </Link>
      </div>
      <Footer />
    </div>
  ),
  component: ShowPage,
});

function ShowPage() {
  const { show } = Route.useLoaderData() as { show: Show };
  const others = SHOWS.filter((s) => s.slug !== show.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-ink text-cream">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url(${show.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(40px) saturate(1.2)",
            }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/85 to-ink" aria-hidden />
          <div className="relative container-x pt-10 md:pt-16">
            <Link
              to="/espetaculos"
              className="text-sm text-cream/70 hover:text-accent transition-colors"
            >
              ← Todos os espetáculos
            </Link>
          </div>
          <div className="relative container-x pt-10 pb-20 md:pt-16 md:pb-32">
            <div className="grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-20 items-center">
              <div>
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  {show.year && <span>Estreia {show.year}</span>}
                  {show.year && <span className="h-px w-8 bg-accent/60" />}
                  <span>{show.subtitle}</span>
                </div>
                <h1 className="mt-6 font-display text-6xl md:text-7xl lg:text-8xl leading-[0.9]">
                  {show.title}
                </h1>
                <p className="mt-8 text-xl md:text-2xl text-cream/85 max-w-xl leading-relaxed font-display italic">
                  {show.tagline}
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-ink hover:opacity-90 transition"
                  >
                    Contratar espetáculo
                  </a>
                  <a
                    href="#sobre"
                    className="inline-flex items-center rounded-full border border-cream/25 px-7 py-3.5 text-sm font-semibold text-cream hover:border-accent hover:text-accent transition"
                  >
                    Sobre a peça
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-accent/25 rounded-[2rem] rotate-2" aria-hidden />
                <div className="absolute -inset-2 bg-primary/20 rounded-[2rem] -rotate-1" aria-hidden />
                <img
                  src={show.image}
                  alt={show.title}
                  className="relative rounded-[2rem] shadow-2xl object-cover aspect-[4/5] w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* META STRIP */}
        <section className="border-b border-ink/10 bg-cream">
          <div className="container-x grid grid-cols-2 md:grid-cols-4 gap-6 py-8">
            {[
              { label: "Ano de estreia", value: show.year || "—" },
              { label: "Categoria", value: show.subtitle },
              { label: "Duração", value: "50–70 min" },
              { label: "Classificação", value: "Livre" },
            ].map((m) => (
              <div key={m.label}>
                <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  {m.label}
                </div>
                <div className="mt-2 font-display text-xl text-ink">{m.value}</div>
              </div>
            ))}
          </div>
        </section>

        {/* INTRO */}
        <section id="sobre" className="py-20 md:py-28">
          <div className="container-x">
            <div className="grid md:grid-cols-[0.4fr_1.6fr] gap-8 md:gap-16 items-start max-w-6xl">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Sinopse
                </span>
                <div className="mt-4 h-px w-16 bg-primary" />
              </div>
              <p className="text-2xl md:text-3xl leading-relaxed text-ink/90 font-display">
                {show.intro}
              </p>
            </div>
          </div>
        </section>

        {/* SECTIONS with numbered index */}
        <section className="bg-secondary/40 py-20 md:py-28">
          <div className="container-x space-y-20 md:space-y-28">
            {show.sections.map((sec, i) => (
              <div
                key={i}
                className="grid md:grid-cols-[0.9fr_1.6fr] gap-8 md:gap-16"
              >
                <div>
                  <span className="font-display text-6xl md:text-7xl text-primary/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl leading-tight text-ink">
                    {sec.heading}
                  </h2>
                </div>
                <div className="space-y-5 text-lg leading-relaxed text-ink/80">
                  {sec.body.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* IMAGE BAND */}
        <section className="relative h-[50vh] md:h-[70vh] overflow-hidden">
          <img
            src={show.image}
            alt={show.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
          <div className="absolute inset-x-0 bottom-0 container-x pb-10">
            <p className="font-display italic text-cream text-2xl md:text-4xl max-w-3xl">
              {show.tagline}
            </p>
          </div>
        </section>

        <section className="bg-ink text-cream py-20 md:py-28">
          <div className="container-x max-w-4xl text-center">
            <span className="font-display text-8xl leading-none text-accent">“</span>
            <p className="font-display italic text-3xl md:text-4xl leading-snug -mt-6">
              {show.quote}
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="mt-12 inline-flex items-center rounded-full bg-accent px-8 py-4 text-sm font-semibold text-ink hover:opacity-90 transition"
            >
              Levar {show.title} para o meu palco
            </a>
          </div>
        </section>

        <section className="container-x py-20 md:py-28">
          <div className="flex items-end justify-between mb-10">
            <h2 className="font-display text-3xl md:text-4xl">Outros espetáculos</h2>
            <Link to="/espetaculos" className="text-sm font-semibold text-primary hover:underline">
              Ver todos →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {others.map((s) => (
              <Link
                key={s.slug}
                to="/espetaculos/$slug"
                params={{ slug: s.slug }}
                className="group block overflow-hidden rounded-2xl bg-ink text-cream"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl">{s.title}</h3>
                  <p className="mt-1 text-sm text-cream/70">{s.subtitle}</p>
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