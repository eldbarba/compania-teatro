import { useState, useEffect, useCallback } from "react";
import { Quote, Star } from "lucide-react";

const testimonios = [
  {
    text: "Entré a la compañía siendo una adolescente tímida y hoy, diez años después, el teatro es mi profesión. Aprendí no solo a actuar, sino a escuchar, a trabajar en equipo y a confiar en mí misma.",
    author: "María González",
    role: "Egresada · Actriz profesional",
    rating: 5,
  },
  {
    text: "Como padre, ver la transformación de mi hijo ha sido extraordinario. La compañía le dio un espacio donde pertenece, donde sus ideas valen, donde puede ser él mismo sin juicio.",
    author: "Carlos Méndez",
    role: "Padre de integrante",
    rating: 5,
  },
  {
    text: "La formación que recibí aquí fue la base de todo lo que soy después. No es solo teatro: es educación emocional, es pensamiento crítico, es comunidad. Es lo que todo joven necesita.",
    author: "Lucía Fernández",
    role: "Egresada · Docente de teatro",
    rating: 5,
  },
  {
    text: "Participé en tres obras durante mi paso por la compañía. Cada montaje fue una experiencia distinta que me enseñó sobre disciplina, creatividad y el poder del trabajo colectivo.",
    author: "Diego Torres",
    role: "Egresado · Estudiante de Artes",
    rating: 5,
  },
  {
    text: "Lo que hace única a esta compañía es que trata a los jóvenes como artistas serios. No es un taller de pasatiempo: es un espacio de creación profesional donde las voces jóvenes importan.",
    author: "Ana Ruiz",
    role: "Madre de integrante",
    rating: 5,
  },
];

export default function Testimonios() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonios.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next, isPaused]);

  return (
    <section
      id="testimonios"
      className="relative bg-theater-white py-24 md:py-32 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 relative">
          <span className="act-number text-theater-red left-1/2 -translate-x-1/2">II</span>
          <p className="reveal font-display text-theater-red text-sm uppercase tracking-[0.3em] mb-4" data-stagger="0">
            Acto II
          </p>
          <h2 className="reveal font-display font-bold text-4xl md:text-5xl lg:text-6xl uppercase text-theater-black leading-tight" data-stagger="1">
            Voces de nuestra <br />
            <span className="text-theater-red">comunidad</span>
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto reveal" data-stagger="2">
          <div className="relative min-h-[320px] md:min-h-[280px]">
            {testimonios.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-500 ${
                  index === current
                    ? "opacity-100 translate-x-0"
                    : index < current
                    ? "opacity-0 -translate-x-8 pointer-events-none"
                    : "opacity-0 translate-x-8 pointer-events-none"
                }`}
              >
                <div className="bg-white border border-gray-200 shadow-xl shadow-black/5 p-8 md:p-12 rounded-sm relative">
                  <Quote className="absolute top-6 right-6 h-12 w-12 text-theater-red/10" />

                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-theater-orange text-theater-orange"
                      />
                    ))}
                  </div>

                  <p className="font-serif-theater italic text-lg md:text-xl text-gray-800 leading-relaxed mb-8">
                    "{testimonial.text}"
                  </p>

                  <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                    <div className="h-12 w-12 rounded-full bg-theater-red/10 flex items-center justify-center font-display font-bold text-theater-red text-lg">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-display font-medium text-theater-black uppercase tracking-wider text-sm">
                        {testimonial.author}
                      </p>
                      <p className="font-body text-gray-500 text-sm mt-0.5">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-3 mt-8">
            {testimonios.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === current
                    ? "w-8 bg-theater-red"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
