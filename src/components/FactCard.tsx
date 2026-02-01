import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FactCardProps {
  icon: ReactNode;
  title: string;
  value: string;
  description: string;
  index: number;
}

const FactCard = ({ icon, title, value, description, index }: FactCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative p-8 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-500"
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary/20 transition-colors duration-300">
          {icon}
        </div>
        <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">{title}</p>
        <p className="text-3xl font-bold text-gradient-neptune mb-2">{value}</p>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export default FactCard;
