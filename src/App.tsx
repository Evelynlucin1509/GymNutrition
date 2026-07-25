import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { GoalFilter } from './components/GoalFilter';
import { MealCard } from './components/MealCard';
import { MealDetailModal } from './components/MealDetailModal';
import { WorkoutNutritionGuide } from './components/WorkoutNutritionGuide';
import { MacroCalculator } from './components/MacroCalculator';
import { AiNutritionAdvisor } from './components/AiNutritionAdvisor';
import { DailyPlanner } from './components/DailyPlanner';
import { NutritionTips } from './components/NutritionTips';
import { Footer } from './components/Footer';

import { INITIAL_MEALS } from './data/meals';
import { MealItem, FitnessGoal, MealTiming, PlannedMealEntry, UserFitnessProfile, CalculatedMacros } from './types';
import { Dumbbell, Sparkles, Check, AlertCircle } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'meals' | 'guide' | 'calculator' | 'ai' | 'planner' | 'articles'>('meals');
  
  // Filtering & Sorting State
  const [selectedGoal, setSelectedGoal] = useState<FitnessGoal | 'all'>('all');
  const [selectedTiming, setSelectedTiming] = useState<MealTiming | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'default' | 'protein' | 'calories_asc' | 'prep_time'>('default');

  // Modal State
  const [activeMealModal, setActiveMealModal] = useState<MealItem | null>(null);

  // User Profile & Calculated Macros State
  const [userProfile, setUserProfile] = useState<UserFitnessProfile | null>(null);
  const [calculatedMacros, setCalculatedMacros] = useState<CalculatedMacros | null>(null);

  // Daily Planner State
  const [plannedEntries, setPlannedEntries] = useState<PlannedMealEntry[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  // Add meal to daily planner
  const handleAddToPlanner = (meal: MealItem, timing?: MealTiming) => {
    const entryTiming = timing || meal.timing[0] || 'almuerzo';
    const newEntry: PlannedMealEntry = {
      id: `${meal.id}-${Date.now()}`,
      meal,
      timing: entryTiming,
      addedAt: new Date().toLocaleTimeString(),
    };
    setPlannedEntries((prev) => [...prev, newEntry]);
    showToast(`"${meal.title}" añadido a tu plan diario.`);
  };

  const handleRemoveEntry = (id: string) => {
    setPlannedEntries((prev) => prev.filter((e) => e.id !== id));
    showToast('Platillo eliminado del planificador.');
  };

  const handleClearAllEntries = () => {
    setPlannedEntries([]);
    showToast('Se ha limpiado tu plan del día.');
  };

  const handleHeroSelectGoal = (goal: FitnessGoal) => {
    setSelectedGoal(goal);
    setActiveTab('meals');
  };

  const handleApplyProfileFromCalc = (profile: UserFitnessProfile, macros: CalculatedMacros) => {
    setUserProfile(profile);
    setCalculatedMacros(macros);
    setSelectedGoal(profile.goal);
    setActiveTab('meals');
    showToast(`Macros de ${profile.goal.replace('_', ' ')} aplicados a los filtros.`);
  };

  const handleOpenAIWithProfile = (profile: UserFitnessProfile, macros: CalculatedMacros) => {
    setUserProfile(profile);
    setCalculatedMacros(macros);
    setActiveTab('ai');
  };

  // Filtered & Sorted Meals catalog
  const filteredMeals = useMemo(() => {
    return INITIAL_MEALS.filter((meal) => {
      // Goal Filter
      if (selectedGoal !== 'all' && !meal.goal.includes(selectedGoal)) {
        return false;
      }
      // Timing Filter
      if (selectedTiming !== 'all' && !meal.timing.includes(selectedTiming)) {
        return false;
      }
      // Search Query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchTitle = meal.title.toLowerCase().includes(query);
        const matchSub = meal.subtitle.toLowerCase().includes(query);
        const matchDesc = meal.description.toLowerCase().includes(query);
        const matchIng = meal.ingredients.some((ing) => ing.toLowerCase().includes(query));
        const matchTag = meal.tags.some((tag) => tag.toLowerCase().includes(query));
        return matchTitle || matchSub || matchDesc || matchIng || matchTag;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'protein') {
        return b.macros.protein - a.macros.protein;
      }
      if (sortBy === 'calories_asc') {
        return a.macros.calories - b.macros.calories;
      }
      if (sortBy === 'prep_time') {
        return (a.prepTimeMinutes + a.cookTimeMinutes) - (b.prepTimeMinutes + b.cookTimeMinutes);
      }
      return 0; // default
    });
  }, [selectedGoal, selectedTiming, searchQuery, sortBy]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-emerald-500 text-slate-950 px-4 py-3 rounded-2xl font-black text-xs shadow-2xl flex items-center space-x-2 border border-emerald-300 animate-bounce">
          <Check className="w-4 h-4" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header Bar */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        plannedCount={plannedEntries.length}
      />

      {/* Hero Header on Meals main view */}
      {activeTab === 'meals' && (
        <Hero
          selectedGoal={selectedGoal === 'all' ? 'masa_muscular' : selectedGoal}
          onSelectGoal={handleHeroSelectGoal}
          onOpenAI={() => setActiveTab('ai')}
          onOpenCalculator={() => setActiveTab('calculator')}
        />
      )}

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* TAB 1: Meals Catalog */}
        {activeTab === 'meals' && (
          <div className="space-y-8">
            
            {/* Filter controls */}
            <GoalFilter
              selectedGoal={selectedGoal}
              setSelectedGoal={setSelectedGoal}
              selectedTiming={selectedTiming}
              setSelectedTiming={setSelectedTiming}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              sortBy={sortBy}
              setSortBy={setSortBy}
              totalResults={filteredMeals.length}
            />

            {/* Meals Grid */}
            {filteredMeals.length === 0 ? (
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-12 text-center space-y-4">
                <Dumbbell className="w-12 h-12 text-slate-700 mx-auto" />
                <h3 className="font-bold text-white text-lg">No encontramos platillos con esos criterios</h3>
                <p className="text-xs text-slate-400 max-w-sm mx-auto">
                  Prueba cambiando los filtros de objetivo físico o busca otra palabra clave como "pollo", "avena" o "proteína".
                </p>
                <button
                  onClick={() => {
                    setSelectedGoal('all');
                    setSelectedTiming('all');
                    setSearchQuery('');
                  }}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-emerald-400 font-bold text-xs hover:bg-slate-700"
                >
                  Restablecer Filtros
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredMeals.map((meal) => {
                  const isPlanned = plannedEntries.some((e) => e.meal.id === meal.id);
                  return (
                    <MealCard
                      key={meal.id}
                      meal={meal}
                      onSelect={(m) => setActiveMealModal(m)}
                      onAddToPlanner={(m) => handleAddToPlanner(m)}
                      isPlanned={isPlanned}
                    />
                  );
                })}
              </div>
            )}

          </div>
        )}

        {/* TAB 2: Workout Nutrition Guide (Pre & Post Workout) */}
        {activeTab === 'guide' && (
          <WorkoutNutritionGuide
            onSelectTimingFilter={(timing) => {
              setSelectedTiming(timing);
              setActiveTab('meals');
            }}
            meals={INITIAL_MEALS}
            onSelectMeal={(m) => setActiveMealModal(m)}
          />
        )}

        {/* TAB 3: Macro & Calorie Calculator */}
        {activeTab === 'calculator' && (
          <MacroCalculator
            onApplyProfile={handleApplyProfileFromCalc}
            onOpenAIWithProfile={handleOpenAIWithProfile}
          />
        )}

        {/* TAB 4: AI Nutrition Advisor */}
        {activeTab === 'ai' && (
          <AiNutritionAdvisor
            initialProfile={userProfile}
            initialMacros={calculatedMacros}
          />
        )}

        {/* TAB 5: Daily Planner */}
        {activeTab === 'planner' && (
          <DailyPlanner
            plannedEntries={plannedEntries}
            onRemoveEntry={handleRemoveEntry}
            onClearAll={handleClearAllEntries}
            calculatedMacros={calculatedMacros}
            onBackToMeals={() => setActiveTab('meals')}
          />
        )}

        {/* TAB 6: Nutrition Guides & Articles */}
        {activeTab === 'articles' && <NutritionTips />}

      </main>

      {/* Recipe Detail Modal */}
      <MealDetailModal
        meal={activeMealModal}
        onClose={() => setActiveMealModal(null)}
        onAddToPlanner={(m, timing) => handleAddToPlanner(m, timing)}
        isPlanned={plannedEntries.some((e) => e.meal.id === activeMealModal?.id)}
      />

      {/* Footer */}
      <Footer setActiveTab={setActiveTab} />

    </div>
  );
}
