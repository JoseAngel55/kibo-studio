export default function About() {
  return (
    <section className="py-16 bg-gray-50/50 border-t border-gray-200/80">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row gap-8 items-start justify-between">
        <div className="max-w-md">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-600 font-semibold mb-2 block">
            Sobre el Estudio
          </span>
          <h2 className="text-2xl font-semibold text-gray-900 tracking-tight mb-4">
            Ingeniería de software con enfoque práctico.
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            En Kibo Studio combinamos bases sólidas de ingeniería en sistemas, desarrollo web moderno y buenas prácticas de infraestructura para crear soluciones digitales funcionales y confiables.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            No entregamos solo código o páginas web bonitas: estructuramos herramientas pensadas para resolver problemas reales de operación, ventas y control en tu negocio.
          </p>
        </div>

        {/* Pequeños valores de confianza */}
        <div className="w-full md:w-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-xl border border-gray-200/80 shadow-xs">
            <span className="text-xs font-mono text-emerald-600 block mb-1">01. Arquitectura</span>
            <h3 className="text-sm font-semibold text-gray-900">Código limpio y ágil</h3>
            <p className="text-xs text-gray-500 mt-1">Sitios optimizados para cargar en menos de un segundo.</p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-gray-200/80 shadow-xs">
            <span className="text-xs font-mono text-emerald-600 block mb-1">02. Seguridad</span>
            <h3 className="text-sm font-semibold text-gray-900">Datos resguardados</h3>
            <p className="text-xs text-gray-500 mt-1">Implementaciones locales y remotas con copias de respaldo.</p>
          </div>
        </div>
      </div>
    </section>
  );
}