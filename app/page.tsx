import HeroBackground from "@/components/core/hero-backgroud";
import LitteAbout from "@/components/core/littleAbout";
import ProjectCard from "@/components/core/project-card";

export default function Home() {

  
  return (
    <>
    <main className=" h-full w-full relative">
      <section className=" h-full  w-full overflow-x-hidden -z-10">
      <HeroBackground />
      <div className="h-screen  py-16 lg:py-0 w-full flex justify-center sticky items-center px-4 overflow-clip">
        <LitteAbout />
      </div>
    </section>
    <section className="h-full w-full">
      <div className="h-screen w-[90%] gap-4 flex items-center justify-center  mx-auto" >
      
        <section className="w-full h-5/6 gap-12 border-2 rounded-3xl mx-auto flex items-center justify-center" >
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        </section>
      </div>
    </section>
    </main>
    
  </>
  );
}
