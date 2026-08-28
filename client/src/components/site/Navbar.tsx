import { useState, useEffect } from "react";
import { Menu, X, Search, ChevronDown } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  {
    label: "Nosotros",
    href: "#sobre-nosotros",
    children: [
      { label: "Sobre Nosotros", href: "#sobre-nosotros" },
      { label: "Nuestra Misión", href: "#mision" },
      { label: "Equipo", href: "#equipo" },
    ],
  },
  {
    label: "Obras",
    href: "#obras",
    children: [
      { label: "Histórico", href: "#obras" },
      { label: "Proyecto del Año", href: "#proyecto" },
    ],
  },
  {
    label: "Formación",
    href: "#formacion",
    children: [
      { label: "Sobre el Escenario", href: "#formacion" },
      { label: "Detrás de Escena", href: "#formacion" },
      { label: "Formación integral", href: "#conduccion" },
    ],
  },
  {
    label: "Elenco",
    href: "#actores",
    children: [
      { label: "Actores", href: "#actores" },
      { label: "Equipo Creativo", href: "#equipo" },
    ],
  },
  {
    label: "Teatro",
    href: "#teatro",
    children: [
      { label: "Agenda", href: "#teatro" },
      { label: "Alquiler de Sala", href: "#teatro" },
    ],
  },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(() =>
    typeof window !== "undefined" ? window.scrollY > 40 : false
  );
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Simple in-page search: find matching section
      const sections = document.querySelectorAll("section[id]");
      const query = searchQuery.toLowerCase();
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const text = section.textContent?.toLowerCase() || "";
        if (text.includes(query)) {
          section.scrollIntoView({ behavior: "smooth" });
          break;
        }
      }
    }
    setSearchOpen(false);
    setSearchQuery("");
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileOpen || searchOpen
            ? "bg-theater-black/95 backdrop-blur-md shadow-lg shadow-black/50"
            : "bg-gradient-to-b from-black/70 to-transparent"
        }`}
      >
        <nav className="container flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#inicio"
            className="flex items-center gap-2 md:gap-3 group"
            onClick={() => setMobileOpen(false)}
          >
            <img
              src="/manus-storage/logo-en-mangas_9a6d9062.jpg"
              alt="Logo En Mangas de Camisa"
              className="h-10 w-10 md:h-12 md:w-12 transition-transform duration-300 group-hover:scale-110"
            />
            <div className="hidden sm:block">
              <span className="font-display font-bold text-white text-sm md:text-base tracking-wider uppercase leading-tight">
                En Mangas de Camisa
              </span>
            </div>
          </a>

          {/* Salesianos logo desktop */}
          <div className="hidden lg:flex items-center gap-2 px-4 border-l border-white/20">
            <img
              src="/manus-storage/logo-salesianos_9f4cdeee.webp"
              alt="Salesianos Don Bosco Ramos Mejía"
              className="h-8 w-8 transition-transform duration-300 hover:scale-110"
            />
            <span className="font-body text-white/60 text-xs uppercase tracking-wider">Ramos Mejía</span>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a
                  href={item.href}
                  className="flex items-center gap-1 px-4 py-2 text-white/90 hover:text-theater-red font-body text-sm font-medium transition-colors duration-200"
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown className="h-3.5 w-3.5 opacity-60" />
                  )}
                </a>
                {/* Dropdown */}
                {item.children && openDropdown === item.label && (
                  <ul
                    className="absolute top-full left-0 min-w-[220px] bg-theater-dark border border-white/10 rounded-md shadow-xl shadow-black/50 overflow-hidden"
                    style={{
                      animation: "dropdownIn 0.2s cubic-bezier(0.23, 1, 0.32, 1)",
                      transformOrigin: "top",
                    }}
                  >
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <a
                          href={child.href}
                          className="block px-4 py-3 text-white/80 hover:text-theater-red hover:bg-white/5 font-body text-sm transition-colors duration-150"
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-white/90 hover:text-theater-red transition-colors duration-200"
              aria-label="Buscar"
            >
              <Search className="h-5 w-5" />
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-white"
              aria-label="Menú"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        {/* Search bar */}
        {searchOpen && (
          <div className="container py-3 bg-theater-black/95 backdrop-blur-md border-t border-white/10">
            <form onSubmit={handleSearch} className="flex gap-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar en el sitio..."
                autoFocus
                className="flex-1 bg-white/10 text-white placeholder-white/40 border border-white/20 rounded-md px-4 py-2 font-body text-sm focus:outline-none focus:border-theater-red"
              />
              <button
                type="submit"
                className="bg-theater-red text-white px-4 py-2 rounded-md font-body text-sm font-medium btn-elevate"
              >
                Buscar
              </button>
            </form>
          </div>
        )}
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-theater-black/98 backdrop-blur-lg lg:hidden overflow-y-auto"
          style={{ animation: "fadeIn 0.25s ease-out" }}
        >
          <div className="container pt-24 pb-12">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.label} className="border-b border-white/10">
                  <div className="flex items-center justify-between">
                    <a
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex-1 py-4 text-white font-display text-xl font-medium uppercase tracking-wide hover:text-theater-red transition-colors"
                    >
                      {item.label}
                    </a>
                    {item.children && (
                      <button
                        onClick={() =>
                          setMobileExpanded(
                            mobileExpanded === item.label ? null : item.label
                          )
                        }
                        className="p-2 text-white/60"
                      >
                        <ChevronDown
                          className={`h-5 w-5 transition-transform duration-200 ${
                            mobileExpanded === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>
                  {item.children && mobileExpanded === item.label && (
                    <ul className="pb-3 pl-4 space-y-1">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <a
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="block py-2 text-white/70 hover:text-theater-red font-body text-sm transition-colors"
                          >
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <style>{`
        @keyframes dropdownIn {
          from { opacity: 0; transform: scaleY(0.9); }
          to { opacity: 1; transform: scaleY(1); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </>
  );
}
