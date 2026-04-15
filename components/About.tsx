import React from "react";
import { useState, useEffect } from "react";


const WHATSAPP_NUMBER = "2349136435116"; 
const EMAIL = "obinnasamueledeh@gmail.com";


const About = () => {

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <section id="about" className=" w-full md:min-h-[100vh] space-y-10">
      <h2 className="mb-10 text-center">
          About <span className="text-blue-800 dark:text-blue-400">
            Me.
          </span>
      </h2>
      
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div className="max-md:order-2 space-y-3">
          <p>
            I have always been fascinated with the idea of creation, and this has been evident even as a child with my tendencies to break and reengineer things.
          </p>
          <p>
            At 14, I had my first decisive encounter with computer systems the day I learnt to make a keyboard copy and paste task. The idea of telling a machine what to do and it does it, made me feel like a god. Despite having other childhood dreams, I knew I had found myself.
          </p>

          <p>
            I went on to learn desktop publishing, and by 18, I was teaching office management using Microsoft applications, and holding programs for schools on faster ways to manage student records and scores using Ms Access and Excel. That was my first employment.
          </p>
          <p>
            Before covid, I had to take on physical jobs to be able to fund myself to a proper programming school. I even took on a totally different career, just to make way for me acquiring programming knowledge.
          </p>
          <p>
            Eventually I learnt frontend development, which led me to backend, curious to understand the full cycle of a development process. With no idea how to turn it into a career, I just kept building things for fun,  I spent days on stack overflow researching similar problems like my bugs. I Lost most project files because I ignored git
          </p>
          <p>
            Built a bills payment startup that didnt meet my expectations and failed after few months of business operations  
          </p>

          <p>
            Started all over again, and currently, I have worked with Edutech startups like TECHPOWA to set up a virtual learning platform and built a number of websites for local businesses
          </p>
          
          <p>
            I Built an offline-first invoice generator with custom branding for business owners, to eliminate the use of paper invoices in Nigerian markets, and currently building the next startup.
          </p>
          <p>
            I work with founders, schools, and business owners, especially in service industry to build app and websites that better suites their brands, communicates their values clearly and elevates their visibility and credibility.
          </p>
          <p>
            With my experiences, I believe that the perfect hire is not only a dev with technical depth, but also the one with a relentless approach to work and solving problems. With, me you just got both.
          </p>
          <p>
            From the idea to the planning, development and deployment, I have got you covered.
          </p>
          <p>Lets Build!!</p>
          <button
            onClick={() => setOpen(true)}
            className=" px-6 py-3 rounded-full bg-blue-800 hover:bg-blue-700 text-white font-bold text-base transition-all duration-200 hover:scale-105 shadow-lg shadow-blue-900/20"
          >
            Text me! 
          </button>
        

          {/* ── Popup ── */}
          {open && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            >
              <div
                className="w-full max-w-sm bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 p-6"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                  <h3 className="!text-lg !font-bold text-slate-900 dark:text-white">
                    Get in touch
                  </h3>
                  <button
                    onClick={() => setOpen(false)}
                    className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-3.5 rounded-xl bg-green-500 hover:bg-green-400 text-white font-bold text-sm transition duration-200 mb-3"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>

                {/* Email */}
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center justify-center gap-3 w-full py-3.5 rounded-xl bg-blue-800 hover:bg-blue-700 text-white font-bold text-sm transition duration-200"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email
                </a>
              </div>
            
            </div>
          )}

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
}
export default About;
