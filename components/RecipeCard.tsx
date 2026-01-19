
import React from 'react';
import { Recipe } from '../types';

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  const difficultyColors = {
    easy: 'bg-green-100 text-green-700',
    medium: 'bg-yellow-100 text-yellow-700',
    hard: 'bg-red-100 text-red-700',
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={recipe.image} 
          alt={recipe.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 left-3">
          <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${difficultyColors[recipe.difficulty]}`}>
            {recipe.difficulty}
          </span>
        </div>
        <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-xs font-medium flex items-center gap-1">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {recipe.time} mins
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-1">
          {recipe.category}
        </div>
        <h2 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors">
          {recipe.title}
        </h2>
        
        <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
          <button className="text-sm font-semibold text-gray-400 hover:text-orange-500 transition-colors flex items-center gap-1">
            View Details
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          <button className="p-2 rounded-full bg-gray-50 text-gray-400 hover:bg-red-50 hover:text-red-500 transition-all">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
