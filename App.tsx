
import React, { useState, useMemo } from 'react';
import { INITIAL_RECIPES } from './data/recipes';
import { FilterType, SortType } from './types';
import { filterRecipes, sortRecipes } from './services/recipeLogic';
import Controls from './components/Controls';
import RecipeCard from './components/RecipeCard';
import { AnimatePresence, motion } from 'framer-motion';

const App: React.FC = () => {
  const [filter, setFilter] = useState<FilterType>('all');
  const [sort, setSort] = useState<SortType>('none');

  const displayedRecipes = useMemo(() => {
    const filtered = filterRecipes(INITIAL_RECIPES, filter);
    const sorted = sortRecipes(filtered, sort);
    return sorted;
  }, [filter, sort]);

  return (
    <div className="min-h-screen">
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-orange-100/40 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] bg-blue-50/50 rounded-full blur-[100px]" />
      </div>

      {/* Hero Section */}
      <header className="pt-16 pb-12 text-center px-4">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto"
        >
          <div className="inline-flex items-center gap-3 mb-6 bg-white px-5 py-2 rounded-full shadow-sm border border-slate-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-500">
              Cooking Made Simple
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-[900] text-slate-900 tracking-tight mb-6">
            Recipe<span className="text-orange-500">JS</span>
          </h1>
          
          <p className="text-slate-500 max-w-xl mx-auto text-lg font-medium leading-relaxed">
            Experience functional cooking. Filter by difficulty, sort by time, and master your kitchen with pure logic.
          </p>
        </motion.div>
      </header>

      <main className="max-w-7xl mx-auto px-6 lg:px-8 pb-32">
        {/* Interactive Controls */}
        <Controls 
          currentFilter={filter} 
          currentSort={sort} 
          onFilterChange={setFilter} 
          onSortChange={setSort} 
        />

        {/* Results Info */}
        <div className="flex items-center justify-between mb-10 border-b border-slate-100 pb-6">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-[800] text-slate-800">
              {filter === 'all' ? 'All Recipes' : `${filter.charAt(0).toUpperCase() + filter.slice(1)}`}
            </h2>
            <div className="h-6 w-px bg-slate-200 hidden sm:block" />
            <span className="bg-slate-100 text-slate-500 px-3 py-1 rounded-lg text-sm font-bold">
              {displayedRecipes.length} Total
            </span>
          </div>
        </div>

        {/* Dynamic Recipe Grid */}
        <div className="relative min-h-[400px]">
          <AnimatePresence mode="popLayout">
            {displayedRecipes.length > 0 ? (
              <motion.div 
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10"
              >
                {displayedRecipes.map((recipe) => (
                  <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-32 bg-white rounded-[3rem] border-2 border-dashed border-slate-100"
              >
                <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mb-6 text-slate-200">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">No recipes found</h3>
                <p className="text-slate-400 font-medium mb-8">Try adjusting your filters or sorting method.</p>
                <button 
                  onClick={() => { setFilter('all'); setSort('none'); }}
                  className="bg-orange-500 text-white px-8 py-3 rounded-2xl font-bold shadow-xl shadow-orange-100 hover:bg-orange-600 transition-all active:scale-95"
                >
                  Clear all filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Refined Footer */}
      <footer className="bg-slate-900 text-white pt-24 pb-12 rounded-t-[4rem]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div>
              <div className="text-2xl font-black mb-6">Recipe<span className="text-orange-500">JS</span></div>
              <p className="text-slate-400 font-medium">Elevating your cooking experience through functional programming principles.</p>
            </div>
            <div className="md:col-span-2 flex flex-wrap gap-12 justify-end">
              <div className="flex flex-col gap-4">
                <span className="text-orange-500 font-black text-xs uppercase tracking-widest">Principles</span>
                <ul className="text-slate-400 space-y-2 font-medium">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500" /> Pure Functions</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500" /> Higher Order Methods</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500" /> Immutability</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-500 text-sm font-bold tracking-tight">© 2024 RecipeJS Lab. Part 2 - Interactive Controls.</p>
            <div className="flex gap-4">
              <div className="px-4 py-1.5 rounded-xl border border-slate-800 text-[10px] font-black text-slate-500 uppercase tracking-widest">React 19</div>
              <div className="px-4 py-1.5 rounded-xl border border-slate-800 text-[10px] font-black text-slate-500 uppercase tracking-widest">Tailwind CSS</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
