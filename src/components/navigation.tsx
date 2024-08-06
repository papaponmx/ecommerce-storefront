// MobileMenu.tsx
'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Search } from 'lucide-react';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="sm:hidden">
        <button
          onClick={toggleMenu}
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          aria-expanded={isOpen}
        >
          <span className="sr-only">{isOpen ? 'Close main menu' : 'Open main menu'}</span>
          {isOpen ? (
            <X className="block h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="block h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      <div
        className={`sm:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link href="/products" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block px-3 py-2 rounded-md text-base font-medium">
            Products
          </Link>
          <Link href="/categories" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block px-3 py-2 rounded-md text-base font-medium">
            Categories
          </Link>
          <Link href="/about" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block px-3 py-2 rounded-md text-base font-medium">
            About
          </Link>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200">
          <div className="flex items-center px-4">
            <div className="flex-shrink-0 w-full">
              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-100 h-10 px-5 pr-10 rounded-full text-sm focus:outline-none w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
