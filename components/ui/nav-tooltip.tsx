"use client";
import Image from "next/image";
import React, { ReactElement, useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Link from "next/link";

export const NavTooltip = ({
  items,
}: {
  items: {
    id: number;
    title: string;
    href: string;
    image: React.ReactNode;
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );
  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  return (
    <>
   <div className="flex gap-6 items-center justify-center">

   
      {items.map((item, idx) => (
        <div
          className=" relative group"
          key={item.title}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="wait">
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-9 -left-4 flex text-xs  flex-col items-center justify-center rounded-md bg-transparent backdrop-blur-[2px] z-50 shadow-xl px-4 py-1"
              >
                <div className="absolute  z-30 w-[100%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px " />
                <div className="absolute w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
                <div className="font-bold text-black dark:text-white relative z-30 text-xs">
                  {item.title}
                </div>
                {/* <div className="text-white text-xs">{item.href}</div> */}
              </motion.div>
            )}
          </AnimatePresence>
          <Link href={item.href}
          className=""
          >
          {item.image}
          </Link>
  
        </div>
      ))}
</div>
    </>
  );
};
