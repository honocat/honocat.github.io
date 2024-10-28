"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ImageStyleProps {
  src: string;
}

export function ImageStyle({ src }: ImageStyleProps): JSX.Element {
  return (
    <motion.div
      className="aspect-video relative overflow-hidden"
      whileHover={{ scale: 1.05, transition: { duration: 0.25 } }}
      whileTap={{ scale: 0.95, transition: { duration: 0.25 } }}
    >
      <Image src={src} fill className="object-cover rounded-2xl" alt="" />
    </motion.div>
  );
}
