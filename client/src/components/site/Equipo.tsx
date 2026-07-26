import { useState } from "react";
import { X } from "lucide-react";

const equipo = [
  {
    image: "/manus-storage/equipo-1_282601a9.jpg",
    name: "Elena Martínez",
    role: "Directora Artística",
    bio: "Fundadora de la compañía. Actriz y directora con más de 20 años de trayectoria. Especialista en teatro contemporáneo y creación colectiva con jóvenes.",
    accent: "red",
  },
  {
    image: "/manus-storage/equipo-2_ad8d9159.jpg",
    name: "Marcos Silva",
    role: "Docente de Actuación",
    bio: "Actor y pedagogo teatral. Forma parte del equipo desde 2016. Lidera los talleres de actuación para los grupos de nivel inicial e intermedio.",
    accent: "teal",
  },
  {
    image: "/manus-storage/equipo-3_91077de1.jpg",
    name: "Patricia Ruiz",
    role: "Coach de Elenco",
    bio: "Psicóloga social y coach actoral. Acompaña el proceso de conducción y desarrollo emocional de los jóvenes integrantes de la compañía.",
    accent: "orange",
  },
  {
    image: "/manus-storage/equipo-4_ff6b4730.jpg",
    name: "Javier Castro",
    role: "Productor General",
    bio: "Productor cultural con amplia experiencia en gestión de proyectos teatrales. Coordina la producción, programación y administración de la compañía.",
    accent: "red",
  },
];

const accentMap: Record<string, string> = {
  red: "text-theater-red",
  teal: "text-theater-teal",
  orange: "text-theater-orange",
};

export default function Equipo() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section
      id="equipo"
      className="relative bg-theater-white py-24 md:py-32 overflow-hidden"
    >
      <div className="container">
        {/* Header */}
        <div className="mb-16 relative">
          <span className="act-number text-theater-red left-0">VII</span>
          <div className="relative pt-8">
            <p className="reveal font-display text-theater-red text-sm uppercase tracking-[0.3em] mb-4" data-stagger="0">
              Acto VII
            </p>
            <h2 className="reveal font-display font-bold text-4xl md:text-5xl lg:text-6xl uppercase text-theater-black leading-tight" data-stagger="1">
              Nuestro <span className="text-theater-red">equipo</span>
            </h2>
            <p className="reveal font-body text-gray-600 text-base md:text-lg max-w-2xl mt-6" data-stagger="2">
              Profesionales con vocación docente que acompañan a cada joven en su
              recorrido teatral y humano.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {equipo.map((member, index) => (
            <div
              key={member.name}
              className="reveal cursor-pointer group"
              data-stagger={index}
              onClick={() => setSelected(index)}
            >
              <div className="img-zoom relative aspect-[3/4] overflow-hidden rounded-sm bg-theater-black">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-theater-black via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className={`font-body text-xs uppercase tracking-widest ${accentMap[member.accent]} mb-1`}>
                    {member.role}
                  </p>
                  <h3 className="font-display font-bold text-lg uppercase text-white">
                    {member.name}
                  </h3>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-theater-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="font-display text-white text-sm uppercase tracking-wider border border-white/40 px-4 py-2">
                    Ver perfil
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-[60] bg-theater-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
          style={{ animation: "fadeIn 0.25s ease-out" }}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white p-2"
            onClick={() => setSelected(null)}
            aria-label="Cerrar"
          >
            <X className="h-8 w-8" />
          </button>
          <div
            className="max-w-3xl w-full grid md:grid-cols-2 gap-0 bg-theater-dark border border-white/10 rounded-sm overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            style={{ animation: "lightboxIn 0.3s cubic-bezier(0.23, 1, 0.32, 1)" }}
          >
            <div className="aspect-[3/4] md:aspect-auto overflow-hidden">
              <img
                src={equipo[selected].image}
                alt={equipo[selected].name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <p className={`font-body text-xs uppercase tracking-widest ${accentMap[equipo[selected].accent]} mb-3`}>
                {equipo[selected].role}
              </p>
              <h3 className="font-display font-bold text-3xl md:text-4xl uppercase text-white mb-6">
                {equipo[selected].name}
              </h3>
              <p className="font-body text-white/70 leading-relaxed">
                {equipo[selected].bio}
              </p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes lightboxIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  );
}
