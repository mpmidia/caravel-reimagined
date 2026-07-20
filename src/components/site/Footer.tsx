import { Link } from "@tanstack/react-router";
import logoMono from "../../assets/alvo-logo-mono.png.asset.json";

const WHATSAPP_SALES =
  "https://api.whatsapp.com/send/?phone=551139989494&text=Ol%C3%A1+%2ACia+Alvo%2A%21";
const WHATSAPP_DIRECT =
  "https://api.whatsapp.com/send/?phone=5511983167188&text=Ol%C3%A1+%2ACia+Alvo%2A%21";

export function Footer() {
  return (
    <footer id="contato" className="bg-black text-white">
      <div className="container-x py-16 md:py-20">
        <div className="grid gap-12 md:gap-8 md:grid-cols-3 items-start">
          <div className="flex md:justify-start justify-center">
            <img src={logoMono.url} alt="Cia Alvo" className="h-24 md:h-28 w-auto object-contain" />
          </div>

          <div className="md:justify-self-center text-center md:text-left">
            <h3 className="text-2xl mb-6">menu</h3>
            <nav className="flex flex-col gap-4 text-base text-white/90">
              <Link to="/aciaalvo" className="hover:text-accent transition-colors">a cia alvo</Link>
              <Link to="/espetaculos" className="hover:text-accent transition-colors">espetáculos</Link>
              <Link to="/documentario-10-anos" className="hover:text-accent transition-colors">documentário 10 anos</Link>
            </nav>
          </div>

          <div>
            <h3 className="text-2xl mb-6">contato</h3>
            <ul className="flex flex-col gap-3 text-base text-white/90">
              <li>
                <a href={WHATSAPP_DIRECT} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 hover:text-accent transition-colors">
                  <IconCircle><WhatsAppGlyph /></IconCircle>
                  (11) 98316-7188
                </a>
              </li>
              <li>
                <a href="mailto:contato@ciaalvo.com.br" className="inline-flex items-center gap-3 hover:text-accent transition-colors">
                  <IconCircle><MailGlyph /></IconCircle>
                  contato@ciaalvo.com.br
                </a>
              </li>
            </ul>

            <p className="mt-8 text-lg">siga a cia alvo nas redes sociais</p>
            <div className="mt-4 flex items-center gap-3">
              <SocialLink href="https://www.facebook.com/ciaalvo" label="Facebook"><FacebookGlyph /></SocialLink>
              <SocialLink href="https://www.instagram.com/ciaalvo/" label="Instagram"><InstagramGlyph /></SocialLink>
              <SocialLink href="https://www.youtube.com/@CiaAlvoOficial" label="YouTube"><YouTubeGlyph /></SocialLink>
              <SocialLink href={WHATSAPP_SALES} label="WhatsApp"><WhatsAppGlyph /></SocialLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function IconCircle({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center justify-center h-8 w-8 rounded-full border border-white/70 text-white">
      {children}
    </span>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/70 text-white hover:bg-white hover:text-black transition-colors"
    >
      {children}
    </a>
  );
}

function WhatsAppGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M20.5 3.5A11 11 0 0 0 3.6 17.3L2 22l4.9-1.6A11 11 0 1 0 20.5 3.5Zm-8.4 17a9 9 0 0 1-4.6-1.3l-.3-.2-2.9.9.9-2.8-.2-.3a9 9 0 1 1 7.1 3.7Zm5.1-6.7c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.1-.7.1s-.8.9-1 1.1c-.2.2-.4.2-.7.1-.3-.1-1.2-.4-2.3-1.4a8.7 8.7 0 0 1-1.6-2c-.2-.3 0-.5.1-.6l.5-.6.2-.4c.1-.2 0-.3 0-.5l-.7-1.8c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.4s-.9.9-.9 2.2.9 2.6 1 2.8c.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3Z"/></svg>
  );
}
function MailGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
  );
}
function FacebookGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M13 22v-8h3l.5-4H13V7.5c0-1.1.3-1.9 2-1.9h2V2.1c-.4-.1-1.5-.2-2.8-.2C11.6 1.9 10 3.6 10 6.9V10H7v4h3v8h3Z"/></svg>
  );
}
function InstagramGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
  );
}
function YouTubeGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M23 7.2s-.2-1.6-.9-2.3c-.9-.9-1.8-.9-2.3-1C16.5 3.5 12 3.5 12 3.5s-4.5 0-7.8.4c-.5.1-1.5.1-2.3 1C1.2 5.6 1 7.2 1 7.2S.8 9 .8 10.9v1.7c0 1.9.2 3.7.2 3.7s.2 1.6.9 2.3c.9.9 2.1.9 2.6 1 1.9.2 8 .3 8 .3s4.5 0 7.8-.4c.5-.1 1.4-.1 2.3-1 .7-.7.9-2.3.9-2.3s.2-1.9.2-3.7v-1.7c0-1.9-.2-3.7-.2-3.7ZM10 15V8l6 3.5-6 3.5Z"/></svg>
  );
}