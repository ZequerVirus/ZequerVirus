import { motion, useScroll, useTransform } from "framer-motion";

// Manchas de color suaves que se desplazan lentamente con el scroll
export function Aurora() {
  const { scrollYProgress } = useScroll();
  const down = useTransform(scrollYProgress, [0, 1], ["0%", "45%"]);
  const up = useTransform(scrollYProgress, [0, 1], ["0%", "-35%"]);

  return (
    <div className="aurora" aria-hidden="true">
      <motion.span className="aurora-blob blob-violet" style={{ y: down }} />
      <motion.span className="aurora-blob blob-teal" style={{ y: up }} />
      <motion.span className="aurora-blob blob-rose" style={{ y: down }} />
    </div>
  );
}
