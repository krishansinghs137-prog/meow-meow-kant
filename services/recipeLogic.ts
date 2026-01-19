
import { Recipe, FilterType, SortType } from '../types';

/**
 * Filter recipes based on difficulty or time.
 * This is a pure function that returns a new array.
 */
export const filterRecipes = (recipes: Recipe[], filter: FilterType): Recipe[] => {
  switch (filter) {
    case 'easy':
    case 'medium':
    case 'hard':
      return recipes.filter(r => r.difficulty === filter);
    case 'quick':
      return recipes.filter(r => r.time <= 30);
    case 'all':
    default:
      return [...recipes];
  }
};

/**
 * Sort recipes based on title or cooking time.
 * This is a pure function that returns a new array copy before sorting.
 */
export const sortRecipes = (recipes: Recipe[], sort: SortType): Recipe[] => {
  const recipesCopy = [...recipes];
  
  switch (sort) {
    case 'name':
      return recipesCopy.sort((a, b) => a.title.localeCompare(b.title));
    case 'time':
      return recipesCopy.sort((a, b) => a.time - b.time);
    case 'none':
    default:
      return recipesCopy;
  }
};
