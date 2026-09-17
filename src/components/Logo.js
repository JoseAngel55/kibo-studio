export default function Logo({ className = "h-7 w-auto" }) {
  return (
    <div className="flex items-center gap-2.5">
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <rect width="32" height="32" rx="7" className="fill-gray-900" />
        {/* Trazo de la K con toque esmeralda */}
        <path
          d="M10 8V24M10 16L20 8M10 16L20 24"
          stroke="white"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Punto de acento verde brillante */}
        <circle cx="20" cy="8" r="2.5" className="fill-emerald-400" />
      </svg>

      <span className="font-semibold text-lg tracking-tight text-gray-900">
        Kibo<span className="text-emerald-600 font-medium">Studio</span>
      </span>
    </div>
  );
}