export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Levantamiento & Análisis",
      description: "Nos reunimos para entender las necesidades reales de tu negocio. Definimos el alcance exacto, los módulos requeridos y la infraestructura adecuada."
    },
    {
      number: "02",
      title: "Arquitectura & Desarrollo",
      description: "Diseñamos la estructura de la base de datos y desarrollamos el sitio o sistema con código limpio, seguro y optimizado para una alta velocidad."
    },
    {
      number: "03",
      title: "Despliegue & Pruebas",
      description: "Instalamos la aplicación en servidores locales o en la nube (Vercel/Render), realizando pruebas de seguridad, rendimiento y adaptabilidad en móviles."
    },
    {
      number: "04",
      title: "Capacitación & Soporte",
      description: "Entregamos la solución lista para operar, capacitamos a tu personal y ofrecemos seguimiento continuo con respaldos y mantenimiento preventivo."
    }
  ];

  return (
    <section id="proceso" className="py-20 max-w-5xl mx-auto px-6">
      <div className="mb-14">
        <span className="text-xs font-mono uppercase tracking-widest text-emerald-600 font-semibold mb-2 block">
          Metodología
        </span>
        <h2 className="text-3xl font-semibold text-gray-900 tracking-tight">¿Cómo trabajamos?</h2>
        <p className="text-gray-600 text-sm mt-2 max-w-xl">
          Un proceso claro y transparente diseñado para entregar soluciones digitales sin sorpresas ni retrasos.
        </p>
      </div>

      {/* Grid de pasos estructurados */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <div 
            key={index}
            className="bg-white p-6 rounded-xl border border-gray-200/80 shadow-xs flex flex-col justify-between relative"
          >
            <div>
              <span className="text-2xl font-mono font-semibold text-emerald-600/40 block mb-4">
                {step.number}
              </span>
              <h3 className="text-base font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-xs leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Garantía / Compromiso técnico */}
      <div className="mt-12 p-6 rounded-xl bg-gray-50 border border-gray-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-sm font-semibold text-gray-900">¿Tienes dudas sobre los requerimientos de tu proyecto?</h4>
          <p className="text-xs text-gray-600 mt-0.5">Te orientamos sin compromiso sobre la mejor opción tecnológica para tu empresa.</p>
        </div>
        <a
          href="https://wa.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="whitespace-nowrap text-xs font-semibold bg-gray-900 text-white px-4 py-2.5 rounded-lg hover:bg-gray-800 transition-colors"
        >
          Consultar por WhatsApp
        </a>
      </div>
    </section>
  );
}