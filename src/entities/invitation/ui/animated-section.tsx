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
      y: 60,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <motion.div
      style={{ width: '100%' }}
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: true, amount: 1, margin, root: scrollRef }}
      onViewportEnter={onViewportEnter}
      onViewportLeave={onViewportLeave}
    >
      <motion.div style={{ width: '100%' }} variants={scrollVariants}>
        {children}
      </motion.div>
    </motion.div>
  );
}
