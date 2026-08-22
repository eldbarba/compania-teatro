export default function SobreNosotros() {
  return (
    <section
      id="sobre-nosotros"
      className="relative bg-theater-black text-white py-24 md:py-32 overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/manus-storage/sobre-nosotros-bg_81f072bb.jpg"
          alt=""
          className="h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-theater-black via-theater-black/80 to-transparent" />
      </div>

      {/* Act number */}
      <div className="relative container">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left: text */}
          <div className="lg:col-span-7 relative">
            <span className="act-number text-theater-red left-0">I</span>
            <div className="relative pt-8">
              <p className="reveal font-display text-theater-red text-sm uppercase tracking-[0.3em] mb-4" data-stagger="0">
                Acto I
              </p>
              <h2 className="reveal font-display font-bold text-4xl md:text-5xl lg:text-6xl uppercase leading-tight mb-8" data-stagger="1">
                Sobre <br />
                <span className="text-theater-red">Nosotros</span>
              </h2>
              <div className="reveal space-y-6 font-body text-white/80 text-base md:text-lg leading-relaxed max-w-2xl" data-stagger="2">
                <p>
                  <strong className="text-white">En Mangas de Camisa</strong> es una compañía-escuela juvenil de teatro
                  con más de 10 años de trayectoria ininterrumpida. Somos un espacio donde el teatro es
                  herramienta de transformación humana y social.
                </p>
                <p>
                  <strong className="text-theater-orange">Nuestro objetivo</strong> es promover el protagonismo de los
                  jóvenes y la visibilización de sus inquietudes, capacidades y búsquedas en un
                  proceso innovador de aprendizaje artístico a través del lenguaje de las artes escénicas.
                </p>
                <p>
                  <strong className="text-theater-teal">Aprender teatro haciendo teatro</strong> es nuestra premisa.
                  Creemos que gran parte de la formación artística y humana sucede durante el proceso
                  de aquello que nos convoca: el teatro. Cada montaje es una experiencia integral donde
                  los jóvenes viven todas las etapas de producción de una obra.
                </p>
              </div>

              {/* Stats */}
              <div className="reveal grid grid-cols-3 gap-4 md:gap-8 mt-12 pt-12 border-t border-white/10" data-stagger="3">
                <div>
                  <p className="font-display font-bold text-3xl md:text-5xl text-theater-red">+10</p>
                  <p className="font-body text-xs md:text-sm text-white/60 uppercase tracking-wider mt-2">
                    Años de trayectoria
                  </p>
                </div>
                <div>
                  <p className="font-display font-bold text-3xl md:text-5xl text-theater-orange">8</p>
                  <p className="font-body text-xs md:text-sm text-white/60 uppercase tracking-wider mt-2">
                    Obras producidas
                  </p>
                </div>
                <div>
                  <p className="font-display font-bold text-3xl md:text-5xl text-theater-teal">200+</p>
                  <p className="font-body text-xs md:text-sm text-white/60 uppercase tracking-wider mt-2">
                    Jóvenes formados
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: quote card */}
          <div className="lg:col-span-5 reveal-right" data-stagger="4">
            <div className="relative bg-theater-dark/80 backdrop-blur-sm border border-white/10 p-8 md:p-10 rounded-sm">
              <div className="absolute -top-4 -left-4 bg-theater-red text-white w-12 h-12 flex items-center justify-center font-serif-theater text-3xl">
                "
              </div>
              <blockquote className="font-serif-theater italic text-xl md:text-2xl text-white/90 leading-relaxed">
                <p>
                  “El teatro es la primera invención humana, la que permite y promueve todos los demás inventos.
                  El teatro nace cuando el ser humano descubre que puede observarse a sí mismo y, a partir de ese
                  descubrimiento, empieza a inventar otras maneras de obrar”.
                </p>
                <cite className="mt-4 block not-italic font-display font-medium text-theater-orange text-sm uppercase tracking-wider">
                  Augusto Boal
                </cite>
                <p className="mt-7">
                  “La finalidad del Pequeño Teatro es regocijar, educar e instruir a los jóvenes en la mayor medida posible”.
                </p>
                <cite className="mt-4 block not-italic font-display font-medium text-theater-teal text-sm uppercase tracking-wider">
                  Reglas del pequeño teatro · 1858 · Don Bosco
                </cite>
              </blockquote>
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="font-display font-medium text-white uppercase tracking-wider text-sm">
                  En Mangas de Camisa
                </p>
                <p className="font-body text-white/50 text-sm mt-1">
                  Salesianos Don Bosco — Ramos Mejía
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
