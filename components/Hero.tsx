import Link from "next/link";
import { FloatingPaths } from "@/components/ui/FloatingPaths";

const Hero = () => {
  return (
    // Added overflow-hidden to ensure the SVG paths don't bleed out of the viewport
    <div className="md:pt-[70px] md:px-[64px] pt-50 px-[20px] h-[100vh] relative overflow-hidden">
      
      {/* --- BACKGROUND LAYER --- */}
      {/* Added a slight opacity to keep the text readable against the moving paths */}
      <div className="absolute inset-0 z-0 opacity-30 dark:opacity-50">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>
      
      {/* --- CONTENT LAYER --- */}
      
      <div className="w-full h-full flex justify-center items-center relative z-10">
        <div className="text-gray-700 dark:text-white text-center mx-auto max-w-[900px] justify-center items-center gap-8 flex flex-col">
        
          <h1 className="text-center text-4xl md:text-6xl text-black dark:text-white lg:text-8xl font-extrabold tracking-tight">
              Hi, <br/>I'm <span className="text-blue-800 dark:text-blue-400">
              Obinna Samuel E.
              </span>
          </h1>
          
          <h3 className="text-lg md:text-3xl dark:text-slate-300 lg:text-5xl font-medium">
            A Fullstack Software Developer
          </h3>

          <p className="max-w-[650px] text-slate-700 dark:text-slate-300 mx-auto leading-relaxed">
            I design and engineer full-stack web applications, scalable from system architecture to deployment, with solid backend systems and clean interfaces
          </p>

          <div className="flex gap-4 items-center justify-center">
            <Link 
              className="text-white bg-blue-600 hover:bg-blue-700 transition-colors px-6 py-3 rounded-lg font-medium" 
              href={'#projects'}
            >
              See my works
            </Link>
            <Link 
              className="text-blue-600 border border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors px-6 py-3 rounded-lg font-medium" 
              href={'/testimonials'}
            >
              See reviews
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;