import Logo from "./Logo";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <Logo />
        </a>

        <nav className="flex items-center gap-6">
          <a href="#servicios" className="text-sm text-gray-600 hover:text-gray-900 transition-colors hidden sm:inline-block">
            Servicios
          </a>
          {/* Cambiamos Proyectos por Proceso */}
          <a href="#proceso" className="text-sm text-gray-600 hover:text-gray-900 transition-colors hidden sm:inline-block">
            Proceso
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61594691480083"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium uppercase tracking-wider bg-gray-900 text-white px-4 py-2.5 rounded-md hover:bg-gray-800 transition-colors"
          >
            Contáctanos
          </a>
        </nav>
      </div>
    </header>
  );
}