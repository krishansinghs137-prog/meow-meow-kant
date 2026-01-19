
import React from 'react';
import { FilterType, SortType } from '../types';

interface ControlsProps {
  currentFilter: FilterType;
  currentSort: SortType;
  onFilterChange: (filter: FilterType) => void;
  onSortChange: (sort: SortType) => void;
}

// Fixed: Moved GroupTitle outside of the Controls component to resolve TypeScript children property errors
// and prevent the component from being re-defined on every render of the parent.
const GroupTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-2 block">
    {children}
  </span>
);

const Controls: React.FC<ControlsProps> = ({ 
  currentFilter, 
  currentSort, 
  onFilterChange, 
  onSortChange 
}) => {
  const filterOptions: { label: string; value: FilterType }[] = [
    { label: 'Show All', value: 'all' },
    { label: 'Easy', value: 'easy' },
    { label: 'Medium', value: 'medium' },
    { label: 'Hard', value: 'hard' },
    { label: 'Quick', value: 'quick' },
  ];

  const sortOptions: { label: string; value: SortType }[] = [
    { label: 'Default', value: 'none' },
    { label: 'Name A-Z', value: 'name' },
    { label: 'Fastest', value: 'time' },
  ];

  return (
    <div className="glass-morphism border border-white/50 p-2 rounded-3xl shadow-xl shadow-slate-200/50 flex flex-col md:flex-row gap-6 mb-12 sticky top-6 z-30 max-w-4xl mx-auto">
      {/* Filters */}
      <div className="flex-1 p-3">
        <GroupTitle>Filter By Difficulty</GroupTitle>
        <div className="flex flex-wrap gap-1.5">
          {filterOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => onFilterChange(opt.value)}
              className={`px-4 py-2 rounded-2xl text-sm font-semibold transition-all duration-300
                ${currentFilter === opt.value 
                  ? 'bg-orange-500 text-white shadow-lg shadow-orange-200' 
                  : 'bg-transparent text-slate-600 hover:bg-slate-100'
                }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      <div className="hidden md:block w-px bg-slate-100 my-4" />

      {/* Sorts */}
      <div className="p-3">
        <GroupTitle>Sort Results</GroupTitle>
        <div className="flex flex-wrap gap-1.5">
          {sortOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => onSortChange(opt.value)}
              className={`px-4 py-2 rounded-2xl text-sm font-semibold transition-all duration-300 flex items-center gap-2
                ${currentSort === opt.value 
                  ? 'bg-slate-800 text-white shadow-lg shadow-slate-300' 
                  : 'bg-transparent text-slate-600 hover:bg-slate-100'
                }`}
            >
              {opt.value === 'time' && (
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              )}
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Controls;
