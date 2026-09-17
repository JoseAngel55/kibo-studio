export default function Hero() {
  return (
    <section className="relative py-20 sm:py-28 max-w-5xl mx-auto px-6 overflow-hidden">
      {/* Luz de fondo sutil (Glow Effect) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      

      {/* Titular Principal */}
      <h1 className="text-4xl sm:text-6xl font-semibold text-gray-900 tracking-tight leading-[1.15] mb-6">
        Desarrollo web y software <span className="text-emerald-600">a medida</span> para estructurar tu negocio.
      </h1>

      {/* Bajada / Subtítulo */}
      <p className="text-lg sm:text-xl text-gray-600 max-w-2xl font-normal leading-relaxed mb-10">
        Diseñamos sitios web profesionales y sistemas de control interno optimizados, rápidos y con enfoque en seguridad e infraestructura sólida.
      </p>

      {/* Botones de Acción */}
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="https://www.facebook.com/profile.php?id=61594691480083"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center text-sm font-medium bg-emerald-600 text-white px-6 py-3.5 rounded-lg hover:bg-emerald-700 shadow-sm shadow-emerald-600/20 transition-all"
        >
          Contactanos por Facebook
        </a>
        {/*<a
          href="#proyectos"
          className="inline-flex items-center justify-center text-sm font-medium border border-gray-300 bg-white text-gray-700 px-6 py-3.5 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all"
        >
          Ver ejemplos de trabajo
        </a>*/}
      </div>
    </section>
  );
}