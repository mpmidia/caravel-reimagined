import { Link } from "@tanstack/react-router";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { ShapeDivider } from "./ShapeDivider";
import { SHOWS, type Show } from "../../lib/shows";

export function ShowView({ show }: { show: Show }) {
  const others = SHOWS.filter((s) => s.slug !== show.slug).slice(0, 3);

  const meta = [
    { label: "Estreia", value: show.year || "—" },
    { label: "Duração", value: show.duration ?? "—" },
    { label: "Classificação", value: show.classification ?? "Livre" },
    { label: "Categoria", value: show.subtitle },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <ShapeDivider />
      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-ink text-cream">
          <div
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage: `url(${show.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(48px) saturate(1.3)",
            }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/85 to-ink" aria-hidden />
          <div className="relative container-x pt-10 md:pt-14">
            <Link to="/espetaculos" className="text-sm text-cream/70 hover:text-accent transition-colors">
              ← Todos os espetáculos
            </Link>
          </div>
          <div className="relative container-x pt-10 pb-20 md:pt-14 md:pb-28">
            <div className="grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-20 items-center">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                  {show.subtitle}
                </span>
                <h1 className="mt-6 font-display text-6xl md:text-7xl lg:text-8xl leading-[0.9]">
                  {show.title}
                </h1>
                <p className="mt-8 text-xl md:text-2xl text-cream/90 max-w-xl leading-relaxed font-display italic">
                  {show.tagline}
                </p>
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
            {meta.map((m) => (
              <div key={m.label}>
                <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  {m.label}
                </div>
                <div className="mt-2 font-display text-xl text-ink">{m.value}</div>
              </div>
            ))}
          </div>
        </section>

        {/* SINOPSE */}
        <section className="py-20 md:py-28">
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

        {/* MANIFESTO — narrativa do espetáculo */}
        <section className="bg-secondary/40 py-20 md:py-28">
          <div className="container-x">
            <div className="max-w-3xl mb-14">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Manifesto
              </span>
              <h2 className="mt-3 font-display text-4xl md:text-5xl text-ink leading-tight">
                A obra por dentro.
              </h2>
            </div>
            <div className="space-y-16 md:space-y-20">
              {show.sections.map((sec, i) => (
                <div key={i} className="grid md:grid-cols-[0.9fr_1.6fr] gap-8 md:gap-16">
                  <div>
                    <span className="font-display text-6xl md:text-7xl text-primary/40">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-3 font-display text-3xl md:text-4xl leading-tight text-ink">
                      {sec.heading}
                    </h3>
                  </div>
                  <div className="space-y-5 text-lg leading-relaxed text-ink/80">
                    {sec.body.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FICHA + FORMATOS + MATERIAL TÉCNICO */}
        <section className="py-20 md:py-28">
          <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-16">
            {(show.credits || show.audience || show.genre) && (
              <div className="rounded-3xl bg-ink text-cream p-10 md:p-12">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Ficha técnica</span>
                <h2 className="mt-3 font-display text-4xl">Sobre a montagem</h2>
                <dl className="mt-10 space-y-5">
                  {show.genre && (
                    <div className="flex gap-6 border-b border-cream/10 pb-4">
                      <dt className="w-40 shrink-0 text-cream/60 text-sm uppercase tracking-widest">Gênero</dt>
                      <dd className="text-cream">{show.genre}</dd>
                    </div>
                  )}
                  {show.audience && (
                    <div className="flex gap-6 border-b border-cream/10 pb-4">
                      <dt className="w-40 shrink-0 text-cream/60 text-sm uppercase tracking-widest">Público</dt>
                      <dd className="text-cream">{show.audience}</dd>
                    </div>
                  )}
                  {show.credits?.map((c) => (
                    <div key={c.role} className="flex gap-6 border-b border-cream/10 pb-4 last:border-0">
                      <dt className="w-40 shrink-0 text-cream/60 text-sm uppercase tracking-widest">{c.role}</dt>
                      <dd className="text-cream">{c.name}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}
            <div>
              {show.formats && show.formats.length > 0 && (
                <>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Formatos</span>
                  <h2 className="mt-3 font-display text-4xl text-ink">Como levar até você</h2>
                  <p className="mt-4 text-ink/70">
                    Adaptamos a montagem ao seu espaço, evento e público.
                  </p>
                  <div className="mt-8 space-y-4">
                    {show.formats.map((f) => (
                      <div key={f.label} className="rounded-2xl border border-ink/10 bg-cream/70 p-6">
                        <div className="flex items-center gap-3">
                          <span className="h-2 w-2 rounded-full bg-accent" />
                          <h3 className="font-display text-xl text-ink">{f.label}</h3>
                        </div>
                        <p className="mt-2 text-ink/70 leading-relaxed">{f.description}</p>
                      </div>
                    ))}
                  </div>
                </>
              )}
              {show.driveUrl && (
                <a
                  href={show.driveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground hover:opacity-90 transition"
                >
                  <span aria-hidden>📁</span>
                  Material Técnico
                  <span aria-hidden>→</span>
                </a>
              )}
            </div>
          </div>
        </section>

        {/* OUTROS */}
        <section className="container-x py-20 md:py-28 border-t border-ink/10">
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

export function showMeta(slug: string) {
  const show = SHOWS.find((s) => s.slug === slug)!;
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
}