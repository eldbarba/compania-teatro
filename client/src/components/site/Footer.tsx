import { Instagram, Facebook, Youtube, Twitter, ArrowUp } from "lucide-react";

const footerLinks = {
  Nosotros: [
    { label: "Sobre Nosotros", href: "#sobre-nosotros" },
    { label: "Nuestra Misión", href: "#mision" },
    { label: "Equipo", href: "#equipo" },
    { label: "Administración", href: "#administracion" },
  ],
  Producción: [
    { label: "Obras", href: "#obras" },
    { label: "Proyecto del Año", href: "#proyecto" },
    { label: "Actores", href: "#actores" },
    { label: "Agenda", href: "#teatro" },
  ],
  Formación: [
    { label: "Sobre el Escenario", href: "#formacion" },
    { label: "Detrás de Escena", href: "#formacion" },
    { label: "Conducción y Ciudadanía", href: "#conduccion" },
    { label: "Inscripciones", href: "#contacto" },
  ],
  Contacto: [
    { label: "Formulario", href: "#contacto" },
    { label: "Alquiler de Sala", href: "#teatro" },
    { label: "Prensa", href: "#contacto" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export default function Footer() {
  return (
    <footer className="bg-theater-black text-white relative overflow-hidden">
      {/* Top accent line */}
      <div className="h-1 bg-gradient-to-r from-theater-red via-theater-orange to-theater-teal" />

      <div className="container py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 md:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/manus-storage/logo-teatro_a3fc7bbd.png"
                alt="Logo"
                className="h-12 w-12"
              />
              <div>
                <p className="font-display font-bold text-white text-lg uppercase tracking-wider leading-none">
                  Compañía
                </p>
                <p className="font-display text-theater-red text-sm uppercase tracking-[0.2em] mt-1">
                  Juvenil de Teatro
                </p>
              </div>
            </div>
            <p className="font-body text-white/50 text-sm leading-relaxed max-w-xs mb-6">
              Doce años formando artistas y ciudadanos a través del teatro.
              Producción teatral y formación actoral para jóvenes.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="h-10 w-10 border border-white/20 flex items-center justify-center rounded-sm text-white/60 hover:text-white hover:border-theater-red hover:bg-theater-red transition-all duration-200"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-medium text-sm uppercase tracking-wider text-white/80 mb-4">
                {title}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-body text-white/50 text-sm hover:text-theater-red transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-white/40 text-xs text-center md:text-left">
            © 2014 — 2026 Compañía Juvenil de Teatro. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="font-body text-white/40 text-xs hover:text-white/70 transition-colors">
              Términos
            </a>
            <a href="#" className="font-body text-white/40 text-xs hover:text-white/70 transition-colors">
              Privacidad
            </a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 font-body text-white/40 text-xs hover:text-theater-red transition-colors"
            >
              Volver arriba
              <ArrowUp className="h-3 w-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
