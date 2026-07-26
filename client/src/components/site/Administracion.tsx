import { FileText, Download, Users } from "lucide-react";

const juntaDirectiva = [
  { nombre: "Roberto Vega", cargo: "Presidente", desde: "2014" },
  { nombre: "Carmen Díaz", cargo: "Vicepresidenta", desde: "2015" },
  { nombre: "Alberto Núñez", cargo: "Tesorero", desde: "2017" },
  { nombre: "Patricia López", cargo: "Secretaria", desde: "2019" },
  { nombre: "Sergio Ramos", cargo: "Vocal", desde: "2020" },
  { nombre: "Mónica Torres", cargo: "Vocal", desde: "2022" },
];

const informes = [
  { año: "2025", titulo: "Memoria Anual 2025", size: "2.4 MB" },
  { año: "2024", titulo: "Memoria Anual 2024", size: "2.1 MB" },
  { año: "2023", titulo: "Memoria Anual 2023", size: "1.8 MB" },
  { año: "2022", titulo: "Memoria Anual 2022", size: "1.6 MB" },
];

export default function Administracion() {
  return (
    <section
      id="administracion"
      className="relative bg-theater-white py-24 md:py-32 overflow-hidden"
    >
      <div className="container">
        {/* Header */}
        <div className="mb-16 relative">
          <span className="act-number text-theater-teal left-0">IX</span>
          <div className="relative pt-8">
            <p className="reveal font-display text-theater-teal text-sm uppercase tracking-[0.3em] mb-4" data-stagger="0">
              Acto IX
            </p>
            <h2 className="reveal font-display font-bold text-4xl md:text-5xl lg:text-6xl uppercase text-theater-black leading-tight" data-stagger="1">
              <span className="text-theater-teal">Administración</span>
            </h2>
            <p className="reveal font-body text-gray-600 text-base md:text-lg max-w-2xl mt-6" data-stagger="2">
              La gestión institucional de la compañía, su gobierno y la transparencia
              de su gestión a lo largo del tiempo.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Junta Directiva */}
          <div className="reveal-left" data-stagger="0">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-12 w-12 bg-theater-teal flex items-center justify-center rounded-sm">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-display font-bold text-2xl uppercase text-theater-black">
                Junta Directiva
              </h3>
            </div>
            <div className="bg-white border border-gray-200 rounded-sm overflow-hidden shadow-sm">
              {juntaDirectiva.map((miembro, index) => (
                <div
                  key={miembro.nombre}
                  className={`flex items-center justify-between p-5 transition-colors duration-200 hover:bg-gray-50 ${
                    index !== juntaDirectiva.length - 1 ? "border-b border-gray-100" : ""
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-theater-teal/10 flex items-center justify-center font-display font-bold text-theater-teal">
                      {miembro.nombre.charAt(0)}
                    </div>
                    <div>
                      <p className="font-display font-medium text-theater-black uppercase tracking-wider text-sm">
                        {miembro.nombre}
                      </p>
                      <p className="font-body text-gray-500 text-xs mt-0.5">
                        {miembro.cargo}
                      </p>
                    </div>
                  </div>
                  <span className="font-body text-gray-400 text-xs">
                    Desde {miembro.desde}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Informes Anuales */}
          <div className="reveal-right" data-stagger="1">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-12 w-12 bg-theater-red flex items-center justify-center rounded-sm">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-display font-bold text-2xl uppercase text-theater-black">
                Informes Anuales
              </h3>
            </div>
            <div className="space-y-3">
              {informes.map((informe) => (
                <div
                  key={informe.año}
                  className="group flex items-center justify-between bg-white border border-gray-200 p-5 rounded-sm hover:border-theater-red hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 bg-theater-red/10 flex items-center justify-center font-display font-bold text-theater-red text-lg group-hover:bg-theater-red group-hover:text-white transition-colors duration-200">
                      {informe.año}
                    </div>
                    <div>
                      <p className="font-display font-medium text-theater-black uppercase tracking-wider text-sm">
                        {informe.titulo}
                      </p>
                      <p className="font-body text-gray-500 text-xs mt-0.5">
                        PDF · {informe.size}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      // Placeholder: show toast or download
                      console.log("Download", informe.titulo);
                    }}
                    className="p-2 text-gray-400 hover:text-theater-red transition-colors duration-200"
                    aria-label={`Descargar ${informe.titulo}`}
                  >
                    <Download className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>
            <p className="font-body text-gray-400 text-xs mt-4 italic">
              Los informes anuales están disponibles para descarga pública.
              Para solicitar información específica, contactar a administración.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
