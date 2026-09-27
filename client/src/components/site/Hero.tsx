import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/manus-storage/hero-teatro-1_46492210.jpg",
    title: "En Mangas\nde Camisa",
    subtitle: "Hace más de 10 años aprendiendo a hacer teatro en comunidad", 
    cta: "Conoce nuestro proyecto",
    href: "#sobre-nosotros",
  },
  {
    image: "/manus-storage/ensayosrobin_b922fc71.jpg",
    title: "Aprender teatro\nhaciendo teatro",
    subtitle: "Experiencia de montaje integral",
    cta: "Descubre la formación",
    href: "#formacion",
  },
  {
    image: "/manus-storage/encabezadowebalicia_8147bae9.png",
    title: "Alicia\nMaravilla",
    subtitle: "Producción 2026 — Alicia adolescente en el conurbano",
    cta: "Ver producción actual",
    href: "#proyecto",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next, isPaused]);

  return (
    <section
      id="inicio"
      className="relative h-screen min-h-[600px] w-full overflow-hidden bg-theater-black"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.subtitle}
            className={`h-full w-full object-cover ${index === 2 ? "object-center" : ""}`}
            style={{
              transform: index === current ? "scale(1.05)" : "scale(1)",
              transition: "transform 8s ease-out",
              filter: index === 2 ? "brightness(0.95) saturate(0.94) contrast(1.02)" : undefined,
              objectPosition: index === 2 ? "center center" : undefined,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/68 via-black/18 to-black/32" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/42 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container">
          <div className="max-w-3xl">
            {/* Logo + name */}
            <div className="flex items-center gap-4 mb-8 reveal" data-stagger="0">
              <img
                src="/manus-storage/logo-en-mangas_9a6d9062.jpg"
                alt="Logo En Mangas de Camisa"
                className="h-14 w-14 md:h-16 md:w-16 rounded-sm"
              />
              <div className="h-12 w-px bg-theater-red" />
              <span className="font-display text-white/80 text-sm md:text-base uppercase tracking-[0.3em]">
                2015 — 2026
              </span>
            </div>

            {/* Animated title */}
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  index === current
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8 absolute pointer-events-none"
                }`}
              >
                <h1 className="font-display font-bold text-white text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[0.95] uppercase text-shadow-lg whitespace-pre-line">
                  {slide.title}
                </h1>
                <p className="mt-6 font-serif-theater italic text-theater-orange text-xl md:text-2xl text-shadow-md">
                  {slide.subtitle}
                </p>
                <a
                  href={slide.href}
                  className="inline-flex items-center gap-2 mt-8 bg-theater-red text-white px-8 py-4 font-display font-medium uppercase tracking-wider text-sm md:text-base btn-elevate"
                >
                  {slide.cta}
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-8 left-0 right-0 z-10">
        <div className="container flex items-center justify-between">
          {/* Dots */}
          <div className="flex items-center gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  index === current
                    ? "w-12 bg-theater-red"
                    : "w-6 bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Ir a slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              className="p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              className="p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200"
              aria-label="Siguiente"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/50">
        <span className="text-xs font-body uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
