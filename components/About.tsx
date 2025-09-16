import React from "react";
import { Sparkle } from "./ui/Sparkle";
import { myTechStack } from "@/data";
import Reveal from "./ui/Reveal";

const About = () => (
  <section id="about" className="py-20 w-full space-y-10">
    <Reveal>
      <h3 className="mb-10">
        About{" "}
        <span className="bg-gradient-to-r from-blue-200 to-blue-700 bg-clip-text text-transparent">
          me.
        </span>
      </h3>
    </Reveal>  
    
    <div className="sm:flex grid-cols-[2fr_1fr] gap-6 space-y-5 sm:space-y-0">
      <Sparkle
        duration={Math.floor(Math.random() * 10000) + 10000}
        className="flex-col text-left p-3 md:p-5 lg:p-10 gap-5 min-h-full"
      >
        <div className="p-3 md:p-5 lg:p-10 w-full rounded-3xl mx-auto">
          <img src="/assets/my-photo.jpg" className="w-full h-auto" alt="" />
        </div>
        <p>
          I am a curious learner, with a dead-lock approach to problems, a critical thinker that loves to collaborate, a writer, strategist 
          and a movie enthusiast.
        </p>
        <p>
          With solid intuition for design and development, I love creating
          beautiful, functional digital experiences. I’m passionate about
          crafting sotware projects that not only work well but feel great to use.
         
        </p>
        <p>
          I’m always up for great conversations, whether it’s about a new
          project, tech trends, or even the latest action flick. Feel free to
          reach out. Let’s connect!
        </p>
      </Sparkle>

      <div className="relative overflow-hidden rounded-3xl border border-white/[0.1] transition duration-200 shadow-input dark:shadow-none flex flex-col space-y-4 p-10">
        <p className="text-lg lg:text-3xl font-extrabold">
          <span className="bg-gradient-to-r from-blue-200 to-blue-700 bg-clip-text text-transparent">
            My Tech Stack!
          </span>
        </p>

        <div className="flex flex-wrap gap-3 py-4">
          {myTechStack.map((skill) => (
            <div
              key={skill}
              className="bg-white/10 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg hover:bg-white/20 transition duration-200 ease-in-out"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
