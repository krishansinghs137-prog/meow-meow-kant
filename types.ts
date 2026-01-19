
export type Difficulty = 'easy' | 'medium' | 'hard';

export interface Recipe {
  id: number;
  title: string;
  image: string;
  time: number; // minutes
  difficulty: Difficulty;
  category: string;
}

export type FilterType = 'all' | 'easy' | 'medium' | 'hard' | 'quick';
export type SortType = 'none' | 'name' | 'time';
