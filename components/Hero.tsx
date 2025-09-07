import Button from "./ui/Button";
import Reveal from "./ui/Reveal";
import { Sparkle } from "./ui/Sparkle";
import { Spotlight } from "./ui/Spotlight";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 relative">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight className="h-[100vh] w-[50vw] top-10 left-full" fill="blue" />
        <Spotlight className="left-80 top-28 h-[100vh] w-[50vw]" fill="white" />
      </div>
      <div className="text-center my-20 mx-auto max-w-[900px] justify-center flex flex-col ">
        <Reveal>
          <h1 className="text-center text-4xl md:text-6xl lg:text-8xl font-extrabold ">
            Hi, I am {""}
            <span className="bg-gradient-to-r from-blue-700 to-blue-200 bg-clip-text text-transparent">
             Obinna Samuel E.
            </span>
          </h1>
        </Reveal>
        
        <h2 className="title my-6 text-xl md:text-3xl lg:text-5xl">
          I&apos;m a Fullstack Software Developer
        </h2>
        <p className="max-w-[700px] mx-auto">
          I love turning ideas into real-world applications. Whether it’s an intuitive UI, a robust API, or a fully deployed product in the cloud, every project I work on is driven by clean code, scalability, and user experience. I don’t just build software,
           I create solutions that help businesses and individuals grow, adapt, and succeed in a digital world.
        </p>
        <a className="mt-10 mx-auto" href="#contact">
          <Button
            title="Contact me"
            icon={<img src="assets/send.svg" />}
            position="right"
          />
        </a>
      </div>
    </div>
  );
};

export default Hero;
