import { motion } from "framer-motion";

const NeptuneFooter = () => {
  return (
    <footer className="relative py-16 px-6 border-t border-border/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold text-gradient-neptune mb-2">Neptune</h3>
          <p className="text-muted-foreground text-sm">
            Exploring the mysteries of our solar system's most distant giant.
          </p>
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span>Made with wonder</span>
            <span className="text-primary">✦</span>
            <span>Inspired by the cosmos</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default NeptuneFooter;
