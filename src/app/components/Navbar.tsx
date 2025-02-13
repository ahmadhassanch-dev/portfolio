"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest("#navbar-menu") && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white flex justify-between items-center p-3 md:p-4 lg:px-12 z-50 shadow-md">
      {/* Profile Image */}
      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-red-600">
        <Image src="/profile.jpg" alt="profile_pic" width={48} height={48} className="w-full h-full object-cover" />
      </div>

      {/* Brand Name */}
      <Link href="/" className="text-lg md:text-xl font-extrabold">
        Hassan/ <span className="text-red-600">حسن</span> / हसन
      </Link>

      {/* Mobile Menu Button */}
      <button
        aria-label="Toggle Menu"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden text-2xl transition-transform"
      >
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Menu Items */}
      <div
        id="navbar-menu"
        className={`absolute top-full left-0 w-full md:w-auto md:static bg-black md:bg-transparent flex flex-col md:flex-row items-center md:gap-6 text-lg font-semibold transition-all duration-300 ${
          isMobileMenuOpen ? "flex py-4 space-y-3 md:space-y-0" : "hidden md:flex"
        }`}
      >
        <Link href="/" className="hover:text-red-600 transition px-4 py-2">
        Home</Link>
        <Link href="#about" className="hover:text-red-600 transition px-4 py-2">
          About Me
        </Link>
        <Link href="#skills" className="hover:text-red-600 transition px-4 py-2">
          Skills
        </Link>
        <Link href="/contact" className="hover:text-red-600 transition px-4 py-2">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
