import { motion, Variants } from 'framer-motion';
import { ReactNode, RefObject } from 'react';

export function AnimatedSection({
  scrollRef,
  margin,
  onViewportEnter,
  onViewportLeave,
  children,
}: {
  scrollRef?: RefObject<HTMLDivElement>;
  margin?: string;
  onViewportEnter?: (entry: any) => void;
  onViewportLeave?: (entry: any) => void;
  children: ReactNode;
}) {
  const scrollVariants: Variants = {
    offscreen: {
      y: 100,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <motion.div
      style={{ width: '100%' }}
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: true, amount: 0.8, margin, root: scrollRef }}
      onViewportEnter={onViewportEnter}
      onViewportLeave={onViewportLeave}
    >
      <motion.div style={{ width: '100%' }} variants={scrollVariants}>
        {children}
      </motion.div>
    </motion.div>
  );
}
