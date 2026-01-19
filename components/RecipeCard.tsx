
import React from 'react';
import { Recipe } from '../types';
import { motion } from 'framer-motion';

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  const difficultyColors = {
    easy: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    medium: 'bg-amber-50 text-amber-600 border-amber-100',
    hard: 'bg-rose-50 text-rose-600 border-rose-100',
  };

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
      className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-orange-100/50 transition-all duration-500 border border-slate-100 flex flex-col h-full relative"
    >
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={recipe.image} 
          alt={recipe.title} 
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider border backdrop-blur-md ${difficultyColors[recipe.difficulty]}`}>
            {recipe.difficulty}
          </span>
        </div>
        <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-slate-800 px-3 py-1.5 rounded-2xl text-[11px] font-bold flex items-center gap-2 shadow-sm border border-white/50">
          <svg className="w-3.5 h-3.5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {recipe.time} MINS
        </div>
      </div>
      
      {/* Content Section */}
      <div className="p-7 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-[2px] bg-orange-500/30 rounded-full"></span>
          <span className="text-orange-500 text-[10px] font-black uppercase tracking-[0.2em]">
            {recipe.category}
          </span>
        </div>
        
        <h2 className="text-xl font-extrabold text-slate-800 mb-4 leading-tight group-hover:text-orange-600 transition-colors">
          {recipe.title}
        </h2>
        
        <div className="mt-auto pt-6 flex items-center justify-between border-t border-slate-50">
          <button className="group/btn text-sm font-bold text-slate-400 hover:text-orange-500 transition-all flex items-center gap-2">
            View Recipe
            <div className="p-1 rounded-full bg-slate-50 group-hover/btn:bg-orange-500 group-hover/btn:text-white transition-all">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
          
          <button className="w-10 h-10 flex items-center justify-center rounded-2xl bg-slate-50 text-slate-400 hover:bg-rose-50 hover:text-rose-500 transition-all active:scale-90">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.5 3c1.557 0 3.046.727 4 2.015Q12.492 3.75 14.5 3c2.786 0 5.25 2.322 5.25 5.25 0 3.924-2.438 7.11-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default RecipeCard;
