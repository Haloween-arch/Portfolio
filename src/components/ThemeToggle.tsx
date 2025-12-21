import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({
  darkMode,
  toggleDarkMode,
}) => {
  return (
    <button
      type="button"
      onClick={toggleDarkMode}
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={darkMode}
      title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      className="
        p-2 rounded-full
        bg-gray-100 dark:bg-gray-800
        text-gray-700 dark:text-gray-300
        hover:bg-gray-200 dark:hover:bg-gray-700
        transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-blue-500
        active:scale-95
      "
    >
      {darkMode ? (
        <Sun size={18} className="transition-transform rotate-0" />
      ) : (
        <Moon size={18} className="transition-transform rotate-0" />
      )}
    </button>
  );
};

export default ThemeToggle;
