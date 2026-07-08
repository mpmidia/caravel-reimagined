import { Link } from "@tanstack/react-router";

const LOGO_IMG =
  "https://ciaalvo.com.br/wp-content/uploads/2023/07/ALVO_LOGO_TRANS_1024-1024x1024.png";
const WHATSAPP =
  "https://api.whatsapp.com/send/?phone=5511983167188&text=Ol%C3%A1+%2ACia+Alvo%2A%21";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-cream/70 border-b border-border/60">
      <div className="container-x flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3">
          <img src={LOGO_IMG} alt="Cia Alvo" className="h-10 w-10 object-contain" />
          <span className="font-display text-xl tracking-tight">Cia Alvo</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link to="/aciaalvo" activeProps={{ className: "text-primary" }} className="hover:text-primary transition-colors">A Cia Alvo</Link>
          <Link to="/espetaculos" activeProps={{ className: "text-primary" }} className="hover:text-primary transition-colors">Espetáculos</Link>
          <Link to="/documentario-10-anos" activeProps={{ className: "text-primary" }} className="hover:text-primary transition-colors">Documentário 10 Anos</Link>
        </nav>
        <a
          href={WHATSAPP}
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