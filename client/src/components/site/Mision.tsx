export default function Mision() {
  return (
    <section
      id="mision"
      className="relative min-h-[70vh] flex items-center py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/manus-storage/mision-bg_9eed067b.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-theater-black/80 via-theater-black/70 to-theater-black/90" />
      </div>

      {/* Content */}
      <div className="relative container">
        <div className="max-w-4xl mx-auto text-center">
          <span className="act-number text-theater-orange left-1/2 -translate-x-1/2">V</span>
          <div className="relative pt-8">
            <p className="reveal font-display text-theater-orange text-sm uppercase tracking-[0.3em] mb-4" data-stagger="0">
              Acto V
            </p>
            <h2 className="reveal font-display font-bold text-4xl md:text-5xl lg:text-6xl uppercase text-white leading-tight mb-8" data-stagger="1">
              Nuestra <span className="text-theater-orange">Misión</span>
            </h2>
            <blockquote className="reveal font-serif-theater italic text-xl md:text-2xl lg:text-3xl text-white/90 leading-relaxed" data-stagger="2">
              "Acompañar a los jóvenes en su formación como ciudadanos sensibles, críticos y
              libres que usen el arte como herramienta para comprender el mundo y transformarlo.
              Creemos que cada joven lleva dentro una historia que merece ser contada, y nuestro
              trabajo es darle el escenario para contarla."
            </blockquote>
            <div className="reveal mt-12 flex flex-wrap justify-center gap-4" data-stagger="3">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-4 rounded-sm">
                <p className="font-display font-bold text-2xl text-theater-red">Arte</p>
                <p className="font-body text-white/60 text-xs uppercase tracking-wider mt-1">
                  Como expresión
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-4 rounded-sm">
                <p className="font-display font-bold text-2xl text-theater-teal">Educación</p>
                <p className="font-body text-white/60 text-xs uppercase tracking-wider mt-1">
                  Como camino
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-4 rounded-sm">
                <p className="font-display font-bold text-2xl text-theater-orange">Comunidad</p>
                <p className="font-body text-white/60 text-xs uppercase tracking-wider mt-1">
                  Como hogar
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
