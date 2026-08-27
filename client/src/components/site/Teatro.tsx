import { Calendar, MapPin, Phone, Building } from "lucide-react";

const agenda = [
  {
    fecha: "17 OCT",
    hora: "en construcción",
    evento: "ALICIA MARAVILLA",
    tipo: "Próximamente",
    color: "orange",
  },
  {
    fecha: "22 AGO",
    hora: "en construcción",
    evento: "Próximamente",
    tipo: "Próximamente",
    color: "teal",
  },
  {
    fecha: "05 SEP",
    hora: "en construcción",
    evento: "Próximamente",
    tipo: "Próximamente",
    color: "orange",
  },
  {
    fecha: "12 SEP",
    hora: "en construcción",
    evento: "Próximamente",
    tipo: "Próximamente",
    color: "red",
  },
  {
    fecha: "03 OCT",
    hora: "en construcción",
    evento: "Próximamente",
    tipo: "Próximamente",
    color: "teal",
  },
  {
    fecha: "25 OCT",
    hora: "en construcción",
    evento: "Próximamente",
    tipo: "Próximamente",
    color: "orange",
  },
];

const accentMap: Record<string, string> = {
  red: "bg-theater-red",
  teal: "bg-theater-teal",
  orange: "bg-theater-orange",
};

export default function Teatro() {
  return (
    <section
      id="teatro"
      className="relative bg-theater-black text-white py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/manus-storage/teatro-bg_7b1dcc85.jpg"
          alt=""
          className="h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-theater-black via-theater-black/90 to-theater-black" />
      </div>

      <div className="relative container">
        {/* Header */}
        <div className="mb-16 relative">
          <span className="act-number text-theater-orange left-0">X</span>
          <div className="relative pt-8">
            <p className="reveal font-display text-theater-orange text-sm uppercase tracking-[0.3em] mb-4" data-stagger="0">
              Acto X
            </p>
            <h2 className="reveal font-display font-bold text-4xl md:text-5xl lg:text-6xl uppercase leading-tight" data-stagger="1">
              Nuestra <span className="text-theater-orange">sala</span>
            </h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Agenda */}
          <div className="lg:col-span-2 reveal-left" data-stagger="0">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="h-6 w-6 text-theater-orange" />
              <h3 className="font-display font-bold text-2xl uppercase">Agenda del Teatro</h3>
            </div>
            <div className="space-y-3">
              {agenda.map((item, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-4 md:gap-6 bg-theater-dark/80 border border-white/10 p-4 md:p-5 rounded-sm hover:border-white/20 transition-all duration-200 hover:translate-x-2"
                >
                  {/* Date */}
                  <div className={`h-14 w-14 md:h-16 md:w-16 ${accentMap[item.color]} flex flex-col items-center justify-center rounded-sm flex-shrink-0`}>
                    <span className="font-display font-bold text-white text-sm md:text-base leading-none">
                      {item.fecha.split(" ")[0]}
                    </span>
                    <span className="font-body text-white/80 text-xs uppercase mt-1">
                      {item.fecha.split(" ")[1]}
                    </span>
                  </div>
                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <p className="font-display font-medium text-white uppercase tracking-wider text-sm md:text-base truncate">
                      {item.evento}
                    </p>
                    <p className="font-body text-white/50 text-xs mt-0.5">
                      {item.hora} hs · {item.tipo}
                    </p>
                  </div>
                  {/* Arrow */}
                  <span className="text-white/30 group-hover:text-theater-orange transition-colors duration-200 text-2xl">
                    →
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Alquiler */}
          <div className="reveal-right" data-stagger="1">
            <div className="bg-gradient-to-br from-theater-teal/20 to-theater-dark border border-white/10 p-8 rounded-sm h-full">
              <div className="flex items-center gap-3 mb-6">
                <Building className="h-6 w-6 text-theater-teal" />
                <h3 className="font-display font-bold text-xl uppercase">Alquiler de Sala</h3>
              </div>
              <p className="font-body text-white/70 text-sm leading-relaxed mb-6">
                Nuestra sala teatral está disponible para alquiler a compañías, escuelas,
                grupos independientes y productores, y mantiene una cartelera anual de espectáculos
                de gran calidad artística. Capacidad para 620 espectadores, con equipamiento técnico
                completo.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-white/60 text-sm font-body">
                  <MapPin className="h-4 w-4 text-theater-teal flex-shrink-0" />
                  <span>
                    Av. de Mayo 1902<br />
                    Ramos Mejía, Provincia de Buenos Aires
                  </span>
                </div>
                <div className="flex items-center gap-3 text-white/60 text-sm font-body">
                  <Phone className="h-4 w-4 text-theater-teal flex-shrink-0" />
                  4651-0327 / 4375-2233
                </div>
              </div>
              <div className="space-y-2 mb-6">
                <p className="font-body text-white/50 text-xs uppercase tracking-wider">
                  Equipamiento
                </p>
                <ul className="space-y-1 font-body text-white/70 text-sm">
                  <li>· Sistema de iluminación profesional</li>
                  <li>· Sistema de sonido profesional</li>
                  <li>· Camerinos con capacidad para 20+ personas</li>
                </ul>
              </div>
              <a
                href="#contacto"
                className="block text-center bg-theater-teal text-white px-6 py-3 font-display font-medium uppercase tracking-wider text-sm btn-elevate"
              >
                Consultar disponibilidad
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
