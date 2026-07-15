import { Link } from "@tanstack/react-router";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { SHOWS, type Show } from "../../lib/shows";

const WHATSAPP =
  "https://api.whatsapp.com/send/?phone=5511983167188&text=Ol%C3%A1+%2ACia+Alvo%2A%21";

export function ShowView({ show }: { show: Show }) {
  const others = SHOWS.filter((s) => s.slug !== show.slug).slice(0, 3);
  const ctaLabel = show.cta ?? `Levar ${show.title} para o meu palco`;

  const meta = [
    { label: "Estreia", value: show.year || "—" },
    { label: "Duração", value: show.duration ?? "50–70 min" },
    { label: "Classificação", value: show.classification ?? "Livre" },
    { label: "Categoria", value: show.subtitle },
  ];

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
            <Link to="/espetaculos" className="text-sm text-cream/70 hover:text-accent transition-colors">
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
                    {ctaLabel}
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

        {/* DESTAQUES */}
        {show.highlights && show.highlights.length > 0 && (
          <section className="bg-cream/60 py-20 md:py-28 border-y border-ink/5">
            <div className="container-x">
              <div className="max-w-2xl">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Destaques</span>
                <h2 className="mt-3 font-display text-4xl md:text-5xl text-ink">Por que este espetáculo</h2>
              </div>
              <div className="mt-12 grid md:grid-cols-3 gap-6">
                {show.highlights.map((h, i) => (
                  <div key={i} className="rounded-2xl bg-background p-8 shadow-sm border border-ink/5">
                    <div className="font-display text-3xl text-primary/50">{String(i + 1).padStart(2, "0")}</div>
                    <h3 className="mt-4 font-display text-2xl text-ink">{h.title}</h3>
                    <p className="mt-3 text-ink/70 leading-relaxed">{h.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* SEÇÕES NARRATIVAS */}
        <section className="bg-secondary/40 py-20 md:py-28">
          <div className="container-x space-y-20 md:space-y-28">
            {show.sections.map((sec, i) => (
              <div key={i} className="grid md:grid-cols-[0.9fr_1.6fr] gap-8 md:gap-16">
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

        {/* FICHA + FORMATOS */}
        {(show.credits || show.formats || show.audience || show.genre) && (
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
              {show.formats && show.formats.length > 0 && (
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Formatos</span>
                  <h2 className="mt-3 font-display text-4xl text-ink">Como levar até você</h2>
                  <p className="mt-4 text-ink/70">
                    Adaptamos a montagem ao seu espaço, evento e público. Escolha o formato mais adequado
                    e conversamos sobre o rider técnico e logística.
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
                </div>
              )}
            </div>
          </section>
        )}

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

        {/* QUOTE */}
        <section className="bg-ink text-cream py-20 md:py-28">
          <div className="container-x max-w-4xl text-center">
            <span className="font-display text-8xl leading-none text-accent">“</span>
            <p className="font-display italic text-3xl md:text-4xl leading-snug -mt-6">
              {show.quote}
            </p>
          </div>
        </section>

        {/* FAQ */}
        {show.faq && show.faq.length > 0 && (
          <section className="py-20 md:py-28">
            <div className="container-x grid md:grid-cols-[0.6fr_1.4fr] gap-12">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Perguntas frequentes</span>
                <h2 className="mt-3 font-display text-4xl text-ink">Antes de agendar</h2>
                <p className="mt-4 text-ink/70">Reunimos as dúvidas mais comuns. Se algo mais surgir, fale com a gente pelo WhatsApp.</p>
              </div>
              <div className="space-y-4">
                {show.faq.map((item, i) => (
                  <details
                    key={i}
                    className="group rounded-2xl border border-ink/10 bg-cream/60 p-6 open:bg-cream"
                  >
                    <summary className="cursor-pointer list-none font-display text-lg md:text-xl text-ink flex justify-between items-start gap-4">
                      <span>{item.q}</span>
                      <span className="text-primary text-2xl leading-none group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-ink/70 leading-relaxed">{item.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA FINAL */}
        <section className="bg-gradient-to-br from-primary/90 to-ink text-cream py-24 md:py-32">
          <div className="container-x max-w-4xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Vamos conversar</span>
            <h2 className="mt-4 font-display text-4xl md:text-6xl leading-tight">
              Pronto para receber {show.title}?
            </h2>
            <p className="mt-6 text-lg text-cream/80 max-w-2xl mx-auto">
              Conte para nós sobre o seu espaço, público e data desejada. Respondemos com um orçamento e o rider técnico da montagem.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full bg-accent px-8 py-4 text-sm font-semibold text-ink hover:opacity-90 transition"
              >
                {ctaLabel}
              </a>
              <Link
                to="/espetaculos"
                className="inline-flex items-center rounded-full border border-cream/30 px-8 py-4 text-sm font-semibold text-cream hover:border-accent hover:text-accent transition"
              >
                Ver todos os espetáculos
              </Link>
            </div>
          </div>
        </section>

        {/* OUTROS */}
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