import { Star, Users, Heart } from "lucide-react";

const beneficios = [
  {
    nivel: "Amigo",
    precio: "$/mes",
    descripcion: "Apoyo básico a nuestro proyecto",
    beneficios: [
      "Descuentos especiales en entradas",
      "Boletín trimestral",
      "Mención en redes sociales",
    ],
    color: "orange",
    icon: Heart,
  },
  {
    nivel: "Padrino",
    precio: "$/mes",
    descripcion: "Apoyo significativo",
    beneficios: [
      "Todo lo de Amigo",
      "Entrada a todas las funciones",
      "Acceso a ensayos abiertos",
      "Certificado de apoyo",
    ],
    color: "teal",
    icon: Star,
    featured: true,
  },
  {
    nivel: "Mecenas",
    precio: "Personalizado",
    descripcion: "Apoyo integral al proyecto",
    beneficios: [
      "Todo lo de Padrino",
      "Reuniones con el equipo de puesta en escena",
      "Espacio gratuito en programas de mano",
    ],
    color: "red",
    icon: Users,
  },
];

const accentMap: Record<string, string> = {
  red: "text-theater-red",
  teal: "text-theater-teal",
  orange: "text-theater-orange",
};

const accentBg: Record<string, string> = {
  red: "bg-theater-red",
  teal: "bg-theater-teal",
  orange: "bg-theater-orange",
};

export default function AmigosDeComun() {
  return (
    <section
      id="amigos"
      className="relative bg-theater-white py-24 md:py-32 overflow-hidden"
    >
      <div className="container">
        {/* Header */}
        <div className="mb-16 relative text-center">
          <span className="act-number text-theater-orange-strong left-1/2 -translate-x-1/2">XIV</span>
          <div className="relative pt-8">
            <p className="reveal font-display text-theater-orange-strong text-sm uppercase tracking-[0.3em] mb-4" data-stagger="0">
              Acto XIV
            </p>
            <h2 className="reveal font-display font-bold text-4xl md:text-5xl lg:text-6xl uppercase text-theater-black leading-tight mb-6" data-stagger="1" style={{color: '#f9ba71'}}>
              Amigos de la <span className="text-theater-orange-strong">Comunidad</span>
            </h2>
            <p className="reveal font-body text-gray-600 text-base md:text-lg max-w-2xl mx-auto" data-stagger="2">
              Programa de membresía para quienes quieren acompañar nuestro proyecto de
              manera continua. Cada nivel de apoyo suma a la transformación que generamos.
            </p>
          </div>
        </div>

        {/* Membership tiers */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {beneficios.map((tier, index) => {
            const Icon = tier.icon;
            return (
              <div
                key={tier.nivel}
                className={`reveal relative rounded-sm transition-all duration-300 ${
                  tier.featured
                    ? "md:scale-105 md:shadow-2xl md:shadow-black/20 border-2 border-theater-teal"
                    : "border border-gray-200"
                } ${tier.featured ? "bg-theater-black text-white" : "bg-white text-theater-black"}`}
                data-stagger={index}
              >
                {tier.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-theater-teal text-white px-4 py-1 font-display text-xs uppercase tracking-wider rounded-full">
                    Más popular
                  </div>
                )}

                <div className="p-8 md:p-10">
                  {/* Icon */}
                  <div
                    className={`h-12 w-12 ${accentBg[tier.color]} flex items-center justify-center rounded-sm mb-6`}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className={`font-display font-bold text-2xl uppercase mb-2 ${tier.featured ? "text-white" : "text-theater-black"}`} style={{ color: '#de8c8c' }}>
                    {tier.nivel}
                  </h3>
                  <p className={`font-body text-sm mb-6 ${tier.featured ? "text-white/70" : "text-gray-600"}`}>
                    {tier.descripcion}
                  </p>

                  {/* Price */}
                  <div className="mb-8 pb-8 border-b border-gray-200">
                    <p className={`font-display font-bold text-3xl ${accentMap[tier.color]}`}>
                      {tier.precio}
                    </p>
                  </div>

                  {/* Benefits */}
                  <ul className="space-y-3 mb-8">
                    {tier.beneficios.map((beneficio) => (
                      <li
                        key={beneficio}
                        className={`flex items-start gap-2 font-body text-sm ${
                          tier.featured ? "text-white/80" : "text-gray-600"
                        }`}
                      >
                        <span className={`${accentMap[tier.color]} mt-1 text-lg`}>✓</span>
                        {beneficio}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href="#contacto"
                    className={`block text-center py-3 font-display font-medium uppercase tracking-wider text-sm rounded-sm transition-all duration-200 ${
                      tier.featured
                        ? "bg-theater-teal text-white hover:bg-theater-teal/90"
                        : `bg-${tier.color} text-white hover:shadow-lg`
                    }`}
                    style={
                      !tier.featured
                        ? {
                            backgroundColor: tier.color === "red" ? "#E63946" : tier.color === "teal" ? "#0E7C86" : "#F4A261",
                          }
                        : undefined
                    }
                  >
                    Unirse ahora
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
