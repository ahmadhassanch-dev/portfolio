import React, { JSX } from "react";
import Link from "next/link";
import { FaDiscord, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-300 py-4 md:py-8 px-4 md:px-6 text-center">
      <div className="flex justify-center space-x-4 md:space-x-8">
        <FooterLink
          href="#"
          icon={<FaDiscord />}
          label="Discord - ahmed_hassan123"
        />
        <FooterLink
          href="https://www.linkedin.com/in/ahmad-hassan-muhammad-bilal-siddique-b7967233b/"
          icon={<FaLinkedin />}
          label="LinkedIn"
        />
        <FooterLink
          href="https://github.com/ahmadhassanch-dev"
          icon={<FaGithub />}
          label="GitHub"
        />
      </div>
      <p className="mt-4 md:mt-6 text-gray-500 text-sm">
        &copy; {currentYear} Ahmad Hassan. All rights reserved.
      </p>
    </footer>
  );
};

const FooterLink = ({ href, icon, label }: { href: string; icon: JSX.Element; label: string }) => (
  <Link href={href} target="_blank" rel="noopener noreferrer">
    <span className="flex items-center space-x-2 text-gray-300 hover:text-red-500 transition duration-300">
      {icon}
      <span>{label}</span>
    </span>
  </Link>
);

export default Footer;
