import React from 'react';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
}) => {
  return (
    <nav className="p-4 sm:p-6 sticky top-0 bg-gray-900 bg-opacity-80 backdrop-blur-md z-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex justify-center flex-wrap gap-2 sm:gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className={`px-4 py-2 text-sm sm:text-base font-semibold rounded-full transition-all duration-300 ease-in-out transform hover:scale-105
                ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="relative w-full sm:w-auto">
          <input
            type="search"
            placeholder="Search by name, year..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full sm:w-64 bg-gray-700 text-white placeholder-gray-400 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default CategoryFilter;
