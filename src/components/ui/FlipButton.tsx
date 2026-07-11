import { useState } from 'react'
import { motion } from 'framer-motion'

interface FlipButtonProps {
  type?: "button" | "submit";
  idleText: string;
  loadingText: string;
  isPending: boolean;
}

export function FlipButton({
    isPending,
    idleText,
    loadingText,
}: FlipButtonProps) {
  const flipVariants = {
    one: {
      rotateX: 0,
      backgroundColor: '#7595caff',
      color: '#ffffff',
    },
    two: {
      rotateX: 180,
      backgroundColor: '#f4f4f5',
      color: '#18181b',
    },
  }

  return (
      <div className="w-full max-w-[270px]">
        <motion.button
          className="w-full cursor-pointer px-6 py-3 font-medium"
          type = "submit"
          style={{
            borderRadius: 999,
          }}
          animate={isPending ? "two" : "one"}
          variants={flipVariants}
          disabled={isPending}
          transition={{ duration: 0.6, type: 'spring' }}
          whileHover={!isPending ? { scale: 1.05 } : {}}
          whileTap={!isPending ? { scale: 0.95 } : {}}
        >
          <motion.div
            animate={{ rotateX: isPending ? 180 : 0 }}
            transition={{ duration: 0.6, type: 'spring' }}
          >
            {isPending ? idleText : loadingText}
          </motion.div>
          <motion.div
            animate={{ rotateX: isPending ? 0 : -180 }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="absolute inset-0"
          ></motion.div>
        </motion.button>
      </div>
  );
};