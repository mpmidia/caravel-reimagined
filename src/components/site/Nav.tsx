import { Link } from "@tanstack/react-router";
import logoAsset from "../../assets/alvo-logo-color.png.asset.json";

const WHATSAPP_SALES =
  "https://api.whatsapp.com/send/?phone=551139989494&text=Ol%C3%A1+%2ACia+Alvo%2A%21";
const CARAVANAS_URL = "https://caravana-refreshed.lovable.app";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-cream/80 border-b border-border/60">
      <div className="container-x flex items-center justify-between py-3">
        <Link to="/" className="flex items-center" aria-label="Cia Alvo">
          <img
            src={logoAsset.url}
            alt="Cia Alvo"
            className="h-12 md:h-14 w-auto object-contain"
          />
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link to="/aciaalvo" activeProps={{ className: "text-primary" }} className="hover:text-primary transition-colors">A Cia Alvo</Link>
          <Link to="/espetaculos" activeProps={{ className: "text-primary" }} className="hover:text-primary transition-colors">Espetáculos</Link>
          <a
            href={CARAVANAS_URL}
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition-colors"
          >
            Caravanas
          </a>
          <Link to="/documentario-10-anos" activeProps={{ className: "text-primary" }} className="hover:text-primary transition-colors">Documentário 10 Anos</Link>
        </nav>
        <a
          href={WHATSAPP_SALES}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:opacity-90 transition"
        >
          Fale com a gente
        </a>
      </div>
    </header>
  );
}