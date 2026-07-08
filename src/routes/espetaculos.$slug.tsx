import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Nav } from "../components/site/Nav";
import { Footer } from "../components/site/Footer";
import { getShow, SHOWS } from "../lib/shows";

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
  const { show } = Route.useLoaderData();
  const others = SHOWS.filter((s) => s.slug !== show.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <section className="relative overflow-hidden">
          <div className="container-x pt-12 md:pt-20">
            <Link
              to="/espetaculos"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              ← Todos os espetáculos
            </Link>
          </div>
          <div className="container-x pt-8 pb-12 md:pt-12 md:pb-20">
            <div className="grid lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-16 items-end">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                  {show.year ? `Estreia ${show.year}` : "Espetáculo"}
                </span>
                <h1 className="mt-4 font-display text-6xl md:text-7xl lg:text-8xl leading-[0.95]">
                  {show.title}
                </h1>
                <p className="mt-4 font-display italic text-2xl md:text-3xl text-ink/70">
                  {show.subtitle}
                </p>
                <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
                  {show.tagline}
                </p>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/10 rounded-[2rem] rotate-1" />
                <img
                  src={show.image}
                  alt={show.title}
                  className="relative rounded-[2rem] shadow-2xl object-cover aspect-[4/3] w-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-secondary/40 py-20 md:py-28">
          <div className="container-x max-w-4xl">
            <p className="text-xl md:text-2xl leading-relaxed text-ink/85 font-display">
              {show.intro}
            </p>
          </div>
        </section>

        <section className="container-x py-20 md:py-28 space-y-20 md:space-y-28">
          {show.sections.map((sec, i) => (
            <div
              key={i}
              className="grid md:grid-cols-[0.9fr_1.6fr] gap-8 md:gap-16"
            >
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-tight text-ink">
                {sec.heading}
              </h2>
              <div className="space-y-5 text-lg leading-relaxed text-ink/80">
                {sec.body.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
            </div>
          ))}
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