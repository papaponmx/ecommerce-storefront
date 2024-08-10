'use client'

import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/theme-context';

const DarkModeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full ${theme === 'dark' ? 'bg-gray-800 text-yellow-300' : 'bg-gray-200 text-gray-800'
        }`}
    >
      {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  );
};

export default DarkModeToggle;
