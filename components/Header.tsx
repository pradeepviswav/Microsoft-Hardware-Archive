
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="py-8 text-center border-b border-gray-700">
      <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
        Microsoft Hardware Archive
      </h1>
      <p className="mt-2 text-lg text-gray-400">
        Exploring the legacy of microsoftdevices.com
      </p>
    </header>
  );
};

export default Header;
