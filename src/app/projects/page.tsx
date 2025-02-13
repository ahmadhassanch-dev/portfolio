import React from "react";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="container mx-auto px-4 py-16 text-white">
      <h1 className="text-4xl font-bold text-center mb-12 text-red-600">
        My Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* E-commerce Project Card */}
        <div className="bg-black border border-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105">
          <div className="relative w-full h-64">
            <Image
              src={"/project_01.png"}
              alt="E-commerce Project"
              layout="fill"
              objectFit="cover"
              className="rounded-t-2xl"
              priority
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2 text-white">
              E-commerce Store
            </h2>
            <p className="text-gray-400 mb-4">
              An online store showcasing a variety of products with cart and
              checkout features.
            </p>
            <Link
              href="https://e-commerce-lac-kappa.vercel.app/"
              target="_blank"
              className="inline-block bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-full transition duration-300 shadow-md hover:shadow-xl"
            >
              View Project
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
