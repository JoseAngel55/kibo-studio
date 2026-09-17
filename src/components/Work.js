export default function Work() {
  const projects = [
    {
      title: "Sistema de Control de Inventario & Activos",
      category: "Desarrollo de Software / On-Premise",
      description: "Panel de administración para la gestión de piezas, alertas de stock en tiempo real y arquitectura desplegada en servidor local con base de datos respaldada.",
      tech: ["Next.js", "Tailwind CSS", "Node.js", "Docker / MySQL"],
      type: "System Demo",
      metrics: "Base de datos local + Respaldos"
    },
    {
      title: "Sitio Web Corporativo para Negocio Local",
      category: "Desarrollo Web / Presencia Digital",
      description: "Página web de carga ultra rápida optimizada para motores de búsqueda, con integración directa a WhatsApp y formulario de cotización interactivo.",
      tech: ["Next.js", "Tailwind CSS", "Vercel Cloud", "SEO Opt"],
      type: "Web Template",
      metrics: "100/100 Velocidad en Google"
    }
  ];

  return (
    <section id="proyectos" className="py-20 max-w-5xl mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-600 font-semibold mb-2 block">
            Portafolio & Capacidades
          </span>
          <h2 className="text-3xl font-semibold text-gray-900 tracking-tight">Proyectos y Demostraciones</h2>
        </div>
        <p className="text-gray-500 text-sm max-w-md">
          Estructuras reales de software y sitios web adaptados a las necesidades operativas de cada empresa.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="group bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-xs hover:border-gray-300 hover:shadow-md transition-all flex flex-col justify-between"
          >
            {/* Simulador de Pantalla / Preview Interfaz */}
            <div className="bg-gray-900 p-6 aspect-video flex flex-col justify-between relative overflow-hidden">
              {/* Barra superior de ventana tipo Mac/Linux */}
              <div className="flex items-center justify-between border-b border-gray-800 pb-3">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                </div>
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">
                  {project.type}
                </span>
              </div>

              {/* Gráficos simulados dentro de la pantalla */}
              <div className="my-auto space-y-2">
                <div className="flex items-center justify-between text-xs text-emerald-400 font-mono">
                  <span>STATUS: ONLINE</span>
                  <span>{project.metrics}</span>
                </div>
                <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full w-3/4 animate-pulse"></div>
                </div>
                <div className="grid grid-cols-3 gap-2 pt-2">
                  <div className="bg-gray-800/60 p-2 rounded text-[10px] font-mono text-gray-400">CRUD / Activos</div>
                  <div className="bg-gray-800/60 p-2 rounded text-[10px] font-mono text-gray-400">Red Local</div>
                  <div className="bg-gray-800/60 p-2 rounded text-[10px] font-mono text-gray-400">Respaldos</div>
                </div>
              </div>

              {/* Tag flotante */}
              <div className="text-[11px] font-mono text-gray-400">
                app.kibostudio.internal/demo
              </div>
            </div>

            {/* Contenido de la Tarjeta */}
            <div className="p-6 flex flex-col flex-grow justify-between">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-600 block mb-2 font-medium">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Badges de Tecnologías */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-[11px] font-mono bg-gray-100 text-gray-700 px-2.5 py-1 rounded-md">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}