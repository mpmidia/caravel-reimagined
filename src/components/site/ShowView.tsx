import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { ShapeDivider } from "./ShapeDivider";
import { SHOWS, type Show } from "../../lib/shows";

const WHATSAPP_SALES =
  "https://api.whatsapp.com/send/?phone=551139989494&text=Ol%C3%A1+%2ACia+Alvo%2A%21";

function Carousel({ images, title }: { images: string[]; title: string }) {
  const [i, setI] = useState(0);
  const total = images.length;
  if (total === 0) return null;
  const go = (d: number) => setI((p) => (p + d + total) % total);
  return (
    <div className="relative w-full">
      <div className="relative overflow-hidden rounded-[2rem] bg-ink aspect-[16/10] shadow-xl ring-1 ring-ink/10">
        {images.map((src, idx) => (
          <img
            key={src}
            src={src}
            alt={`${title} — foto ${idx + 1}`}
            loading={idx === 0 ? "eager" : "lazy"}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              idx === i ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink/60 to-transparent pointer-events-none" />
        {total > 1 && (
          <>
            <button
              type="button"
              aria-label="Foto anterior"
              onClick={() => go(-1)}
              className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 grid place-items-center h-11 w-11 rounded-full bg-cream/90 text-ink hover:bg-cream transition shadow"
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="Próxima foto"
              onClick={() => go(1)}
              className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 grid place-items-center h-11 w-11 rounded-full bg-cream/90 text-ink hover:bg-cream transition shadow"
            >
              ›
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  aria-label={`Ir para foto ${idx + 1}`}
                  onClick={() => setI(idx)}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === i ? "w-6 bg-accent" : "w-1.5 bg-cream/60 hover:bg-cream"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      {total > 1 && (
        <div className="mt-3 text-xs text-ink/50 text-center tabular-nums">
          {i + 1} / {total}
        </div>
      )}
    </div>
  );
}

export function ShowView({ show }: { show: Show }) {
  const others = SHOWS.filter((s) => s.slug !== show.slug).slice(0, 3);
  const cover = show.gallery[0];

  const meta = [
    { label: "Estreia", value: show.year || "—" },
    { label: "Duração", value: show.duration || "—" },
    { label: "Classificação", value: show.classification || "Livre" },
    { label: "Categoria", value: show.subtitle },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <ShapeDivider />
      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-ink text-cream">
          {cover && (
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `url(${cover})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "blur(64px) saturate(1.4)",
              }}
              aria-hidden
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/90 to-ink" aria-hidden />
          <div className="relative container-x pt-8 md:pt-10">
            <Link to="/espetaculos" className="text-sm text-cream/70 hover:text-accent transition-colors">
              ← Todos os espetáculos
            </Link>
          </div>
          <div className="relative container-x pt-10 pb-14 md:pt-16 md:pb-20 text-center max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-accent">
              <span className="h-px w-8 bg-accent" />
              {show.subtitle}
              <span className="h-px w-8 bg-accent" />
            </span>
            <h1 className="mt-6 font-display text-6xl md:text-7xl lg:text-[7.5rem] leading-[0.9] tracking-tight">
              {show.title}
            </h1>
            <p className="mt-8 text-xl md:text-2xl text-cream/85 leading-snug font-display italic">
              “{show.tagline}”
            </p>
          </div>
          {/* meta rail */}
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

        {/* CARROSSEL */}
        {show.gallery.length > 0 && (
          <section className="py-16 md:py-24">
            <div className="container-x max-w-5xl">
              <Carousel images={show.gallery} title={show.title} />
            </div>
          </section>
        )}

        {/* SINOPSE */}
        {show.synopsis.length > 0 && (
          <section className="pb-20 md:pb-28">
            <div className="container-x max-w-4xl">
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">
                Sinopse
              </span>
              <p className="mt-6 font-display text-3xl md:text-[2.5rem] leading-[1.15] text-ink">
                {show.synopsis[0]}
              </p>
              <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/75">
                {show.synopsis.slice(1).map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* MANIFESTO */}
        {show.manifesto.length > 0 && (
          <section className="bg-secondary/40 py-20 md:py-28">
            <div className="container-x max-w-4xl">
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">
                Manifesto
              </span>
              <h2 className="mt-4 font-display text-3xl md:text-4xl text-ink leading-tight italic">
                {show.manifesto[0]}
              </h2>
              <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/80">
                {show.manifesto.slice(1).map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* SOBRE + FORMATOS */}
        <section className="py-20 md:py-28 bg-ink text-cream">
          <div className="container-x grid lg:grid-cols-[1fr_1.1fr] gap-14 lg:gap-20">
            {show.about.length > 0 && (
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">Ficha técnica</span>
                <h2 className="mt-3 font-display text-4xl md:text-5xl leading-[1.05]">Sobre a montagem.</h2>
                <dl className="mt-10 divide-y divide-cream/10 border-y border-cream/10">
                  {show.about.map((c) => (
                    <div key={c.label} className="flex gap-6 py-4">
                      <dt className="w-40 shrink-0 text-cream/50 text-xs uppercase tracking-[0.2em] pt-0.5">{c.label}</dt>
                      <dd className="text-cream">{c.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}
            <div>
              {show.formats.length > 0 && (
                <>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">Formatos</span>
                  <h2 className="mt-3 font-display text-4xl md:text-5xl leading-[1.05]">Como levar até você.</h2>
                  <p className="mt-4 text-cream/70 max-w-md">{show.formatsIntro}</p>
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
              <div className="mt-10 flex flex-wrap gap-3">
                {show.driveUrl && (
                  <a
                    href={show.driveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 rounded-full bg-accent px-7 py-4 text-sm font-semibold text-ink hover:opacity-90 transition"
                  >
                    Material Técnico <span aria-hidden>→</span>
                  </a>
                )}
                <a
                  href={WHATSAPP_SALES}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 rounded-full border border-cream/30 px-7 py-4 text-sm font-semibold text-cream hover:bg-cream/10 transition"
                >
                  Falar no WhatsApp
                </a>
              </div>
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
                    src={s.gallery[0]}
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
  const cover = show.gallery[0];
  return {
    meta: [
      { title },
      { name: "description", content: show.tagline },
      { property: "og:title", content: title },
      { property: "og:description", content: show.tagline },
      ...(cover
        ? [
            { property: "og:image", content: cover },
            { name: "twitter:image", content: cover },
          ]
        : []),
    ],
  };
}