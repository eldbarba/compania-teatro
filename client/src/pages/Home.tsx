import { useScrollReveal } from "@/hooks/useScrollReveal";
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import SobreNosotros from "@/components/site/SobreNosotros";
import Testimonios from "@/components/site/Testimonios";
import Obras from "@/components/site/Obras";
import Formacion from "@/components/site/Formacion";
import Mision from "@/components/site/Mision";
import Conduccion from "@/components/site/Conduccion";
import Equipo from "@/components/site/Equipo";
import Actores from "@/components/site/Actores";
import Teatro from "@/components/site/Teatro";
import Convocatoria from "@/components/site/Convocatoria";
import Colaboraciones from "@/components/site/Colaboraciones";
import AmigosDeComun from "@/components/site/AmigosDeComun";
import Historia from "@/components/site/Historia";
import Contacto from "@/components/site/Contacto";
import Footer from "@/components/site/Footer";

export default function Home() {
  const containerRef = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={containerRef} className="min-h-screen bg-theater-black">
      <Navbar />
      <main>
        <Hero />
        <Historia />
        <SobreNosotros />
        <Testimonios />
        <Obras />
        <Formacion />
        <Mision />
        <Conduccion />
        <Equipo />
        <Actores />
        <Teatro />
        <Convocatoria />
        <Colaboraciones />
        <AmigosDeComun />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}
