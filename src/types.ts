export type FitnessGoal = 'masa_muscular' | 'reducir_grasa' | 'aumentar_fuerza' | 'recuperacion';

export type MealTiming = 'pre_entreno' | 'post_entreno' | 'desayuno' | 'almuerzo' | 'cena' | 'snack';

export interface NutritionMacros {
  calories: number; // kcal
  protein: number; // grams
  carbs: number; // grams
  fats: number; // grams
  fiber?: number; // grams
}

export interface MealItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  goal: FitnessGoal[];
  timing: MealTiming[];
  macros: NutritionMacros;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  difficulty: 'Fácil' | 'Intermedio' | 'Avanzado';
  benefits: string[];
  ingredients: string[];
  instructions: string[];
  tags: string[];
  featured?: boolean;
}

export interface UserFitnessProfile {
  age: number;
  gender: 'masculino' | 'femenino';
  weightKg: number;
  heightCm: number;
  activityLevel: 'sedentario' | 'ligero' | 'moderado' | 'intenso' | 'atleta';
  goal: FitnessGoal;
  customCalorieAdjustment?: number;
}

export interface CalculatedMacros {
  bmr: number;
  tdee: number;
  targetCalories: number;
  proteinGrams: number;
  carbsGrams: number;
  fatsGrams: number;
  waterLiters: number;
}

export interface PlannedMealEntry {
  id: string;
  meal: MealItem;
  timing: MealTiming;
  addedAt: string;
}

export interface NutritionGuideArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  iconName: string;
  summary: string;
  content: string[];
  keyTakeaways: string[];
}
