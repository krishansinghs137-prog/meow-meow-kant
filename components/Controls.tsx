
import React from 'react';
import { FilterType, SortType } from '../types';

interface ControlsProps {
  currentFilter: FilterType;
  currentSort: SortType;
  onFilterChange: (filter: FilterType) => void;
  onSortChange: (sort: SortType) => void;
}

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
    { label: 'Quick (≤30m)', value: 'quick' },
  ];

  const sortOptions: { label: string; value: SortType }[] = [
    { label: 'Default', value: 'none' },
    { label: 'Name (A-Z)', value: 'name' },
    { label: 'Time (Fastest)', value: 'time' },
  ];

  const ButtonGroup = <T extends string>({ 
    title, 
    options, 
    currentValue, 
    onChange 
  }: { 
    title: string; 
    options: { label: string; value: T }[]; 
    currentValue: T; 
    onChange: (val: T) => void;
  }) => (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt.value}
            onClick={() => onChange(opt.value)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border
              ${currentValue === opt.value 
                ? 'bg-orange-500 text-white border-orange-600 shadow-md transform scale-105' 
                : 'bg-white text-gray-700 border-gray-200 hover:border-orange-300 hover:bg-orange-50'
              }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 mb-8 sticky top-4 z-10">
      <ButtonGroup 
        title="Filter by Difficulty" 
        options={filterOptions} 
        currentValue={currentFilter} 
        onChange={onFilterChange} 
      />
      <div className="hidden md:block w-px bg-gray-100 self-stretch" />
      <ButtonGroup 
        title="Sort Results" 
        options={sortOptions} 
        currentValue={currentSort} 
        onChange={onSortChange} 
      />
    </div>
  );
};

export default Controls;
