import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { layers } from "../data";

// Cada anillo gira a una velocidad distinta según el scroll
function Ring({ index }: { index: number }) {
  const { scrollY } = useScroll();
  const direction = index % 2 === 0 ? 1 : -1;
  const raw = useTransform(scrollY, (v) => v * 0.05 * direction * (index + 1));
  const rotate = useSpring(raw, { stiffness: 60, damping: 18 });

  return <motion.div className="ring" style={{ rotate, inset: `${index * 12}%` }} />;
}

export function LayeredRings() {
  return (
    <div className="layered">
      <motion.div
        className="rings-float"
        aria-hidden="true"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="rings">
          {layers.map((_, i) => (
            <Ring key={i} index={i} />
          ))}
          <span className="core" />
        </div>
      </motion.div>

      <ol className="layer-legend">
        {layers.map((layer) => (
          <li key={layer.label}>
            <strong>{layer.label}</strong>
            <span>{layer.note}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
