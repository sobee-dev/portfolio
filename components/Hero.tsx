import Link from "next/link";


const Hero = () => {
  return (
    <div className="md:pt-[70px] md:px-[64px] pt-50 px-[20px] h-[100vh] relative">
      
      {/* <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight className="h-[100vh] w-[50vw] top-10 left-full" fill="blue" />
        <Spotlight className="left-80 top-28 h-[100vh] w-[50vw]" fill="white" />
      </div> */}
      
      <div className="w-full h-full flex justify-center items-center ">
        <div className="text-gray-700 dark:text-white text-center  mx-auto max-w-[900px] justify-center items-center gap-8 flex flex-col ">
        
          <h1 className="text-center text-4xl md:text-6xl text-black dark:text-white lg:text-8xl font-extrabold ">
              Hi, I am <span className="text-blue-800 dark:text-blue-400 ">
              Obinna Samuel E.
              </span>
          </h1>
          
          
          <h3 className=" text-lg md:text-3xl dark:text-slate-300 lg:text-5xl">
            A Fullstack Software Developer
          </h3>

          <p className="max-w-[650px] dark:text-slate-300 mx-auto">
            I love turning ideas into real-world applications. Whether it&apos;s an intuitive UI, a robust API, or a fully deployed product in the cloud, every project I work on is driven by clean code, scalability, and user experience. I don’t just build software,
            I create solutions that help businesses and individuals grow, adapt, and succeed in a digital world.
          </p>

          <div className="flex gap-4 items-center justify-center">
            <Link className="text-white bg-blue-600  px-3 md:px-6 py-3 max-md:text-[14px] rounded-lg" href={'#projects'}>See my works</Link>
            <Link className="text-blue-600 border  border-blue-600 px-3 md:px-6 rounded-lg max-md:text-[14px] py-3" href={'/testimonials'}>See reviews</Link>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Hero;
