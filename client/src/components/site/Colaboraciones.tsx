import { Gift, Briefcase, Users, ArrowRight } from "lucide-react";

const colaboraciones = [
  {
    icon: Gift,
    title: "Donaciones",
    description:
      "Tu aporte ayuda a financiar producciones, becas para jóvenes y mejora de infraestructura.",
    items: ["Becas para jóvenes", "Equipamiento técnico", "Materiales de producción"],
    color: "red",
    cta: "Donar",
  },
  {
    icon: Briefcase,
    title: "Colaboraciones Empresariales",
    description:
      "Empresas y organizaciones que quieren ser parte de nuestro proyecto de transformación social.",
    items: ["Patrocinio de obras", "Espacios publicitarios", "Alianzas estratégicas"],
    color: "teal",
    cta: "Conversar",
  },
  {
    icon: Users,
    title: "Amigos de la Comunidad",
    description:
      "Programa de membresía para quienes quieren apoyar continuamente nuestro trabajo.",
    items: ["Acceso a funciones", "Eventos exclusivos", "Boletín trimestral"],
    color: "orange",
    cta: "Unirse",
  },
];

const accentMap: Record<string, { text: string; bg: string }> = {
  red: { text: "text-theater-red", bg: "bg-theater-red" },
  teal: { text: "text-theater-teal", bg: "bg-theater-teal" },
  orange: { text: "text-theater-orange", bg: "bg-theater-orange" },
};

export default function Colaboraciones() {
  return (
    <section
      id="colaboraciones"
      className="relative bg-theater-black text-white py-24 md:py-32 overflow-hidden spotlight-gradient"
    >
      <div className="container">
        {/* Header */}
        <div className="mb-16 relative">
          <span className="act-number text-theater-teal left-0">XIII</span>
          <div className="relative pt-8">
            <p className="reveal font-display text-theater-teal text-sm uppercase tracking-[0.3em] mb-4" data-stagger="0">
              Acto XIII
            </p>
            <div className="grid md:grid-cols-2 gap-8 items-end">
              <h2 className="reveal font-display font-bold text-4xl md:text-5xl lg:text-6xl uppercase leading-tight" data-stagger="1">
                Colaboraciones y <span className="text-theater-teal">Apoyo</span>
              </h2>
              <p className="reveal font-body text-white/60 text-base md:text-lg" data-stagger="2">
                En Mangas de Camisa es un proyecto de transformación social que crece
                gracias al apoyo de la comunidad. Hay muchas formas de ser parte.
              </p>
            </div>
          </div>
        </div>

        {/* Collaboration types */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {colaboraciones.map((collab, index) => {
            const Icon = collab.icon;
            const accent = accentMap[collab.color];
            return (
              <div
                key={collab.title}
                className="reveal group relative bg-theater-dark border border-white/10 p-8 md:p-10 rounded-sm hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
                data-stagger={index}
              >
                <div className={`h-14 w-14 ${accent.bg} flex items-center justify-center rounded-sm mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-display font-bold text-2xl uppercase mb-3">
                  {collab.title}
                </h3>
                <p className="font-body text-white/70 text-sm leading-relaxed mb-6">
                  {collab.description}
                </p>
                <ul className="space-y-2 mb-8">
                  {collab.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 font-body text-white/60 text-sm">
                      <span className={`h-1.5 w-1.5 ${accent.bg} rounded-full`} />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contacto"
                  className={`inline-flex items-center gap-2 ${accent.text} font-display text-sm uppercase tracking-wider hover:gap-3 transition-all duration-200`}
                >
                  {collab.cta}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Why support */}
        <div className="reveal grid md:grid-cols-2 gap-8 md:gap-12 bg-white/5 border border-white/10 p-8 md:p-12 rounded-sm" data-stagger="3">
          <div>
            <h3 className="font-display font-bold text-2xl uppercase mb-6">
              ¿Por qué apoyar a En Mangas de Camisa?
            </h3>
            <ul className="space-y-4">
              {[
                "Transformamos vidas a través del arte y la educación",
                "Formamos ciudadanos críticos y sensibles",
                "Promovemos el protagonismo juvenil",
                "Trabajamos en comunidad desde hace 12 años",
                "Tu aporte tiene impacto directo en jóvenes reales",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 font-body text-white/70 text-sm">
                  <span className="text-theater-orange mt-1">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display font-bold text-2xl uppercase mb-6">
              Impacto de tu apoyo
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-sm">
                <span className="font-display font-bold text-theater-red text-xl">$</span>
                <p className="font-body text-white/60 text-sm">Beca para un joven</p>
              </div>
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-sm">
                <span className="font-display font-bold text-theater-teal text-xl">$</span>
                <p className="font-body text-white/60 text-sm">Equipamiento técnico</p>
              </div>
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-sm">
                <span className="font-display font-bold text-theater-orange text-xl">$</span>
                <p className="font-body text-white/60 text-sm">Producción de una obra</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
