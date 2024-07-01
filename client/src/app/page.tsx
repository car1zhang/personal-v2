"use client";

import { motion } from "framer-motion";
import File from "@/components/File";
import Window from "@/components/Window";
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import { useState } from "react";
import HomePage from "@/components/HomePage";
import Draggable from "react-draggable";

export default function Home() {
  const [windowOpen, setWindowOpen] = useState(false);

  return (
    <>
      <MouseParallaxContainer
        className="relative background-black h-screen w-screen overflow-y-auto"
        containerStyle={{
          // @ts-ignore
          "overflow-y": "auto",
        }}
        resetOnLeave
      >
        <div className="h-[800px] w-[800px] absolute left-[calc(50%-250px)] top-[150px] md:h-auto md:w-auto md:left-[calc(50%-280px)] md:top-[calc(50%-120px)]">
          <img src="./grid.png" draggable={false} />
        </div>

        <MouseParallaxChild
          className="absolute h-[600px] w-[600px] left-[calc(50%-310px)] top-[-115px] md:h-auto md:w-auto md:left-[calc(50%-462px)] md:top-[calc(50%-555px)]"
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
          className="absolute left-[calc(50%-90px)] top-[80px] h-[180px] w-[180px] md:h-auto md:w-auto md:left-[calc(50%-160px)] md:top-[calc(50%-260px)]"
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
          className="absolute left-[calc(50%-70px)] top-[200px] h-[200px] w-[200px] md:h-auto md:w-auto md:left-[calc(50%-58px)] md:top-[calc(50%-118px)]"
          factorX={0.005}
          factorY={0.005}
        >
          <img src="./bust.svg" draggable={false} />
        </MouseParallaxChild>

        <MouseParallaxChild
          className="absolute left-[calc(50%-180px)] top-[80px] h-[200px] w-[200px] md:h-auto md:w-auto md:left-[calc(50%+56px)] md:top-[calc(50%-99px)]"
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
          className="absolute left-[calc(50%-100px)] top-[200px] h-[100px] w-[100px] md:h-auto md:left-[calc(50%-93px)] md:top-[calc(50%-112px)]"
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
          className="absolute left-[calc(50%-300px)] top-[calc(50%-150px)] hidden md:block"
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

        <div className="absolute left-[calc(50%-100px)] top-[480px] md:hidden">
          <motion.img src="./name-small.svg" draggable={false}
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
        </div>

        <File setWindowOpen={setWindowOpen} className="absolute left-[calc(50%-125px)] top-[calc(50%+140px)] hidden md:block" />

        <HomePage className="md:hidden p-6 pb-12 absolute top-[560px]" />

        {windowOpen ?
          <Window setWindowOpen={setWindowOpen} className="hidden md:block" />
          : <></>}
      </MouseParallaxContainer>
    </>
  );
}
