import { Drama, Wrench, ArrowRight } from "lucide-react";

export default function Formacion() {
  return (
    <section
      id="formacion"
      className="relative bg-theater-white py-24 md:py-32 overflow-hidden"
    >
      <div className="container">
        {/* Header */}
        <div className="mb-16 relative">
          <span className="act-number text-theater-teal left-0">IV</span>
          <div className="relative pt-8">
            <p className="reveal font-display text-theater-teal text-sm uppercase tracking-[0.3em] mb-4" data-stagger="0">
              Acto IV
            </p>
            <h2 className="reveal font-display font-bold text-4xl md:text-5xl lg:text-6xl uppercase text-theater-black leading-tight" data-stagger="1">
              La <span className="text-theater-teal">formación</span>
            </h2>
            <p className="reveal font-body text-gray-600 text-base md:text-lg max-w-2xl mt-6" data-stagger="2">
              Nuestra propuesta formativa abarca dos grandes áreas: lo que se vive sobre el
              escenario y todo lo que acontece detrás. Ambas son igualmente esenciales para
              la creación teatral.
            </p>
          </div>
        </div>

        {/* Two columns */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Sobre el escenario */}
          <div className="reveal-left group relative overflow-hidden rounded-sm bg-theater-black" data-stagger="0">
            <div className="img-zoom relative aspect-[4/3] overflow-hidden">
              <img
                src="/manus-storage/formacion-escenario_a853174a.jpg"
                alt="Formación sobre el escenario"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-theater-black via-theater-black/40 to-transparent" />
            </div>
            <div className="p-8 md:p-10 relative -mt-32">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-12 w-12 bg-theater-red flex items-center justify-center rounded-sm">
                    <Drama className="h-6 w-6 text-white" />
                  </div>
                  <p className="font-display text-theater-red text-sm uppercase tracking-[0.2em]">
                    Sobre el escenario
                  </p>
                </div>
                <h3 className="font-display font-bold text-2xl md:text-3xl uppercase text-white mb-4">
                  Actuación y expresión
                </h3>
                <p className="font-body text-white/70 text-sm md:text-base leading-relaxed mb-6">
                  Formación en actuación, voz, movimiento corporal, improvisación y creación
                  colectiva. Los jóvenes desarrollan presencia escénica, capacidad expresiva
                  y herramientas para construir personajes desde la verdad interior.
                </p>
                <ul className="space-y-2 mb-8">
                  {[
                    "Técnicas de actuación contemporánea",
                    "Voz y dicción teatral",
                    "Movimiento y expresión corporal",
                    "Improvisación y creación colectiva",
                    "Montaje de escenas y obras",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 font-body text-white/60 text-sm">
                      <span className="text-theater-red mt-1">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 text-theater-red font-display text-sm uppercase tracking-wider hover:gap-3 transition-all duration-200"
                >
                  Más información
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Detrás de escena */}
          <div className="reveal-right group relative overflow-hidden rounded-sm bg-theater-black" data-stagger="1">
            <div className="img-zoom relative aspect-[4/3] overflow-hidden">
              <img
                src="/manus-storage/formacion-backstage_27d929c7.jpg"
                alt="Formación detrás de escena"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-theater-black via-theater-black/40 to-transparent" />
            </div>
            <div className="p-8 md:p-10 relative -mt-32">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-12 w-12 bg-theater-teal flex items-center justify-center rounded-sm">
                    <Wrench className="h-6 w-6 text-white" />
                  </div>
                  <p className="font-display text-theater-teal text-sm uppercase tracking-[0.2em]">
                    Detrás de escena
                  </p>
                </div>
                <h3 className="font-display font-bold text-2xl md:text-3xl uppercase text-white mb-4">
                  Técnica y producción
                </h3>
                <p className="font-body text-white/70 text-sm md:text-base leading-relaxed mb-6">
                  Formación en las disciplinas técnicas que hacen posible el teatro:
                  iluminación, sonido, escenografía, vestuario, dirección de escena y
                  producción. Los jóvenes aprenden el oficio desde adentro.
                </p>
                <ul className="space-y-2 mb-8">
                  {[
                    "Diseño y operación de iluminación",
                    "Diseño sonoro y musicalización",
                    "Escenografía y utilería",
                    "Vestuario y caracterización",
                    "Producción y gestión cultural",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 font-body text-white/60 text-sm">
                      <span className="text-theater-teal mt-1">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 text-theater-teal font-display text-sm uppercase tracking-wider hover:gap-3 transition-all duration-200"
                >
                  Más información
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
