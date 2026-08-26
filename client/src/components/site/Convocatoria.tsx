import { Users, Heart, Zap } from "lucide-react";

export default function Convocatoria() {
  return (
    <section
      id="convocatoria"
      className="relative bg-theater-white py-24 md:py-32 overflow-hidden"
    >
      <div className="container">
        {/* Header */}
        <div className="mb-16 relative">
          <span className="act-number text-theater-orange-strong left-0">XII</span>
          <div className="relative pt-8">
            <p className="reveal font-display text-theater-orange-strong text-sm uppercase tracking-[0.3em] mb-4" data-stagger="0">
              Acto XII
            </p>
            <h2 className="reveal font-display font-bold text-4xl md:text-5xl lg:text-6xl uppercase text-theater-black leading-tight" data-stagger="1">
              Convocatoria <br />
              <span className="text-theater-orange-strong">2026</span>
            </h2>
            <p className="reveal font-body text-gray-600 text-base md:text-lg max-w-2xl mt-6" data-stagger="2">
              ¿Querés sumarte a nuestro proyecto? Buscamos jóvenes apasionados por el
              teatro, la creatividad y el trabajo en comunidad.
            </p>
          </div>
        </div>

        {/* Three paths */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {/* Acting */}
          <div className="reveal group relative bg-white border border-gray-200 p-8 md:p-10 rounded-sm hover:shadow-xl hover:shadow-black/10 transition-all duration-300 hover:-translate-y-1" data-stagger="0">
            <div className="h-14 w-14 bg-theater-red flex items-center justify-center rounded-sm mb-6 group-hover:scale-110 transition-transform duration-300">
              <Users className="h-7 w-7 text-white" />
            </div>
            <h3 className="font-display font-bold text-2xl uppercase text-theater-black mb-4">
              Actuación
            </h3>
            <p className="font-body text-gray-600 text-sm leading-relaxed mb-6">
              Formaci\u00f3n en actuaci\u00f3n, voz, movimiento y expresi\u00f3n corporal.
              Participar en montajes teatrales y vivir el proceso completo de producci\u00f3n.
            </p>
            <ul className="space-y-2 mb-8">
              {[
                "Ensayos semanales",
                "Montaje de obras",
                "Experiencia de escena",
                "Aprendizaje cooperativo",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 font-body text-gray-500 text-sm">
                  <span className="text-theater-red">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 text-theater-red font-display text-sm uppercase tracking-wider hover:gap-3 transition-all duration-200"
            >
              Inscribirse
              <span className="text-lg">→</span>
            </a>
          </div>

          {/* Technical */}
          <div className="reveal group relative bg-white border border-gray-200 p-8 md:p-10 rounded-sm hover:shadow-xl hover:shadow-black/10 transition-all duration-300 hover:-translate-y-1" data-stagger="1">
            <div className="h-14 w-14 bg-theater-teal flex items-center justify-center rounded-sm mb-6 group-hover:scale-110 transition-transform duration-300">
              <Zap className="h-7 w-7 text-white" />
            </div>
            <h3 className="font-display font-bold text-2xl uppercase text-theater-black mb-4">
              Equipo T\u00e9cnico
            </h3>
            <p className="font-body text-gray-600 text-sm leading-relaxed mb-6">
              Iluminaci\u00f3n, sonido, escenograf\u00eda, vestuario y producci\u00f3n.
              Aprende los oficios del teatro desde adentro.
            </p>
            <ul className="space-y-2 mb-8">
              {[
                "Dise\u00f1o de iluminaci\u00f3n",
                "Sonido y musicalización",
                "Escenograf\u00eda",
                "Gesti\u00f3n de producciones",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 font-body text-gray-500 text-sm">
                  <span className="text-theater-teal">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 text-theater-teal font-display text-sm uppercase tracking-wider hover:gap-3 transition-all duration-200"
            >
              Inscribirse
              <span className="text-lg">→</span>
            </a>
          </div>

          {/* Volunteers */}
          <div className="reveal group relative bg-white border border-gray-200 p-8 md:p-10 rounded-sm hover:shadow-xl hover:shadow-black/10 transition-all duration-300 hover:-translate-y-1" data-stagger="2">
            <div className="h-14 w-14 bg-theater-orange flex items-center justify-center rounded-sm mb-6 group-hover:scale-110 transition-transform duration-300">
              <Heart className="h-7 w-7 text-white" />
            </div>
            <h3 className="font-display font-bold text-2xl uppercase text-theater-black mb-4">
              Voluntariado
            </h3>
            <p className="font-body text-gray-600 text-sm leading-relaxed mb-6">
              Apoya nuestro proyecto sin participar en escena. Ayuda en producci\u00f3n,
              difusi\u00f3n, administraci\u00f3n y eventos.
            </p>
            <ul className="space-y-2 mb-8">
              {[
                "Producci\u00f3n de eventos",
                "Difusi\u00f3n y redes",
                "Administraci\u00f3n",
                "Apoyo comunitario",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 font-body text-gray-500 text-sm">
                  <span className="text-theater-orange-strong">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 text-theater-orange-strong font-display text-sm uppercase tracking-wider hover:gap-3 transition-all duration-200"
            >
              Sumarme
              <span className="text-lg">→</span>
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className="reveal mt-16 bg-gradient-to-r from-theater-red/20 to-theater-orange/20 border border-theater-red/30 p-8 md:p-12 rounded-sm text-center" data-stagger="3">
          <p className="font-body text-gray-600 text-base md:text-lg mb-4">
            ¿Preguntas? Escribinos o llamanos. Estamos para acompañarte en tu camino teatral.
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 bg-theater-red text-white px-8 py-4 font-display font-medium uppercase tracking-wider text-sm btn-elevate"
          >
            Contactar
          </a>
        </div>
      </div>
    </section>
  );
}
