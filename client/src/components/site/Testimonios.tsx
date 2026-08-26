import { useState, useEffect, useCallback } from "react";
import { Quote } from "lucide-react";

const testimonios = [
  {
    text: "Aprendi de lxs actorxs, de lxs tecnicxs y de la mayoria de este espacio. En cuanto a tecnico aprendi un monton o mejore un monton de cosas que no sabia",
    author: "Bautista López",
    role: "Técnico en HABLANDO A TU CORAZÓN",
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

                  <div className="mb-6 h-1 w-12 bg-theater-orange" aria-hidden="true" />

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
