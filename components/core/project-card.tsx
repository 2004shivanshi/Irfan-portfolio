import React from 'react'
import { BsFillExclamationCircleFill, BsFillExclamationDiamondFill, BsGithub } from "react-icons/bs";
import { DiGithub } from "react-icons/di";
import { FaExternalLinkAlt, FaGithub, FaGithubAlt, FaGithubSquare } from "react-icons/fa";
import { FcLink } from "react-icons/fc";
import { PiGithubLogo } from "react-icons/pi";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const ProjectCard = () => {
  return (
    <div className="h-auto w-[350px] max-w-fit cursor-grab   p-2  group rounded-xl dark:bg-gradient-to-r dark:from-slate-900 dark:to-slate-700 shadow-md dark:shadow-slate-500 ">
           <section className="h-fit w-full z-[2] dark:bg-transparent rounded-xl relative">
           <div className="flex gap-4  -z-[5] items-center absolute bottom-0 group-hover:-translate-y-3 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <FaGithubAlt size={24} className="text-blue-400 p-1 hover:bg-blue-200 rounded-lg transition-colors ease duration-500 cursor-pointer " />
              <FcLink size={24} className=" p-1 hover:bg-blue-200 rounded-lg transition-colors ease duration-500 cursor-pointer" />
            </div>
            <div className="bg-blue-400 relative z-10 h-44 w-full rounded-xl group-hover:-translate-y-12 group-hover:shadow-md transition-all duration-300">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                          <BsFillExclamationCircleFill size={16} className="absolute top-4 right-0 -translate-x-1/2 -translate-y-1/2 text-white  group-hover:scale-110 duration-200 ease rounded-full" />
                </TooltipTrigger>
                <TooltipContent className="bg-white border-neutral-300 px-6 py-4 space-y-0.5 max-w-sm md:max-w-lg">
                  <h2 className="text-2xl font-bold text-black">More on Project</h2>
                  <div className=" text-black text-xs text-muted-foreground">
                    <p> - Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisic.</p>
                    <p> - Lorem ipsum dolor sit amet Lorem, ipsum dolor..</p>
                    <p> - Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum architecto quas placeat...</p>

                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            </div>
            </section> 
            <div className="dark:text-white space-y-2 px-3 pt-3 pb-6 w-full overflow-hidden group-hover:translate-x-2 transition-all duration-200">
              <h2 className="font-semibold">Project_name</h2>
              <p className="text-sm line-clamp-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur optio magnam cupiditate?</p>
            </div>
            
          </div>
  )
}

export default ProjectCard
