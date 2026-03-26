"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { navItems } from "@/data";
import { useTheme } from "next-themes";

const NavBar = (): JSX.Element => {
  const [activeLink, setActiveLink] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

 

  // Track active section via IntersectionObserver
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    navItems.forEach(({ link }) => {
      const id = link.replace("#", "");
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveLink(link);
        },
        { threshold: 0.4 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="backdrop-blur-sm fixed top-0 left-0 w-full z-50  md:border-b border-slate-400/20 dark:border-slate-700 shadow-sm transition-colors duration-300">
      <div className=" mx-auto px-16 h-[60px] md:h-[70px] flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-widest text-blue-600 dark:text-blue-400">
          SOBEE
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.link}
                  className={`relative text-sm font-medium transition-colors duration-200 pb-1
                    after:absolute after:left-0 after:bottom-0 after:h-[2px] after:rounded-full after:transition-all after:duration-300
                    ${
                      activeLink === item.link
                        ? "text-blue-600 dark:text-blue-400 after:w-full after:bg-blue-600 dark:after:bg-blue-400"
                        : "text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 after:w-0 after:bg-blue-600"
                    }
                  `}
                  onClick={() => setActiveLink(item.link)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right: Toggle + Hamburger */}
        <div className="flex items-center gap-6">

          {/* Dark/Light Toggle */}
          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label="Toggle color mode"
            className="relative w-[52px] h-[28px] rounded-full bg-slate-200 dark:bg-slate-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {/* Track icons */}
            <span className="absolute left-[6px] top-1/2 -translate-y-1/2 text-[13px]">🌙</span>
            <span className="absolute right-[6px] top-1/2 -translate-y-1/2 text-[13px]">☀️</span>
            {/* Thumb */}
            <span
              className={`absolute top-[3px] w-[22px] h-[22px] rounded-full bg-white dark:bg-blue-500 shadow-md transition-all duration-300
                ${isDark ? "left-[26px]" : "left-[3px]"}
              `}
            />
          </button>

          {/* Hamburger (mobile only) */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className="md:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8"
          >
            <span
              className={`block h-[2px] w-5 bg-blue-600 dark:bg-slate-200 rounded-full transition-all duration-300 origin-center
                ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}
              `}
            />
            <span
              className={`block h-[2px] w-5 bg-blue-600 dark:bg-slate-200 rounded-full transition-all duration-300
                ${menuOpen ? "opacity-0 scale-x-0" : ""}
              `}
            />
            <span
              className={`block h-[2px] w-5 bg-blue-600 dark:bg-slate-200 rounded-full transition-all duration-300 origin-center
                ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}
              `}
            />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <nav className=" max-md:border-t border-slate-900 dark:border-slate-200 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.link}
                  onClick={() => {
                    setActiveLink(item.link);
                    setMenuOpen(false);
                  }}
                  className={`block text-sm font-medium py-1 border-l-2 pl-3 transition-colors duration-200
                    ${
                      activeLink === item.link
                        ? "text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400"
                        : "text-slate-600 dark:text-slate-300 border-transparent hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-400"
                    }
                  `}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;