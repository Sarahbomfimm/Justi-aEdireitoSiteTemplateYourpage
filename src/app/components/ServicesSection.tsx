import { motion, useInView } from "motion/react";
import { useRef } from "react";
import {
  Stethoscope,
  Heart,
  Brain,
  Baby,
  Eye,
  Bone,
  Activity,
  Smile,
  Microscope,
  Pill,
  UserPlus,
  Dna,
} from "lucide-react";

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const services = [
    {
      icon: Stethoscope,
      title: "Clínica Geral",
      description: "Atendimento completo para cuidados preventivos e tratamento de doenças comuns",
      color: "from-blue-500/10 to-cyan-500/10",
    },
    {
      icon: Heart,
      title: "Cardiologia",
      description: "Diagnóstico e tratamento de doenças cardiovasculares com tecnologia avançada",
      color: "from-red-500/10 to-pink-500/10",
    },
    {
      icon: Brain,
      title: "Neurologia",
      description: "Especialistas em distúrbios do sistema nervoso e tratamentos neurológicos",
      color: "from-purple-500/10 to-indigo-500/10",
    },
    {
      icon: Baby,
      title: "Pediatria",
      description: "Cuidados especializados para o desenvolvimento saudável das crianças",
      color: "from-green-500/10 to-emerald-500/10",
    },
    {
      icon: Eye,
      title: "Oftalmologia",
      description: "Cuidados completos para a saúde dos seus olhos e visão",
      color: "from-cyan-500/10 to-blue-500/10",
    },
    {
      icon: Bone,
      title: "Ortopedia",
      description: "Tratamento de lesões e doenças do sistema musculoesquelético",
      color: "from-orange-500/10 to-amber-500/10",
    },
    {
      icon: Activity,
      title: "Check-up Completo",
      description: "Avaliação médica completa com exames laboratoriais e de imagem",
      color: "from-teal-500/10 to-green-500/10",
    },
    {
      icon: Smile,
      title: "Dermatologia",
      description: "Tratamentos estéticos e clínicos para a saúde da sua pele",
      color: "from-pink-500/10 to-rose-500/10",
    },
    {
      icon: Microscope,
      title: "Laboratório",
      description: "Exames laboratoriais com resultados rápidos e precisos",
      color: "from-indigo-500/10 to-purple-500/10",
    },
    {
      icon: Pill,
      title: "Farmácia Clínica",
      description: "Orientação farmacêutica e medicamentos de qualidade",
      color: "from-emerald-500/10 to-teal-500/10",
    },
    {
      icon: UserPlus,
      title: "Medicina Preventiva",
      description: "Programas personalizados para manutenção da sua saúde",
      color: "from-blue-500/10 to-indigo-500/10",
    },
    {
      icon: Dna,
      title: "Genética Médica",
      description: "Avaliação genética e aconselhamento personalizado",
      color: "from-violet-500/10 to-purple-500/10",
    },
  ];

  return (
    <section id="servicos" ref={ref} className="py-32 bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6"
          >
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm">
              Nossos Serviços
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-5xl mb-6"
          >
            Atendimento completo para sua{" "}
            <span className="text-primary">saúde</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Oferecemos uma ampla gama de especialidades médicas com
            profissionais altamente qualificados e infraestrutura moderna.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="group relative"
            >
              <div className="h-full p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-2xl transition-all duration-300">
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors"
                  >
                    <service.icon className="w-7 h-7 text-primary" />
                  </motion.div>

                  <h3 className="text-xl mb-3">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                    className="h-1 bg-primary rounded-full mt-6"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Não encontrou o que procura? Entre em contato conosco.
          </p>
          <motion.a
            href="#agendamento"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl shadow-lg hover:shadow-xl transition-all"
          >
            Fale com um Especialista
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
