import Circle from "@/components/absolute/circle";
import HeroBackground from "@/components/core/hero-backgroud";
import Horizontal from "@/components/core/horizontal";
import LitteAbout from "@/components/core/littleAbout";

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
      <div className="h-screen w-full ">
        <section className="w-full h-5/6 max-w-7xl bg-slate-200 rounded-3xl mx-auto" >

        </section>
      </div>
    </section>
    </main>
    
  </>
  );
}
