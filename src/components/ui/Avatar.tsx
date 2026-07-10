"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface AvatarProps {
  size: number;
  layoutId?: string;
}

export function Avatar({ size, layoutId }: AvatarProps) {
  return (
    <motion.div
      layoutId={layoutId}
      className="relative rounded-full overflow-hidden border border-black/10"
      style={{ width: size, height: size }}
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      <Image
        src="/avatar-photo.png" // your github pfp, exported/cropped
        alt="Rahini"
        fill
        className="object-cover"
        priority
      />
    </motion.div>
  );
}