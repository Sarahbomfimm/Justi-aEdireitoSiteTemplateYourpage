import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Heart, Users, Sparkles, TrendingUp } from "lucide-react";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const features = [
    {
      icon: Heart,
      title: "Cuidado Humanizado",
      description: "Atendimento personalizado focado no bem-estar integral de cada paciente",
    },
    {
      icon: Sparkles,
      title: "Tecnologia de Ponta",
      description: "Equipamentos de última geração para diagnósticos precisos e tratamentos eficazes",
    },
    {
      icon: Users,
      title: "Equipe Multidisciplinar",
      description: "Especialistas altamente qualificados trabalhando de forma integrada",
    },
    {
      icon: TrendingUp,
      title: "Resultados Comprovados",
      description: "Excelência reconhecida com altos índices de satisfação e recuperação",
    },
  ];

  return (
    <section id="sobre" ref={ref} className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1766299892683-d50398e31823?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVjaG5vbG9neSUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NzA4NjQxNDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Tecnologia Médica"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1766310550061-7cd0900f7c76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVhbSUyMHByb2Zlc3Npb25hbHN8ZW58MXx8fHwxNzcwODU3MTgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Equipe Médica"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1755189118414-14c8dacdb082?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkb2N0b3IlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzA5MDEwODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Médico Especialista"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1632054226752-b1b40867f7a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkb2N0b3IlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzcwOTUzMTAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Médica Especialista"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm">
                Sobre Nós
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl lg:text-5xl mb-6"
            >
              Referência em{" "}
              <span className="text-primary">excelência médica</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-muted-foreground mb-12 leading-relaxed"
            >
              Há mais de duas décadas, a Vita Medical se dedica a oferecer
              serviços médicos de excelência. Nossa missão é proporcionar
              cuidados personalizados e humanizados, aliando tecnologia de ponta
              à experiência de profissionais altamente capacitados.
            </motion.p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-xl transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
