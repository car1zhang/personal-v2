"use client";

import { motion } from "framer-motion";
import File from "@/components/File";
import Window from "@/components/Window";
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import { useState } from "react";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import HomePage from "@/components/HomePage";

export default function Home() {
  const [windowOpen, setWindowOpen] = useState(false);

  const {height, width} = useWindowDimensions();

  return (width > 1024 ?

    <MouseParallaxContainer
      className="relative background-black overflow-clip h-screen w-screen"
      resetOnLeave
    >
      <img src="./grid.png" draggable={false} className="absolute left-[calc(50%-280px)] top-[calc(50%-120px)]" />

      <MouseParallaxChild
        className="absolute left-[calc(50%-462px)] top-[calc(50%-555px)]"
        factorX={0.005}
        factorY={0.005}
      >
        <motion.img
          src="./glow.svg"
          draggable={false}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      </MouseParallaxChild>

      <MouseParallaxChild
        className="absolute left-[calc(50%-160px)] top-[calc(50%-260px)]"
        factorX={0.005}
        factorY={0.005}
      >
        <motion.img src="./sun.svg" draggable={false}
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 0.5 }}
        />
      </MouseParallaxChild>

      <MouseParallaxChild
        className="absolute left-[calc(50%-58px)] top-[calc(50%-118px)]"
        factorX={0.005}
        factorY={0.005}
      >
        <img src="./bust.svg" draggable={false} />
      </MouseParallaxChild>

      <MouseParallaxChild
        className="absolute left-[calc(50%+56px)] top-[calc(50%-99px)]"
        factorX={-0.005}
        factorY={-0.005}
      >
        <motion.img src="./cloud.svg" draggable={false}
          initial={{
            x: -50,
            scale: 0.7,
            opacity: 0,
          }}
          animate={{
            x: 0,
            scale: 1,
            opacity: 1,
          }}
          transition={{
            delay: 0.4,
            duration: 0.5,
          }}
        />
      </MouseParallaxChild>

      <MouseParallaxChild
        className="absolute left-[calc(50%-93px)] top-[calc(50%-112px)]"
        factorX={0.01}
        factorY={0.01}
      >
        <motion.img src="./blossom.svg" draggable={false}
          initial={{
            scale: 0.8,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            delay: 0.2,
            duration: 0.5,
          }}
        />
      </MouseParallaxChild>

      <MouseParallaxChild
        className="absolute left-[calc(50%-300px)] top-[calc(50%-150px)]"
        factorX={-0.005}
        factorY={-0.005}
      >
      <motion.img src="./name.svg" draggable={false}
        initial={{
          opacity: 0,
          y: -20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.6,
          duration: 0.5
        }}
      />
      </MouseParallaxChild>
      <File setWindowOpen={setWindowOpen} className="absolute left-[calc(50%-125px)] top-[calc(50%+140px)]" />
      
      {windowOpen ? 
        <Window setWindowOpen={setWindowOpen} className="absolute left-[calc(50%-500px)] top-[calc(50%-180px)]" />
      : <></>}
    </MouseParallaxContainer>

    :

    <HomePage className="p-4 md:w-1/2" />
  );
}
