// Dirección visual: contacto claro y accesible sobre fondo blanco, con datos reales, jerarquía breve y etiquetas de alto contraste.
// Paleta: blanco y negro para lectura; rojo, azul petróleo y naranja para identificar cada canal.

import { useState } from "react";
import { MapPin, Phone, Mail, Send, CheckCircle } from "lucide-react";

export default function Contacto() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    asunto: "Información general",
    mensaje: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder: en producción este formulario se conectará a un servicio de recepción.
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ nombre: "", email: "", asunto: "Información general", mensaje: "" });
    }, 4000);
  };

  return (
    <section
      id="contacto"
      className="relative bg-theater-white py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src="/manus-storage/contacto-bg_194ba272.jpg"
          alt=""
          className="h-full w-full object-cover opacity-10"
        />
      </div>

      <div className="relative container">
        <div className="mb-16 relative">
          <span className="act-number text-theater-red left-0">XI</span>
          <div className="relative pt-8">
            <p className="reveal font-display text-theater-red text-sm uppercase tracking-[0.3em] mb-4" data-stagger="0">
              Acto XI
            </p>
            <h2 className="reveal font-display font-bold text-4xl md:text-5xl lg:text-6xl uppercase text-theater-black leading-tight" data-stagger="1">
              <span className="text-theater-red">Contacto</span>
            </h2>
            <p className="reveal font-body text-gray-600 text-base md:text-lg max-w-2xl mt-6" data-stagger="2">
              ¿Querés sumarte a la compañía, consultar por funciones o alquilar la sala?
              Escribinos y te respondemos a la brevedad.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-2 reveal-left" data-stagger="0">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 bg-theater-red flex items-center justify-center rounded-sm flex-shrink-0">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-display font-medium text-theater-black uppercase tracking-wider text-sm">
                    Dirección
                  </p>
                  <p className="font-body text-gray-600 text-sm mt-1">
                    Av. de Mayo 1902<br />
                    Ramos Mejía, Provincia de Buenos Aires
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-12 w-12 bg-theater-teal flex items-center justify-center rounded-sm flex-shrink-0">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-display font-medium text-theater-black uppercase tracking-wider text-sm">
                    Teléfonos
                  </p>
                  <p className="font-body text-gray-600 text-sm mt-1">
                    011 3657-8219 · WhatsApp compañía<br />
                    011 4651-0327 · Alquiler de sala
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-12 w-12 bg-theater-orange flex items-center justify-center rounded-sm flex-shrink-0">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-display font-medium text-theater-black uppercase tracking-wider text-sm">
                    Email
                  </p>
                  <p className="font-body text-gray-600 text-sm mt-1 break-words">
                    enmangasteatro@donboscorm.com.ar
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 reveal-right" data-stagger="1">
            <form
              onSubmit={handleSubmit}
              className="bg-white border border-gray-200 shadow-xl shadow-black/5 p-8 md:p-10 rounded-sm"
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <CheckCircle className="h-16 w-16 text-theater-red mb-4" />
                  <h3 className="font-display font-bold text-2xl uppercase text-theater-black mb-2">
                    ¡Mensaje enviado!
                  </h3>
                  <p className="font-body text-gray-600">
                    Gracias por escribirnos. Te responderemos a la brevedad.
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block font-body text-sm font-medium text-theater-black mb-2" style={{ color: "#0d0c0c" }}>
                        Nombre *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.nombre}
                        onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                        className="w-full bg-gray-50 border border-gray-200 rounded-sm px-4 py-3 font-body text-sm text-theater-black focus:outline-none focus:border-theater-red focus:bg-white transition-colors"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label className="block font-body text-sm font-medium text-theater-black mb-2" style={{ color: "#0d0c0c" }}>
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-gray-50 border border-gray-200 rounded-sm px-4 py-3 font-body text-sm text-theater-black focus:outline-none focus:border-theater-red focus:bg-white transition-colors"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block font-body text-sm font-medium text-theater-black mb-2" style={{ color: "#1a1a1a" }}>
                      Asunto
                    </label>
                    <select
                      value={form.asunto}
                      onChange={(e) => setForm({ ...form, asunto: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 rounded-sm px-4 py-3 font-body text-sm text-theater-black focus:outline-none focus:border-theater-red focus:bg-white transition-colors"
                    >
                      <option>Información general</option>
                      <option>Inscripción a talleres</option>
                      <option>Consulta sobre obras</option>
                      <option>Alquiler de sala</option>
                      <option>Prensa y medios</option>
                      <option>Otro</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label className="block font-body text-sm font-medium text-theater-black mb-2" style={{ color: "#1d1b1b" }}>
                      Mensaje *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.mensaje}
                      onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 rounded-sm px-4 py-3 font-body text-sm text-theater-black focus:outline-none focus:border-theater-red focus:bg-white transition-colors resize-none"
                      placeholder="Contanos en qué podemos ayudarte..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-theater-red text-white px-6 py-4 font-display font-medium uppercase tracking-wider text-sm btn-elevate"
                  >
                    <Send className="h-4 w-4" />
                    Enviar mensaje
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
