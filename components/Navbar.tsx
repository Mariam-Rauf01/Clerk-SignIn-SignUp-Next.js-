"use client";

import React, { useState } from 'react';
import Link from 'next/link'; // Use this for Next.js; for React Router, import from 'react-router-dom'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

 return (
    <nav className="bg-[#000000] text-[#FFF8DB] px-4 py-4">
      <div className="max-w-7xl mx-auto flex justify-center items-center">
        {/* Logo */}
        <div className="translate-x-[-330px] text-2xl font-aclonica">
          <Link href="/">
            FitZone
          </Link>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="text-[#FFF8DB] md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Links */}
        <div
          className={`flex-col justify-center gap-10 md:flex md:flex-row md:space-x-6 space-y-4 md:space-y-0 items-center absolute md:static bg-black md:bg-transparent left-0 right-0 p-4 md:p-0 ${
            isOpen ? 'flex' : 'hidden'
          }`}
        >
          <Link href="#home" className="hover:text-[#E74C3C] transition duration-300">
            Home
          </Link>
          <Link href="#about" className="hover:text-[#E74C3C] transition duration-300">
            About
          </Link>
          <Link href="#services" className="hover:text-[#E74C3C] transition duration-300">
            Services
          </Link>
          <Link href="#contact" className="hover:text-[#E74C3C] transition duration-300">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;