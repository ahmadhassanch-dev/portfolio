"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from "next/link"

const HomePage = () => {
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const targetElement = document.querySelector(hash);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <>
    
      <main id="home" className="flex flex-col lg:flex-row items-center justify-center text-center bg-black text-white p-4 md:p-16 lg:p-24">
        <div className="lg:w-1/3 flex justify-center">
          <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full border-4 border-red-600 overflow-hidden flex items-center justify-center">
            <Image src="/profile.jpg" alt="Ahmad Hassan" width={256} height={256} className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="lg:w-2/3 flex flex-col mt-4 md:mt-16 items-center lg:items-start lg:text-left p-2 md:p-6 lg:p-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-red-600">Ahmad Hassan</h1>
          <p className="text-xl md:text-xl lg:text-2xl font-semibold mt-2 md:mt-3 text-red-600">Full-Stack Developer | AI Enthusiast</p>
          <p className="max-w-2xl mt-2 md:mt-4 text-gray-300 text-base md:text-lg lg:text-xl">
            Passionate about building modern, scalable web applications and exploring AI-driven solutions.
          </p>
          
          <Link href="/projects">
         
          <button className="mt-4 md:mt-6 px-6 py-2 md:px-8 md:py-3 bg-red-600 text-white font-bold text-base md:text-lg lg:text-xl rounded-lg hover:bg-red-700 transition-all">
            View My Work
          </button>
          </Link>
        </div>
      </main>

      <div id="about" className="p-4 md:p-8 lg:p-16 text-center lg:text-left bg-black text-white">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-red-600 mt-12 md:mt-20">About Me</h2>
        <h3 className="mt-4 md:mt-6 text-xl md:text-2xl lg:text-3xl font-semibold text-gray-300">Background</h3>
        <p className="mt-2 text-gray-300 text-base md:text-lg lg:text-xl">
          Born and raised in Faisalabad, Pakistan, Ahmad Hassan is a 15-year-old student currently studying in the 9th grade. He has been deeply passionate about software development from an early age, exploring various aspects of programming and technology.
        </p>
        <h3 className="mt-6 md:mt-8 text-xl md:text-2xl lg:text-3xl font-semibold text-gray-300">Full-Stack Development Journey</h3>
        <p className="mt-2 text-gray-300 text-base md:text-lg lg:text-xl">
          As a dedicated Full-Stack Web Developer, he is skilled in developing modern, responsive, and scalable applications. With proficiency in TypeScript, Next.js, and AI-powered solutions, Ahmad is constantly pushing the boundaries of web development. He enjoys working on both the front-end and back-end, ensuring seamless user experiences while integrating the latest technologies.
        </p>
        <h3 className="mt-6 md:mt-8 text-xl md:text-2xl lg:text-3xl font-semibold text-gray-300">Passion for Learning</h3>
        <p className="mt-2 text-gray-300 text-base md:text-lg lg:text-xl">
          His journey in software development has been fueled by curiosity and a passion for learning. Ahmad is always exploring new technologies and frameworks to expand his expertise, with a keen interest in artificial intelligence and automation. Though he is not currently working professionally, he is actively honing his skills and contributing to various projects that showcase his abilities.
        </p>
      </div>

      <div id="skills" className="p-4 md:p-8 lg:p-16 text-center lg:text-left bg-black text-white">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-red-600 mt-12 md:mt-20">Skills</h2>
        <ul className="mt-4 md:mt-6 text-gray-300 text-base md:text-lg lg:text-xl grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
          <li className="hover:text-red-600 transition ease-in-out duration-300">Next.js</li>
          <li className="hover:text-red-600 transition ease-in-out duration-300">JavaScript</li>
          <li className="hover:text-red-600 transition ease-in-out duration-300">TypeScript</li>
          <li className="hover:text-red-600 transition ease-in-out duration-300">Python</li>
          <li className="hover:text-red-600 transition ease-in-out duration-300">LangChain</li>
          <li className="hover:text-red-600 transition ease-in-out duration-300">Langraph</li>
          <li className="hover:text-red-600 transition ease-in-out duration-300">Crew AI</li>
          <li className="hover:text-red-600 transition ease-in-out duration-300">React.js</li>
          <li className="hover:text-red-600 transition ease-in-out duration-300">Tailwind CSS</li>
        </ul>
      </div>

    </>
  );
};

export default HomePage;