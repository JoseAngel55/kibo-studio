import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import About from "@/components/About"; // Importamos About

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <About />
      </main>
      
      <footer className="py-12 max-w-5xl mx-auto px-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-4">
        <p>© {new Date().getFullYear()} Kibo Studio. Desarrollo de Software & Infraestructura.</p>
        <p className="font-mono">Construido con Next.js & Tailwind CSS</p>
      </footer>
    </div>
  );
}