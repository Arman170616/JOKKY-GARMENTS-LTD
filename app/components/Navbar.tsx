// components/Navbar.tsx

"use client"; // Add this line at the very top

import { FC, useState } from 'react';
import Link from 'next/link';

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-blue-200 text-white shadow-md">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <div className="text-2xl font-bold">
          <Link href="/" className="hover:text-gray-200">
            MyApp
          </Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-gray-200">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-200">
            About
          </Link>
          <Link href="/services" className="hover:text-gray-200">
            Services
          </Link>
          <Link href="/contact" className="hover:text-gray-200">
            Contact
          </Link>
        </div>
        <button onClick={toggleMenu} className="md:hidden p-2 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
          </svg>
        </button>
        <div className={`md:hidden absolute top-16 right-0 bg-blue-600 w-full shadow-lg ${isOpen ? 'block' : 'hidden'}`}>
          <Link href="/" className="block px-4 py-2 text-white hover:bg-blue-500">
            Home
          </Link>
          <Link href="/about" className="block px-4 py-2 text-white hover:bg-blue-500">
            About
          </Link>
          <Link href="/services" className="block px-4 py-2 text-white hover:bg-blue-500">
            Services
          </Link>
          <Link href="/contact" className="block px-4 py-2 text-white hover:bg-blue-500">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
