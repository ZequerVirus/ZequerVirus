import { motion, MotionConfig, useScroll, useSpring } from "framer-motion";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Dock } from "./components/Dock";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Philosophy } from "./components/Philosophy";
import { ScrollBackground } from "./components/ScrollBackground";
import { Skills } from "./components/Skills";
import { Stack } from "./components/Stack";
import { useTheme } from "./hooks/useTheme";

export function App() {
  const { theme, toggle } = useTheme();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <MotionConfig reducedMotion="user">
      <ScrollBackground theme={theme} />
      <motion.div className="scroll-progress" style={{ scaleX: progress }} aria-hidden="true" />

      <Navbar theme={theme} onToggleTheme={toggle} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Stack />
        <Philosophy />
        <Contact />
      </main>

      <Footer />
      <Dock />
    </MotionConfig>
  );
}
