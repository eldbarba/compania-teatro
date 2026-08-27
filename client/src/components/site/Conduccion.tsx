// Dirección visual: un texto editorial continuo sobre fondo oscuro, sin tarjetas de datos ni bloques de servicios.
// La sección explica el acompañamiento, la convivencia y la ciudadanía que atraviesan el trabajo teatral.

export default function Conduccion() {
  return (
    <section
      id="conduccion"
      className="relative bg-theater-black text-white py-24 md:py-32 overflow-hidden spotlight-teal"
    >
      <div className="container">
        <div className="mb-14 relative">
          <span className="act-number text-theater-teal left-0">VI</span>
          <div className="relative pt-8">
            <p className="reveal font-display text-theater-teal text-sm uppercase tracking-[0.3em] mb-4" data-stagger="0">
              Formación integral
            </p>
            <h2 className="reveal font-display font-bold text-4xl md:text-5xl lg:text-6xl uppercase leading-tight max-w-3xl" data-stagger="1">
              <span className="text-theater-teal">Formación Integral</span>
            </h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-20 items-start">
          <div className="reveal" data-stagger="2">
            <p className="font-serif-theater italic text-theater-orange text-2xl md:text-3xl leading-tight">
              El teatro también es una manera de aprender a estar con otros y a tomar la palabra.
            </p>
          </div>

          <div className="reveal space-y-8" data-stagger="3">
            <p className="font-body text-white/75 text-base md:text-lg leading-relaxed">
              En la Compañía Escuela EN MANGAS DE CAMISA, la formación artística sucede junto con
              un proceso de acompañamiento que pone en el centro a cada joven y al grupo que
              construimos. Esta formación es una práctica cotidiana de escucha, cuidado y
              organización: ayuda a que cada participante pueda reconocer sus capacidades, expresar
              sus inquietudes y asumir responsabilidades dentro del proyecto común.
            </p>
            <p className="font-body text-white/75 text-base md:text-lg leading-relaxed">
              La experiencia teatral invita a desarrollar educación emocional, pensamiento crítico
              y empatía. Al trabajar sobre una obra, aprendemos a analizar textos y contextos,
              debatir, tomar decisiones y valorar la diversidad de miradas. Los ensayos son un
              ejercicio concreto de convivencia: los esfuerzos de todos se ensamblan para alcanzar
              un objetivo que trasciende lo individual.
            </p>
            <p className="font-body text-white/75 text-base md:text-lg leading-relaxed">
              Creemos que el arte permite la formación de ciudadanos con la posibilidad de
              participar, involucrarse en la comunidad y usar la propia voz para aportar al bien
              común. Por eso el teatro funciona como un laboratorio de preguntas y como un espacio
              democrático: cada producción abre conversaciones sobre el mundo que habitamos y sobre
              la responsabilidad de construirlo con otros.
            </p>
          </div>
        </div>

        <div className="reveal mt-14 border-l-2 border-theater-teal pl-6 md:pl-8 max-w-3xl" data-stagger="4">
          <p className="font-display text-white/85 text-xl md:text-2xl uppercase leading-tight">
            Aprender teatro haciendo teatro; aprender comunidad haciendo comunidad.
          </p>
        </div>
      </div>
    </section>
  );
}
