"use client";
import React from "react";
import { BackgroundBeams } from "../ui/BackgroundBeams";
import { TypewriterEffectSmooth } from "../ui/type-writter";
import Circle from "../absolute/circle";

const HeroBackground = () => {

  const words = [
    {
      text: "Greetings!",
      className: 'text-black dark:text-white'
    },
    {
      text: "I'm",
      className: 'text-black dark:text-white'
    },
    {
      text: "shaik",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Irfan",
      className: "text-blue-500 dark:text-blue-500",
    },
  ]

  return (
    <div className="h-screen w-full justify-start relative flex antialiased px-16">
      <Circle />

      <div className="absolute text-8xl md:text-[220px] top-20 md:top-20 md:left-[20%] font-extrabold text-neutral-100/70 dark:text-neutral-950/70">
        Shaik
      </div>
      <div className="absolute bottom-[500px] md:bottom-40 right-[5%] md:right-[20%] text-8xl md:text-[220px] font-extrabold text-neutral-100/70 dark:text-neutral-950/70">
        Irfan
      </div>
      
      <div className="p-4 h-full w-full max-w-4xl flex flex-col justify-center z-[1]">
        <TypewriterEffectSmooth words={words} cursorClassName={"bg-blue-500 dark:bg-blue-500"} />
        <div className="ml-2 -mt-4 text-xs md:text-sm">
        <p>A Full-Stack Developer based in Hyderabad, India.</p>
        <p className="max-w-xl">I enjoy working on every aspect of web development, from the user interface to the server logic.</p>
        </div>
      </div>
      
       
      
      <div className="h-full absolute w-px bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-600 via-blue-600 to-transparent ">

      </div>

      <BackgroundBeams />
    </div>
  );
}
export default HeroBackground
