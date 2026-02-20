import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { ArrowRight, Shield, Award, Clock } from "lucide-react";

interface HeroSectionProps {
  onBookClick: () => void;
}

export function HeroSection({ onBookClick }: HeroSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 via-background to-accent/20" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm backdrop-blur-sm border border-primary/20">
                🏥 Centro de Excelência Médica
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-5xl lg:text-7xl mb-6 tracking-tight"
            >
              Cuidado que{" "}
              <span className="text-primary relative inline-block">
                transforma
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="12"
                  viewBox="0 0 200 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 9C40 3 160 3 198 9"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="text-primary/30"
                  />
                </svg>
              </span>{" "}
              vidas
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl"
            >
              Excelência médica aliada à tecnologia de ponta. Nossa equipe
              multidisciplinar está pronta para oferecer o melhor cuidado
              personalizado para você.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 12px 32px rgba(10, 74, 110, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                onClick={onBookClick}
                className="group flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-xl shadow-xl hover:shadow-2xl transition-all"
              >
                <span className="text-lg">Agendar Consulta</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.a
                href="#sobre"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-8 py-4 border-2 border-border rounded-xl hover:bg-secondary/50 transition-all"
              >
                <span className="text-lg">Conheça Nossa Clínica</span>
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border"
            >
              {[
                { icon: Shield, label: "Anos de Experiência", value: "20+" },
                { icon: Award, label: "Especialistas", value: "50+" },
                { icon: Clock, label: "Atendimento 24/7", value: "100%" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <div className="text-2xl mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1762625570087-6d98fca29531?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtZWRpY2FsJTIwY2xpbmljJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcwOTUzMDk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Clínica Moderna"
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
            
            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-8 -left-8 bg-card p-6 rounded-2xl shadow-2xl border border-border backdrop-blur-sm"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl">⭐</span>
                </div>
                <div>
                  <div className="text-2xl mb-1">4.9/5.0</div>
                  <div className="text-sm text-muted-foreground">Avaliação dos Pacientes</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
