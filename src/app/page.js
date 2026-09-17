export default function Home() {
  return (
    <main className="min-h-screen p-8 max-w-5xl mx-auto">
      <header className="py-6 border-b border-gray-200 flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-tight text-gray-900">
          Kibo<span className="text-gray-400">Studio</span>
        </h1>
        <a 
          href="https://wa.me/" 
          target="_blank" 
          className="text-sm font-medium bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
        >
          Iniciar Proyecto
        </a>
      </header>

      <section className="py-20">
        <span className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-4 block">
          Desarrollo de Software & Arquitectura Web
        </span>
        <h2 className="text-4xl sm:text-6xl font-semibold tracking-tight text-gray-900 leading-tight mb-6">
          Construimos sistemas web sólidos, eficientes y a la medida de tu negocio.
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl">
          Desde páginas web optimizadas para PYMEs hasta sistemas de gestión de inventario e infraestructura local.
        </p>
      </section>
    </main>
  );
}