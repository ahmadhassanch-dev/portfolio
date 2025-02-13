import React from "react";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="bg-black min-h-screen text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-left mb-8 text-red-600">
          My Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* E-commerce Project Card */}
          <div className="bg-black border border-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 w-full md:w-3/4">
            <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
              <Image
                src={"/project_01.png"}
                alt="E-commerce Project"
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
            <div className="p-4">
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
                className="inline-block bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-full transition duration-300"
              >
                View Project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
