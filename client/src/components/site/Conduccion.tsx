import { Heart, BookOpen, Users2, Shield } from "lucide-react";

const valores = [
  {
    icon: Heart,
    title: "Educación emocional",
    description:
      "El teatro como espacio para reconocer, nombrar y gestionar emociones propias y ajenas. Desarrollar empatía a través de la encarnación de otros.",
    color: "red",
  },
  {
    icon: BookOpen,
    title: "Pensamiento crítico",
    description:
      "Analizar textos, contextos y realidades. Cuestionar, debatir y construir argumentos. El teatro como laboratorio de ideas y reflexión.",
    color: "teal",
  },
  {
    icon: Users2,
    title: "Convivencia y diversidad",
    description:
      "Aprender a trabajar con quienes piensan distinto. Valorar la diferencia como riqueza. Construir comunidad desde el respeto y la escucha activa.",
    color: "orange",
  },
  {
    icon: Shield,
    title: "Ciudadanía activa",
    description:
      "Formar jóvenes que participen, que se involucren en su comunidad, que usen su voz para contribuir al bien común. El teatro como ejercicio de democracia.",
    color: "red",
  },
];

const accentMap: Record<string, { text: string; bg: string; border: string }> = {
  red: { text: "text-theater-red", bg: "bg-theater-red", border: "border-theater-red" },
  teal: { text: "text-theater-teal", bg: "bg-theater-teal", border: "border-theater-teal" },
  orange: { text: "text-theater-orange", bg: "bg-theater-orange", border: "border-theater-orange" },
};

export default function Conduccion() {
  return (
    <section
      id="conduccion"
      className="relative bg-theater-black text-white py-24 md:py-32 overflow-hidden spotlight-teal"
    >
      <div className="container">
        {/* Header */}
        <div className="mb-16 relative">
          <span className="act-number text-theater-teal left-0">VI</span>
          <div className="relative pt-8">
            <p className="reveal font-display text-theater-teal text-sm uppercase tracking-[0.3em] mb-4" data-stagger="0">
              Acto VI
            </p>
            <div className="grid md:grid-cols-2 gap-8 items-end">
              <h2 className="reveal font-display font-bold text-4xl md:text-5xl lg:text-6xl uppercase leading-tight" data-stagger="1">
                Conducción y <br />
                <span className="text-theater-teal">Ciudadanía</span>
              </h2>
              <p className="reveal font-body text-white/60 text-base md:text-lg" data-stagger="2">
                Nuestro programa educativo va más allá de la formación artística.
                Acompañamos a los jóvenes en su desarrollo como personas y como
                ciudadanos, integrando la conducción y la reflexión ética en cada
                etapa del proceso teatral.
              </p>
            </div>
          </div>
        </div>

        {/* Valores grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {valores.map((valor, index) => {
            const accent = accentMap[valor.color];
            const Icon = valor.icon;
            return (
              <div
                key={valor.title}
                className="reveal group relative bg-theater-dark border border-white/10 p-8 rounded-sm hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
                data-stagger={index}
              >
                <div className={`h-14 w-14 ${accent.bg} flex items-center justify-center rounded-sm mb-6 transition-transform duration-300 group-hover:scale-110`}>
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-display font-bold text-xl uppercase mb-3">
                  {valor.title}
                </h3>
                <p className="font-body text-white/60 text-sm leading-relaxed">
                  {valor.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Program info */}
        <div className="reveal mt-16 grid md:grid-cols-3 gap-6" data-stagger="4">
          <div className="bg-white/5 border border-white/10 p-6 rounded-sm">
            <p className="font-display text-theater-orange text-3xl font-bold mb-2">13-18</p>
            <p className="font-body text-white/50 text-sm">
              Edades de participación en el programa de conducción
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-sm">
            <p className="font-display text-theater-teal text-3xl font-bold mb-2">Semanal</p>
            <p className="font-body text-white/50 text-sm">
              Encuentros de reflexión grupal con acompañamiento de profesionales
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-sm">
            <p className="font-display text-theater-red text-3xl font-bold mb-2">Anual</p>
            <p className="font-body text-white/50 text-sm">
              Evaluación y devolución personalizada a cada familia participante
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
