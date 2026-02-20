import { Moon, Sun, Calendar } from "lucide-react";
import { motion } from "motion/react";

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
  onBookClick: () => void;
}

export function Header({ isDark, toggleTheme, onBookClick }: HeaderProps) {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <svg
                className="w-6 h-6 text-primary-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-xl tracking-tight">Vita Medical</h1>
              <p className="text-xs text-muted-foreground">Centro de Excelência</p>
            </div>
          </motion.div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {["Início", "Sobre", "Serviços", "Especialistas", "Depoimentos"].map(
              (item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </motion.a>
              )
            )}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
              aria-label="Alternar tema"
            >
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 8px 24px rgba(10, 74, 110, 0.25)" }}
              whileTap={{ scale: 0.95 }}
              onClick={onBookClick}
              className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-all shadow-lg"
            >
              <Calendar className="w-4 h-4" />
              <span className="hidden sm:inline">Agendar Consulta</span>
              <span className="sm:hidden">Agendar</span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
