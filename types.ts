
export type Difficulty = 'easy' | 'medium' | 'hard';
export type Category = 'All' | 'Italian' | 'Indian' | 'Healthy' | 'American' | 'Japanese' | 'Breakfast' | 'Mexican';

export interface Recipe {
  id: number;
  title: string;
  image: string;
  time: number; // minutes
  difficulty: Difficulty;
  category: Category;
}

export type FilterType = 'all' | 'easy' | 'medium' | 'hard' | 'quick';
export type SortType = 'none' | 'name' | 'time';
