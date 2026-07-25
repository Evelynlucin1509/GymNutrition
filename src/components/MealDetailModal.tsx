import React, { useState } from 'react';
import { X, Clock, Flame, Dumbbell, CheckCircle2, Plus, Check, Sparkles, Utensils, Award } from 'lucide-react';
import { MealItem, MealTiming } from '../types';

interface MealDetailModalProps {
  meal: MealItem | null;
  onClose: () => void;
  onAddToPlanner: (meal: MealItem, timing?: MealTiming) => void;
  isPlanned: boolean;
}

export const MealDetailModal: React.FC<MealDetailModalProps> = ({
  meal,
  onClose,
  onAddToPlanner,
  isPlanned,
}) => {
  if (!meal) return null;

  const [checkedIngredients, setCheckedIngredients] = useState<Record<number, boolean>>({});
  const [selectedTiming, setSelectedTiming] = useState<MealTiming>(meal.timing[0] || 'almuerzo');

  const toggleIngredient = (idx: number) => {
    setCheckedIngredients((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  const timingLabels: Record<MealTiming, string> = {
    pre_entreno: '⚡ Pre-Entreno',
    post_entreno: '🏋️ Post-Entreno',
    desayuno: '🍳 Desayuno',
    almuerzo: '🥗 Almuerzo',
    cena: '🌙 Cena',
    snack: '🍌 Snack',
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-950/80 border border-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Hero Image */}
        <div className="relative h-64 sm:h-72 w-full bg-slate-950 flex-shrink-0">
          <img
            src={meal.image}
            alt={meal.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

          {/* Badges Overlay */}
          <div className="absolute bottom-4 left-6 right-6 flex flex-wrap items-center justify-between gap-2">
            <div>
              <div className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>GymNutrition Approved</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white leading-tight">
                {meal.title}
              </h2>
            </div>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-200 text-sm">
          
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {meal.description}
          </p>

          {/* Key Macros Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-950 p-4 rounded-2xl border border-slate-800">
            <div className="text-center p-2 rounded-xl bg-slate-900 border border-slate-800/80">
              <span className="text-[10px] uppercase text-slate-400 font-bold block">Calorías</span>
              <span className="text-lg font-black text-emerald-400">{meal.macros.calories} kcal</span>
            </div>
            <div className="text-center p-2 rounded-xl bg-slate-900 border border-slate-800/80">
              <span className="text-[10px] uppercase text-slate-400 font-bold block">Proteína Magra</span>
              <span className="text-lg font-black text-teal-300">{meal.macros.protein}g</span>
            </div>
            <div className="text-center p-2 rounded-xl bg-slate-900 border border-slate-800/80">
              <span className="text-[10px] uppercase text-slate-400 font-bold block">Carbohidratos</span>
              <span className="text-lg font-black text-cyan-300">{meal.macros.carbs}g</span>
            </div>
            <div className="text-center p-2 rounded-xl bg-slate-900 border border-slate-800/80">
              <span className="text-[10px] uppercase text-slate-400 font-bold block">Grasas Saludables</span>
              <span className="text-lg font-black text-amber-300">{meal.macros.fats}g</span>
            </div>
          </div>

          {/* Benefits for Gym & Performance */}
          <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800 space-y-2">
            <div className="flex items-center space-x-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
              <Award className="w-4 h-4 text-emerald-400" />
              <span>Beneficios para tu Rendimiento Físico:</span>
            </div>
            <ul className="space-y-1.5 pl-2">
              {meal.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start space-x-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Two-Column: Ingredients & Preparation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            
            {/* Ingredients Checklist */}
            <div className="space-y-3">
              <h3 className="font-bold text-base text-white flex items-center space-x-2 border-b border-slate-800 pb-2">
                <Utensils className="w-4 h-4 text-emerald-400" />
                <span>Ingredientes ({meal.ingredients.length})</span>
              </h3>
              <div className="space-y-2">
                {meal.ingredients.map((ing, idx) => {
                  const isChecked = !!checkedIngredients[idx];
                  return (
                    <label
                      key={idx}
                      onClick={() => toggleIngredient(idx)}
                      className={`flex items-center space-x-3 p-2.5 rounded-xl border cursor-pointer transition-colors ${
                        isChecked
                          ? 'bg-slate-950/40 border-slate-800/60 text-slate-500 line-through'
                          : 'bg-slate-950/90 border-slate-800 text-slate-200 hover:border-slate-700'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => {}}
                        className="rounded border-slate-700 text-emerald-500 focus:ring-emerald-500"
                      />
                      <span className="text-xs font-medium">{ing}</span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Preparation Steps */}
            <div className="space-y-3">
              <h3 className="font-bold text-base text-white flex items-center space-x-2 border-b border-slate-800 pb-2">
                <Clock className="w-4 h-4 text-teal-400" />
                <span>Instrucciones de Preparación</span>
              </h3>
              <ol className="space-y-3">
                {meal.instructions.map((step, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-xs leading-relaxed text-slate-300">
                    <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 font-extrabold flex items-center justify-center flex-shrink-0 text-[10px]">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

          </div>

        </div>

        {/* Modal Sticky Footer Action */}
        <div className="p-4 sm:p-6 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center space-x-2 w-full sm:w-auto">
            <span className="text-xs font-semibold text-slate-400">Añadir como:</span>
            <select
              value={selectedTiming}
              onChange={(e) => setSelectedTiming(e.target.value as MealTiming)}
              className="bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs font-bold text-emerald-300 focus:outline-none"
            >
              <option value="desayuno">🍳 Desayuno</option>
              <option value="pre_entreno">⚡ Pre-Entreno</option>
              <option value="post_entreno">🏋️ Post-Entreno</option>
              <option value="almuerzo">🥗 Almuerzo</option>
              <option value="cena">🌙 Cena</option>
              <option value="snack">🍌 Snack</option>
            </select>
          </div>

          <button
            onClick={() => onAddToPlanner(meal, selectedTiming)}
            className={`w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-3 rounded-xl font-bold text-sm transition-all ${
              isPlanned
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/20'
            }`}
          >
            {isPlanned ? (
              <>
                <Check className="w-4 h-4" />
                <span>En tu Plan Diario</span>
              </>
            ) : (
              <>
                <Plus className="w-4 h-4" />
                <span>Añadir a Mi Plan del Día</span>
              </>
            )}
          </button>

        </div>

      </div>
    </div>
  );
};
