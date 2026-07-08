import { Link } from "@tanstack/react-router";

const LOGO_IMG =
  "https://ciaalvo.com.br/wp-content/uploads/2023/07/ALVO_LOGO_TRANS_1024-1024x1024.png";
const WHATSAPP =
  "https://api.whatsapp.com/send/?phone=5511983167188&text=Ol%C3%A1+%2ACia+Alvo%2A%21";

export function Footer() {
  return (
    <footer id="contato" className="bg-ink text-cream">
      <div className="container-x py-20">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <img src={LOGO_IMG} alt="Cia Alvo" className="h-14 w-14 object-contain" />
            <p className="mt-6 text-cream/70 max-w-sm leading-relaxed">
              Teatro que toca. Arte que constrói. Experiências que ficam.
            </p>
            <div className="mt-6 flex gap-3 text-sm">
              <Link to="/aciaalvo" className="text-cream/70 hover:text-accent">A Cia</Link>
              <span className="text-cream/30">·</span>
              <Link to="/espetaculos" className="text-cream/70 hover:text-accent">Espetáculos</Link>
              <span className="text-cream/30">·</span>
              <Link to="/documentario-10-anos" className="text-cream/70 hover:text-accent">Documentário</Link>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-accent">
              Contato
            </h3>
            <ul className="mt-5 space-y-3 text-cream/80">
              <li><a href="tel:+5511983167188" className="hover:text-accent">(11) 98316-7188</a></li>
              <li><a href="mailto:contato@ciaalvo.com.br" className="hover:text-accent">contato@ciaalvo.com.br</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-accent">
              Redes
            </h3>
            <ul className="mt-5 space-y-3 text-cream/80">
              <li><a target="_blank" rel="noreferrer" href="https://www.instagram.com/ciaalvo/" className="hover:text-accent">Instagram</a></li>
              <li><a target="_blank" rel="noreferrer" href="https://www.facebook.com/ciaalvo" className="hover:text-accent">Facebook</a></li>
              <li><a target="_blank" rel="noreferrer" href="https://www.youtube.com/@CiaAlvoOficial" className="hover:text-accent">YouTube</a></li>
              <li><a target="_blank" rel="noreferrer" href={WHATSAPP} className="hover:text-accent">WhatsApp</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-cream/10 text-sm text-cream/50 flex flex-wrap justify-between gap-4">
          <span>© {new Date().getFullYear()} Cia Alvo. Todos os direitos reservados.</span>
          <span>A Bíblia reencontrada pela arte.</span>
        </div>
      </div>
    </footer>
  );
}