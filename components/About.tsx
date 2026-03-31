import React from "react";



const About = () => (
  <section id="about" className="overflow-hidden w-full md:h-[100vh] space-y-10">
    <h2 className="mb-10 text-center">
        About <span className="text-blue-800 dark:text-blue-400">
          Me.
        </span>
    </h2>
     
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      
      <div className="max-md:order-2">
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
      </div>
        

      <div className="max-md:order-1 p-3 md:p-5 lg:p-10 w-full mx-auto flex justify-center items-center">
        {/* The "group" class here is the trigger for hover effects */}
        <div className="group relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 transition-transform duration-500">

          {/* Outermost Ring */}
          <div className="absolute inset-0 bg-blue-400/20 dark:bg-blue-400/30 rounded-full scale-150 z-10 animate-pulse group-hover:scale-[1.6] transition-transform duration-700 dark:duration-1000" />

          {/* Middle Ring */}
          <div className="absolute inset-0 bg-blue-500/40 dark:bg-blue-500/50 rounded-full scale-125 z-20 group-hover:scale-[1.35] transition-transform duration-600" />

          {/* Main Blue Background */}
          <div className="absolute inset-0 bg-blue-500/70 dark:bg-blue-400/50 rounded-full scale-110 z-30 shadow-lg group-hover:scale-[1.15] transition-transform duration-300" />

          {/* Image — highest z-index so it sits on top */}
          <div className="relative w-full h-full rounded-full overflow-hidden border border-white  shadow-2xl bg-white z-40 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-2">
            <img
              src="/assets/my-photo.jpg"
              className="w-full h-full object-cover"
              alt="Profile"
            />
          </div>

        </div>
      </div>
      
    </div>
  </section>
);

export default About;
