"use client";

import FloatingBar from "@/components/ui/FloatingBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import CTA from "@/components/CTA";



import MyTechStack from "@/components/MyTechStack";
import Testimonials from "@/components/Testimonials";


const Home = () => {
  return (
    <main className=" dark:bg-[#070018]">
          {/* <FloatingBar /> */}
          <Hero />
          <About />
          <MyTechStack />
          <Projects />
          <Experience />
          <Testimonials />
          <CTA />
          
         
      
    </main>

  );
};

export default Home;
