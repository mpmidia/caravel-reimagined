import { Link } from "@tanstack/react-router";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
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
      <main>
        {/* HERO — editorial split */}
        <section className="relative overflow-hidden bg-ink text-cream">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url(${show.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(64px) saturate(1.4)",
            }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/90 to-ink" aria-hidden />
          <div className="relative container-x pt-8 md:pt-10">
            <Link to="/espetaculos" className="text-sm text-cream/70 hover:text-accent transition-colors">
              ← Todos os espetáculos
            </Link>
          </div>
          <div className="relative container-x pt-12 pb-16 md:pt-16 md:pb-24">
            <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-end">
              <div>
                <span className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-accent">
                  <span className="h-px w-8 bg-accent" />
                  {show.subtitle}
                </span>
                <h1 className="mt-6 font-display text-6xl md:text-7xl lg:text-[7.5rem] leading-[0.88] tracking-tight">
                  {show.title}
                </h1>
                <p className="mt-8 text-xl md:text-2xl text-cream/85 max-w-xl leading-snug font-display italic">
                  “{show.tagline}”
                </p>
              </div>
              <div className="relative lg:pl-8">
                <div className="absolute -inset-3 bg-accent/20 rounded-[1.75rem] rotate-1" aria-hidden />
                <img
                  src={show.image}
                  alt={show.title}
                  className="relative rounded-[1.75rem] shadow-2xl object-cover aspect-[4/5] w-full ring-1 ring-cream/10"
                />
              </div>
            </div>
          </div>
          {/* meta rail inside hero, glass strip */}
          <div className="relative border-t border-cream/10 bg-ink/60 backdrop-blur">
            <div className="container-x grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
              {meta.map((m) => (
                <div key={m.label}>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-cream/50">
                    {m.label}
                  </div>
                  <div className="mt-1.5 font-display text-lg text-cream">{m.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SINOPSE — pull-quote editorial */}
        <section className="py-20 md:py-28">
          <div className="container-x max-w-5xl">
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">
              Sinopse
            </span>
            <p className="mt-6 font-display text-3xl md:text-[2.5rem] leading-[1.15] text-ink">
              {show.intro}
            </p>
            {show.quote && (
              <p className="mt-10 border-l-2 border-accent pl-5 italic text-lg text-ink/70 max-w-2xl">
                {show.quote}
              </p>
            )}
          </div>
        </section>

        {/* NARRATIVA — sections em cards alinhados */}
        <section className="bg-secondary/40 py-20 md:py-28">
          <div className="container-x">
            <div className="flex items-end justify-between mb-14 flex-wrap gap-6">
              <div className="max-w-2xl">
                <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">
                  A obra por dentro
                </span>
                <h2 className="mt-3 font-display text-4xl md:text-5xl text-ink leading-[1.05]">
                  Uma leitura em capítulos.
                </h2>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {show.sections.map((sec, i) => (
                <article
                  key={i}
                  className="group rounded-3xl bg-cream/80 border border-ink/5 p-8 md:p-10 flex flex-col"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-5xl text-primary/50 leading-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="h-px flex-1 bg-ink/10" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl md:text-3xl text-ink leading-snug">
                    {sec.heading}
                  </h3>
                  <div className="mt-5 space-y-4 text-[15px] md:text-base leading-relaxed text-ink/75">
                    {sec.body.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* HIGHLIGHTS */}
        {show.highlights && show.highlights.length > 0 && (
          <section className="py-20 md:py-28">
            <div className="container-x">
              <div className="max-w-2xl mb-12">
                <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">
                  Por que este espetáculo
                </span>
                <h2 className="mt-3 font-display text-4xl md:text-5xl text-ink leading-[1.05]">
                  Destaques da montagem.
                </h2>
              </div>
              <div className="grid md:grid-cols-3 gap-5">
                {show.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-ink/10 p-7 bg-background hover:border-primary/40 transition"
                  >
                    <div className="font-display text-3xl text-primary">{String(i + 1).padStart(2, "0")}</div>
                    <h3 className="mt-4 font-display text-xl text-ink">{h.title}</h3>
                    <p className="mt-2 text-ink/70 leading-relaxed text-[15px]">{h.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FICHA + FORMATOS — refined */}
        <section className="py-20 md:py-28 bg-ink text-cream">
          <div className="container-x grid lg:grid-cols-[1fr_1.1fr] gap-14 lg:gap-20">
            {(show.credits || show.audience || show.genre) && (
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">Ficha técnica</span>
                <h2 className="mt-3 font-display text-4xl md:text-5xl leading-[1.05]">Sobre a montagem.</h2>
                <dl className="mt-10 divide-y divide-cream/10 border-y border-cream/10">
                  {show.genre && (
                    <div className="flex gap-6 py-4">
                      <dt className="w-40 shrink-0 text-cream/50 text-xs uppercase tracking-[0.2em] pt-0.5">Gênero</dt>
                      <dd className="text-cream">{show.genre}</dd>
                    </div>
                  )}
                  {show.audience && (
                    <div className="flex gap-6 py-4">
                      <dt className="w-40 shrink-0 text-cream/50 text-xs uppercase tracking-[0.2em] pt-0.5">Público</dt>
                      <dd className="text-cream">{show.audience}</dd>
                    </div>
                  )}
                  {show.credits?.map((c) => (
                    <div key={c.role} className="flex gap-6 py-4">
                      <dt className="w-40 shrink-0 text-cream/50 text-xs uppercase tracking-[0.2em] pt-0.5">{c.role}</dt>
                      <dd className="text-cream">{c.name}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}
            <div>
              {show.formats && show.formats.length > 0 && (
                <>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">Formatos</span>
                  <h2 className="mt-3 font-display text-4xl md:text-5xl leading-[1.05]">Como levar até você.</h2>
                  <p className="mt-4 text-cream/70 max-w-md">
                    Adaptamos a montagem ao seu espaço, evento e público.
                  </p>
                  <div className="mt-8 grid sm:grid-cols-2 gap-4">
                    {show.formats.map((f) => (
                      <div key={f.label} className="rounded-2xl bg-cream/5 border border-cream/10 p-6">
                        <div className="flex items-center gap-3">
                          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                          <h3 className="font-display text-lg text-cream">{f.label}</h3>
                        </div>
                        <p className="mt-2 text-cream/70 leading-relaxed text-sm">{f.description}</p>
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
                  className="mt-10 inline-flex items-center gap-3 rounded-full bg-accent px-7 py-4 text-sm font-semibold text-ink hover:opacity-90 transition"
                >
                  Material Técnico
                  <span aria-hidden>→</span>
                </a>
              )}
            </div>
          </div>
        </section>

        {/* FAQ */}
        {show.faq && show.faq.length > 0 && (
          <section className="py-20 md:py-28">
            <div className="container-x max-w-4xl">
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">Perguntas frequentes</span>
              <h2 className="mt-3 font-display text-4xl md:text-5xl text-ink leading-[1.05]">Dúvidas rápidas.</h2>
              <div className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
                {show.faq.map((f, i) => (
                  <details key={i} className="group py-5">
                    <summary className="flex items-center justify-between cursor-pointer list-none font-display text-lg md:text-xl text-ink">
                      {f.q}
                      <span aria-hidden className="text-primary group-open:rotate-45 transition">+</span>
                    </summary>
                    <p className="mt-3 text-ink/75 leading-relaxed">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

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