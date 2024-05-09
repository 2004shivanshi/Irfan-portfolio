'use client'
// import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Lottie from "lottie-react";
import lottie from "@/public/Thinking.json";
import lottieDark from "@/public/dark33.json";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import { useTheme } from "next-themes"
import Link from "next/link";

// import Gift from "./Gift";

const LitteAbout = () => {
  let [isOpen, setIsOpen] = useState(false);
 const { theme } = useTheme()
 console.log(theme)
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      className=" h-auto -z-50 sticky top-0 md:h-auto w-full max-w-6xl aspect-square md:aspect-[11/5] bg-white dark:bg-black flex flex-col md:flex-row items-center md:justify-between mx-auto border-2 rounded-3xl border-blue-500 dark:border-blue-500 overflow-hidden"
    >
      <Lottie
        animationData={ theme === 'light' ? lottie : lottieDark}
        loop={true}
        className="w-[400px] min-w-[400px] lg:w-[600px]  lg:min-w-[540px] bg-transparent dark:bg-black"
      />
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        // viewport={{ once: false, amount: 0.7 }}
        className="font-nunito text-black dark:text-white"
      >
        <p className="  font-semibold text-sm md:text-base lg:text-3xl px-20">
          Passionate about problem-solving, Crafting innovative web UI/UX,
          
          <span className=" font-normal">
           collaborating on open-source and connecting with fellow enthusiasts.
          </span>
        </p>
        <div className="font-nunito mt-2 px-20">
          <Link href={'/about'} className="text-sm hover:underline bg-blue-500 rounded-md text-white p-1"> 
          
           Know more about me</Link> <span className="text-sm"> or checkout my resume </span>
          <p
            onClick={openModal}
            className="text-green-500 font-bold mt-1 hover:bg-green-500/30  hover:px-5 cursor-pointer py-3 rounded-xl w-fit transition-all duration-500"
          >
            RESUME
          </p>
        </div>

      </motion.div>
    </motion.div>
  );
};

export default LitteAbout;
