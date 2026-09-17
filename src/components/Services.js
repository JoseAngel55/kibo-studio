export default function Services() {
  const services = [
    {
      title: "Sitios Web & Landing Pages",
      description: "Páginas web corporativas de carga ultra rápida, adaptadas a dispositivos móviles y optimizadas para transmitir credibilidad y captar clientes.",
      tag: "Presencia Digital",
      highlight: false
    },
    {
      title: "Sistemas & Software a Medida",
      description: "Desarrollo de paneles de administración, gestión de inventarios, control de piezas/activos y herramientas internas según las necesidades exactas de tu empresa.",
      tag: "Desarrollo Web",
      highlight: true // Tarjeta destacada con color
    },
    {
      title: "Infraestructura & Soporte",
      description: "Montaje de servidores locales, configuración de bases de datos, políticas de respaldos continuos y mantenimiento técnico para mantener tus sistemas seguros.",
      tag: "Servicios Técnicos",
      highlight: false
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gray-50/80 border-y border-gray-200/80">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-600 font-semibold mb-2 block">
            Especialidades
          </span>
          <h2 className="text-3xl font-semibold text-gray-900 tracking-tight">Servicios que ofrecemos</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((item, index) => (
            <div 
              key={index} 
              className={`bg-white p-7 rounded-xl border transition-all ${
                item.highlight 
                  ? "border-emerald-500 shadow-md shadow-emerald-500/5 ring-1 ring-emerald-500/20" 
                  : "border-gray-200/80 shadow-xs hover:border-gray-300"
              }`}
            >
              <span className={`text-[11px] font-mono uppercase tracking-wider block mb-4 font-medium ${
                item.highlight ? "text-emerald-600" : "text-gray-400"
              }`}>
                {item.tag}
              </span>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}