import { Link } from "@tanstack/react-router";
import logoAsset from "../../assets/alvo-logo-color.png.asset.json";

const WHATSAPP_SALES =
  "https://api.whatsapp.com/send/?phone=551139989494&text=Ol%C3%A1+%2ACia+Alvo%2A%21";
const CARAVANAS_URL = "https://caravana-refreshed.lovable.app";

export function Footer() {
  return (
    <footer id="contato" className="bg-ink text-cream relative overflow-hidden">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
      <div className="relative container-x py-16">
        <div className="flex flex-col items-center text-center gap-8">
          <img src={logoAsset.url} alt="Cia Alvo" className="h-16 md:h-20 w-auto object-contain" />

          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-cream/80">
            <Link to="/aciaalvo" className="hover:text-accent transition-colors">A Cia Alvo</Link>
            <Link to="/espetaculos" className="hover:text-accent transition-colors">Espetáculos</Link>
            <a href={CARAVANAS_URL} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">Caravanas</a>
            <Link to="/documentario-10-anos" className="hover:text-accent transition-colors">Documentário</Link>
          </nav>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-cream/70">
            <a href="tel:+551139989494" className="hover:text-accent transition-colors">(11) 3998-9494</a>
            <span aria-hidden className="text-cream/30">•</span>
            <a href="mailto:contato@ciaalvo.com.br" className="hover:text-accent transition-colors">contato@ciaalvo.com.br</a>
          </div>

          <div className="flex items-center gap-5 text-cream/70 text-sm">
            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/ciaalvo/" className="hover:text-accent transition-colors">Instagram</a>
            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/ciaalvo" className="hover:text-accent transition-colors">Facebook</a>
            <a target="_blank" rel="noreferrer" href="https://www.youtube.com/@CiaAlvoOficial" className="hover:text-accent transition-colors">YouTube</a>
          </div>

          <div className="pt-6 mt-2 w-full border-t border-cream/10 text-xs text-cream/40">
            © {new Date().getFullYear()} Cia Alvo · São Paulo, Brasil
          </div>
        </div>
      </div>
    </footer>
  );
}