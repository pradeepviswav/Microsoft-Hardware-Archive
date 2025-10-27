import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import { Theme } from '../types';

interface HeaderProps {
  theme: Theme;
  onThemeToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, onThemeToggle }) => {
  return (
    <header className="relative py-8 text-center border-b border-gray-200 dark:border-gray-700">
      <div className="absolute top-4 right-4">
          <ThemeSwitcher theme={theme} onToggle={onThemeToggle} />
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
        Microsoft Hardware Archive
      </h1>
      <p className="mt-2 text-lg text-gray-500 dark:text-gray-400">
        Exploring the legacy of microsoftdevices.com
      </p>
    </header>
  );
};

export default Header;
