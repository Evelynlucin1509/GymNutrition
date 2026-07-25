import React, { useState, useMemo, useEffect } from 'react';
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
import { BenefitsSection } from './components/BenefitsSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { CartDrawer } from './components/CartDrawer';
import { Footer } from './components/Footer';

import { INITIAL_MEALS } from './data/meals';
import { MealItem, FitnessGoal, MealTiming, ProductCategory, MainNavTab, CartItem, PlannedMealEntry, UserFitnessProfile, CalculatedMacros } from './types';
import { Dumbbell, Sparkles, Check, ShoppingCart, ShoppingBag } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<MainNavTab>('home');
  
  // Shopping Cart State with localStorage persistence
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('gymnutrition_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('gymnutrition_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [cartItems]);

  // Filtering & Sorting State
  const [selectedGoal, setSelectedGoal] = useState<FitnessGoal | 'all'>('all');
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>('all');
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

  // Cart Handlers
  const handleAddToCart = (meal: MealItem) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.meal.id === meal.id);
      if (existing) {
        return prev.map((item) =>
          item.meal.id === meal.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { id: `${meal.id}-${Date.now()}`, meal, quantity: 1 }];
    });
    showToast(`"${meal.title}" añadido al carrito de compras.`);
  };

  const handleUpdateCartQuantity = (id: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveCartItem(id);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
    );
  };

  const handleRemoveCartItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    showToast('Producto eliminado del carrito.');
  };

  const handleClearCart = () => {
    setCartItems([]);
    showToast('Carrito vaciado.');
  };

  // Daily Planner Handlers
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
      // Category Filter
      if (selectedCategory !== 'all' && meal.category !== selectedCategory) {
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
  }, [selectedGoal, selectedCategory, selectedTiming, searchQuery, sortBy]);

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950 flex flex-col justify-between">
      
      <div>
        {/* Toast Notification */}
        {toastMessage && (
          <div className="fixed bottom-6 right-6 z-50 bg-emerald-500 text-slate-950 px-5 py-3.5 rounded-2xl font-black text-xs shadow-2xl flex items-center space-x-2.5 border border-emerald-300 animate-bounce">
            <Check className="w-4 h-4 text-slate-950" />
            <span>{toastMessage}</span>
          </div>
        )}

        {/* Header Bar */}
        <Header
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          cartCount={totalCartCount}
          onOpenCart={() => setIsCartOpen(true)}
          plannedCount={plannedEntries.length}
        />

        {/* HOME VIEW or PRODUCTS VIEW */}
        {activeTab === 'home' && (
          <div>
            <Hero
              selectedGoal={selectedGoal === 'all' ? 'masa_muscular' : selectedGoal}
              onSelectGoal={handleHeroSelectGoal}
              onOpenAI={() => setActiveTab('ai')}
              onOpenCalculator={() => setActiveTab('calculator')}
              onViewProducts={() => setActiveTab('meals')}
            />

            {/* Featured Catalog Preview */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-800 pb-6">
                <div>
                  <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase text-emerald-400 tracking-wider">
                    <Sparkles className="w-4 h-4" />
                    <span>Menús Destacados para Gimnasio</span>
                  </div>
                  <h2 className="text-3xl font-black text-white mt-1">
                    Platillos y Batidos Fitness Listos para Llevar
                  </h2>
                </div>
                <button
                  onClick={() => setActiveTab('meals')}
                  className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-emerald-400 font-bold text-xs border border-slate-700 transition-colors self-start sm:self-auto"
                >
                  Ver Catálogo Completo →
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {INITIAL_MEALS.slice(0, 4).map((meal) => {
                  const isPlanned = plannedEntries.some((e) => e.meal.id === meal.id);
                  return (
                    <MealCard
                      key={meal.id}
                      meal={meal}
                      onSelect={(m) => setActiveMealModal(m)}
                      onAddToCart={(m) => handleAddToCart(m)}
                      onAddToPlanner={(m) => handleAddToPlanner(m)}
                      isPlanned={isPlanned}
                    />
                  );
                })}
              </div>
            </section>

            <BenefitsSection />
            <AboutSection />
            <ContactSection />
          </div>
        )}

        {/* TAB 1: Meals / Products Catalog */}
        {activeTab === 'meals' && (
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-black text-white tracking-tight">Catálogo de Productos GymNutrition</h1>
                <p className="text-xs text-slate-400 mt-1">Elige tus comidas fitness preparadas para ganar masa o definirte.</p>
              </div>
            </div>

            {/* Filter controls */}
            <GoalFilter
              selectedGoal={selectedGoal}
              setSelectedGoal={setSelectedGoal}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
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
                <h3 className="font-bold text-white text-lg">No encontramos productos con esos filtros</h3>
                <p className="text-xs text-slate-400 max-w-sm mx-auto">
                  Prueba cambiando de categoría o borrando tu término de búsqueda.
                </p>
                <button
                  onClick={() => {
                    setSelectedGoal('all');
                    setSelectedCategory('all');
                    setSelectedTiming('all');
                    setSearchQuery('');
                  }}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-emerald-400 font-bold text-xs hover:bg-slate-700"
                >
                  Restablecer Todos los Filtros
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
                      onAddToCart={(m) => handleAddToCart(m)}
                      onAddToPlanner={(m) => handleAddToPlanner(m)}
                      isPlanned={isPlanned}
                    />
                  );
                })}
              </div>
            )}
          </main>
        )}

        {/* TAB 2: Beneficios */}
        {activeTab === 'benefits' && <BenefitsSection />}

        {/* TAB 3: Nosotros */}
        {activeTab === 'about' && <AboutSection />}

        {/* TAB 4: Contacto */}
        {activeTab === 'contact' && <ContactSection />}

        {/* TAB 5: Workout Nutrition Guide */}
        {activeTab === 'guide' && (
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <WorkoutNutritionGuide
              onSelectTimingFilter={(timing) => {
                setSelectedTiming(timing);
                setActiveTab('meals');
              }}
              meals={INITIAL_MEALS}
              onSelectMeal={(m) => setActiveMealModal(m)}
            />
          </main>
        )}

        {/* TAB 6: Macro & Calorie Calculator */}
        {activeTab === 'calculator' && (
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <MacroCalculator
              onApplyProfile={handleApplyProfileFromCalc}
              onOpenAIWithProfile={handleOpenAIWithProfile}
            />
          </main>
        )}

        {/* TAB 7: AI Nutrition Advisor */}
        {activeTab === 'ai' && (
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <AiNutritionAdvisor
              initialProfile={userProfile}
              initialMacros={calculatedMacros}
            />
          </main>
        )}

        {/* TAB 8: Daily Planner */}
        {activeTab === 'planner' && (
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <DailyPlanner
              plannedEntries={plannedEntries}
              onRemoveEntry={handleRemoveEntry}
              onClearAll={handleClearAllEntries}
              calculatedMacros={calculatedMacros}
              onBackToMeals={() => setActiveTab('meals')}
            />
          </main>
        )}

        {/* TAB 9: Articles */}
        {activeTab === 'articles' && (
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <NutritionTips />
          </main>
        )}
      </div>

      {/* Shopping Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={handleClearCart}
      />

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
