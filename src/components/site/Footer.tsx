import { Link } from "@tanstack/react-router";

const LOGO_IMG =
  "https://ciaalvo.com.br/wp-content/uploads/2023/07/ALVO_LOGO_TRANS_1024-1024x1024.png";
const WHATSAPP_SALES =
  "https://api.whatsapp.com/send/?phone=551139989494&text=Ol%C3%A1+%2ACia+Alvo%2A%21";
const CARAVANAS_URL = "https://caravana.ciaalvo.com.br";

export function Footer() {
  return (
    <footer id="contato" className="bg-ink text-cream relative overflow-hidden">
      {/* decorative top accent */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
      <div aria-hidden className="pointer-events-none absolute -top-32 -right-24 h-72 w-72 rounded-full bg-primary/25 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />

      <div className="relative container-x py-20">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-4">
              <img src={LOGO_IMG} alt="Cia Alvo" className="h-16 w-16 object-contain" />
              <div>
                <div className="font-display text-3xl leading-none">Cia Alvo</div>
                <div className="mt-1 text-xs uppercase tracking-[0.25em] text-accent/90">Companhia teatral</div>
              </div>
            </div>
            <p className="mt-6 text-cream/70 max-w-sm leading-relaxed">
              Somos um grupo teatral que mistura emoção, reflexão e fé para
              redescobrir o sagrado com arte, humanidade e sensibilidade.
            </p>
            <a
              href={WHATSAPP_SALES}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink hover:opacity-90 transition"
            >
              Falar no WhatsApp
              <span aria-hidden>→</span>
            </a>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Navegue</h3>
            <ul className="mt-6 space-y-3 text-cream/80">
              <li><Link to="/aciaalvo" className="hover:text-accent transition-colors">A Cia Alvo</Link></li>
              <li><Link to="/espetaculos" className="hover:text-accent transition-colors">Espetáculos</Link></li>
              <li><a href={CARAVANAS_URL} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">Caravanas</a></li>
              <li><Link to="/documentario-10-anos" className="hover:text-accent transition-colors">Documentário 10 Anos</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Contato</h3>
            <ul className="mt-6 space-y-3 text-cream/80">
              <li><a href="tel:+551139989494" className="hover:text-accent transition-colors">(11) 3998-9494</a></li>
              <li><a href="mailto:contato@ciaalvo.com.br" className="hover:text-accent transition-colors">contato@ciaalvo.com.br</a></li>
            </ul>
            <h3 className="mt-8 text-xs font-semibold uppercase tracking-[0.25em] text-accent">Redes</h3>
            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-cream/80">
              <li><a target="_blank" rel="noreferrer" href="https://www.instagram.com/ciaalvo/" className="hover:text-accent transition-colors">Instagram</a></li>
              <li><a target="_blank" rel="noreferrer" href="https://www.facebook.com/ciaalvo" className="hover:text-accent transition-colors">Facebook</a></li>
              <li><a target="_blank" rel="noreferrer" href="https://www.youtube.com/@CiaAlvoOficial" className="hover:text-accent transition-colors">YouTube</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cream/10 text-sm text-cream/50 flex flex-wrap items-center justify-between gap-4">
          <span>© {new Date().getFullYear()} Cia Alvo. Todos os direitos reservados.</span>
          <span>São Paulo, Brasil</span>
        </div>
      </div>
    </footer>
  );
}