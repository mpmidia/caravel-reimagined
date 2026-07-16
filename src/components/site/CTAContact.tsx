const WHATSAPP_SALES =
  "https://api.whatsapp.com/send/?phone=551139989494&text=Ol%C3%A1+%2ACia+Alvo%2A%21";

/**
 * Reusable CTA box that appears on Home, A Cia Alvo and Espetáculos.
 * "Vamos criar juntos uma experiência inesquecível."
 */
export function CTAContact() {
  return (
    <section className="py-20 md:py-28 bg-secondary/40">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-ink text-cream p-10 md:p-16 grid md:grid-cols-[1.4fr_1fr] gap-10 items-center">
          <div aria-hidden className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
          <div aria-hidden className="pointer-events-none absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-accent/25 blur-3xl" />
          <div className="relative">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              Leve a Cia Alvo para o seu palco
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl leading-tight">
              Vamos criar juntos uma experiência inesquecível.
            </h2>
            <p className="mt-6 text-cream/80 text-lg max-w-xl">
              Igrejas, teatros, escolas, festivais e eventos culturais;
              adaptamos nossos espetáculos ao seu espaço e ao seu público.
            </p>
          </div>
          <div className="relative flex md:justify-end">
            <a
              href={WHATSAPP_SALES}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-ink hover:opacity-90 transition"
            >
              Falar no WhatsApp
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}