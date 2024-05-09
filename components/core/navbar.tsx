"use client";
import React, { useState } from "react";
import { HiBriefcase, HiHome, HiIdentification, HiQuestionMarkCircle } from "react-icons/hi";

import { SiDocsify } from "react-icons/si";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils";
import { NavTooltip } from "../ui/nav-tooltip";
import { RiMoonFoggyFill, RiSunFoggyFill } from "react-icons/ri";
 
const NavItems = [
  {
    id: 1,
    title: "Home",
    href: '/home',
    image:
    <HiHome className="h-5 w-5  text-black hover:text-black dark:text-white hover:-translate-y-1 transition-transform duration-300 ease-in-out" />
  },

  {
    id: 2,
    title: "About",
    href: '/about',
    image:
    <HiQuestionMarkCircle className="h-5 w-5  text-black hover:text-black dark:text-white hover:-translate-y-1 transition-transform duration-300 ease-in-out" />
  },
  {
    id: 3,
    title: "Projects",
    href: '/projects',
    image:
    <HiBriefcase className="h-5 w-5  text-black hover:text-black dark:text-white hover:-translate-y-1 transition-transform duration-300 ease-in-out" />
  },
  
  {
    id: 4,
    title: "Contact",
    href: "/contact",
    image:
    <HiIdentification className="h-5 w-5  text-black hover:text-black dark:text-white hover:-translate-y-1 transition-transform duration-300 ease-in-out" />,
  },
  {
    id: 5,
    title: "More",
    href: '/more',
    image:
    <SiDocsify className="h-5 w-5  text-black hover:text-black dark:text-white hover:-translate-y-1 transition-transform duration-300 ease-in-out" />
  },
 
 
];

const Navbar = () => {
  const { setTheme } = useTheme()
  const { scrollYProgress } = useScroll();
 
  const [visible, setVisible] = useState(false);
 
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;
 
      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });
 
  return (
    <AnimatePresence mode="wait">
    <motion.div
      initial={{
        scale: 0,
        opacity: 1,
        y: -100,
      }}

      animate={{
        y: visible ? 0 : -150,
        opacity: visible ? 1 : 0,
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 200,
          damping: 10
        },
      }}
      transition={{
        duration: 0.8,
      }}
      className={cn(
        "flex max-w-fit z-[9999999999999] fixed top-8 right-16 md:right-48 border border-transparent dark:border-white/[0.2] rounded-full dark:bg-transparent backdrop-blur-[2px] py-3  px-6 pr-7 bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-4",
      )}
    >
      <NavTooltip items={NavItems} />
      <RiSunFoggyFill className="absolute -right-12 h-10 w-10 hover:bg-neutral-900 rounded-2xl p-2 scale-0 dark:scale-100 transition-transform duration-500 ease-in-out"
      onClick={() => setTheme('light')}
      />
      <RiMoonFoggyFill className="absolute -right-12 h-10 w-10 hover:bg-neutral-200 rounded-2xl p-2 scale-100 dark:scale-0 transition-transform duration-500 ease-in-out"
      onClick={() => setTheme('dark')}
      />      
    </motion.div>
  </AnimatePresence>
  )
}

export default Navbar
