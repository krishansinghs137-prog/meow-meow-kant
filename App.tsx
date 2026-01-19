
import React, { useState, useMemo } from 'react';
import { INITIAL_RECIPES } from './data/recipes';
import { FilterType, SortType } from './types';
import { filterRecipes, sortRecipes } from './services/recipeLogic';
import Controls from './components/Controls';
import RecipeCard from './components/RecipeCard';

const App: React.FC = () => {
  // 1. State Management
  const [filter, setFilter] = useState<FilterType>('all');
  const [sort, setSort] = useState<SortType>('none');

  // 2. Pure Data Processing (using useMemo for performance)
  const displayedRecipes = useMemo(() => {
    // Pipeline: Original -> Filtered -> Sorted
    const filtered = filterRecipes(INITIAL_RECIPES, filter);
    const sorted = sortRecipes(filtered, sort);
    
    console.debug(`Displaying ${sorted.length} recipes (Filter: ${filter}, Sort: ${sort})`);
    return sorted;
  }, [filter, sort]);

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 py-8 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-orange-500 p-2 rounded-xl shadow-lg shadow-orange-200">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              Recipe<span className="text-orange-500 text-4xl">JS</span>
            </h1>
          </div>
          <p className="text-gray-500 max-w-2xl">
            A functional cooking companion. Discover, filter, and sort your favorite recipes 
            using pure functions and higher-order logic.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Controls Section */}
        <Controls 
          currentFilter={filter} 
          currentSort={sort} 
          onFilterChange={setFilter} 
          onSortChange={setSort} 
        />

        {/* Results Header */}
        <div className="flex items-baseline justify-between mb-8 border-b border-gray-100 pb-4">
          <h2 className="text-2xl font-bold text-gray-800">
            {filter === 'all' ? 'All Recipes' : `${filter.charAt(0).toUpperCase() + filter.slice(1)} Recipes`}
          </h2>
          <span className="text-gray-400 font-medium">
            Found {displayedRecipes.length} results
          </span>
        </div>

        {/* Recipe Grid */}
        {displayedRecipes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {displayedRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 bg-white rounded-3xl border-2 border-dashed border-gray-100">
            <div className="bg-gray-50 p-6 rounded-full mb-4">
              <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 9.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-xl font-medium text-gray-500">No recipes match your criteria.</p>
            <button 
              onClick={() => { setFilter('all'); setSort('none'); }}
              className="mt-4 text-orange-500 hover:text-orange-600 font-bold"
            >
              Reset all filters
            </button>
          </div>
        )}
      </main>

      {/* Footer / Status */}
      <footer className="mt-20 py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400 mb-4 font-medium">1.12 RecipeJS - Functional Cooking Companion | Part 2</p>
          <div className="flex justify-center gap-6">
            <span className="flex items-center gap-2 text-sm text-gray-500">
              <span className="w-2 h-2 rounded-full bg-green-500"></span> Pure Functions
            </span>
            <span className="flex items-center gap-2 text-sm text-gray-500">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span> Immortality-Oriented
            </span>
            <span className="flex items-center gap-2 text-sm text-gray-500">
              <span className="w-2 h-2 rounded-full bg-purple-500"></span> State Driven
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
