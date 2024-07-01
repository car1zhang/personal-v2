import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

export default function File(
  { setWindowOpen, className }
  : 
  {
    setWindowOpen: (arg: boolean) => void;
    className: string;
  }
) {
  return (
    <button className={clsx("cursor-pointer p-1 focus:bg-highlight/50 focus:border-highlight hover:bg-highlight/50 hover:border-highlight border border-dotted border-highlight/0 ", className)}>
      <motion.img
        src="file.svg"
        draggable={false}
        initial={{ 
          opacity: 0,
          display: "none",
        }}
        animate={{ 
          opacity: 1,
          display: "block",
        }}
        transition={{ delay: 0.8, duration: 0.5 }}
        onClick={() => {
          setWindowOpen(true);
        }}
      />
    </button>
  )
}