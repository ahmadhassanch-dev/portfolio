"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
      <nav className="fixed top-0 left-0 w-full bg-black text-white flex justify-between items-center p-4 z-50 shadow-md">
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-red-600 flex items-center justify-center">
          <Image src="/profile.jpg" alt="profile_pic" width={48} height={48} className="w-full h-full object-cover" />
        </div>

        <div className="text-xl ml-28 font-extrabold cursor-pointer">
          Hassan/ <span className="text-red-600">حسن</span> / हसन
        </div>

        <div className="flex gap-4 font-semibold cursor-pointer">
          <Link href="#home" legacyBehavior>
            <a className="hover:text-red-600 transition ease-in-out duration-300">Home</a>
          </Link>
          <Link href="#about" legacyBehavior>
            <a className="hover:text-red-600 transition ease-in-out duration-300">About Me</a>
          </Link>
          <Link href="#skills" legacyBehavior>
            <a className="hover:text-red-600 transition ease-in-out duration-300">Skills</a>
          </Link>
          <Link href={"/contact"} className="hover:text-red-600 transition ease-in-out duration-300">Contact</Link>
        </div>
      </nav>

      <main id="home" className="flex flex-col lg:flex-row items-center justify-center text-center bg-black text-white p-16 lg:p-24">
        <div className="lg:w-1/3 flex justify-center">
          <div className="w-56 h-56 lg:w-64 lg:h-64 rounded-full border-4 border-red-600 overflow-hidden flex items-center justify-center">
            <Image src="/profile.jpg" alt="Ahmad Hassan" width={256} height={256} className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="lg:w-2/3 flex flex-col mt-16 items-center lg:items-start lg:text-left p-6 lg:p-12">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-red-600">Ahmad Hassan</h1>
          <p className="text-xl lg:text-2xl font-semibold mt-3 text-red-600">Full-Stack Developer | AI Enthusiast</p>
          <p className="max-w-2xl mt-4 text-gray-300 text-lg lg:text-xl">
            Passionate about building modern, scalable web applications and exploring AI-driven solutions.
          </p>
          <button className="mt-6 px-8 py-3 bg-red-600 text-white font-bold text-lg lg:text-xl rounded-lg hover:bg-red-700 transition-all">
            View My Work
          </button>
        </div>
      </main>

      <div id="about" className="p-8 lg:p-16 text-center lg:text-left bg-black text-white">
        <h2 className="text-3xl mt-20 lg:text-4xl font-semibold text-red-600">About Me</h2>
        <h3 className="mt-6 text-2xl lg:text-3xl font-semibold text-gray-300">Background</h3>
        <p className="mt-2 text-gray-300 text-lg lg:text-xl">
          Born and raised in Faisalabad, Pakistan, Ahmad Hassan is a 15-year-old student currently studying in the 9th grade. He has been deeply passionate about software development from an early age, exploring various aspects of programming and technology.
        </p>
        <h3 className="mt-8 text-2xl lg:text-3xl font-semibold text-gray-300">Full-Stack Development Journey</h3>
        <p className="mt-2 text-gray-300 text-lg lg:text-xl">
          As a dedicated Full-Stack Web Developer, he is skilled in developing modern, responsive, and scalable applications. With proficiency in TypeScript, Next.js, and AI-powered solutions, Ahmad is constantly pushing the boundaries of web development. He enjoys working on both the front-end and back-end, ensuring seamless user experiences while integrating the latest technologies.
        </p>
        <h3 className="mt-8 text-2xl lg:text-3xl font-semibold text-gray-300">Passion for Learning</h3>
        <p className="mt-2 text-gray-300 text-lg lg:text-xl">
          His journey in software development has been fueled by curiosity and a passion for learning. Ahmad is always exploring new technologies and frameworks to expand his expertise, with a keen interest in artificial intelligence and automation. Though he is not currently working professionally, he is actively honing his skills and contributing to various projects that showcase his abilities.
        </p>
      </div>

      <div id="skills" className="p-8 lg:p-16 text-center lg:text-left bg-black text-white">
        <h2 className="text-3xl mt-20 lg:text-4xl font-semibold text-red-600">Skills</h2>
        <ul className="mt-6 text-gray-300 text-lg lg:text-xl grid grid-cols-2 lg:grid-cols-3 gap-4">
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