import React, { useState } from 'react';
import { Clock, Plus, Check, ChevronRight, Flame, ShoppingBag, ShoppingCart } from 'lucide-react';
import { MealItem } from '../types';

interface MealCardProps {
  meal: MealItem;
  onSelect: (meal: MealItem) => void;
  onAddToCart: (meal: MealItem) => void;
  onAddToPlanner: (meal: MealItem) => void;
  isPlanned: boolean;
}

export const MealCard: React.FC<MealCardProps> = ({
  meal,
  onSelect,
  onAddToCart,
  onAddToPlanner,
  isPlanned,
}) => {
  const [addedAnimation, setAddedAnimation] = useState(false);

  const handleAddToCartClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(meal);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1200);
  };

  const categoryLabels: Record<string, string> = {
    proteinas: 'Proteína',
    desayunos: 'Desayuno',
    batidos: 'Batido',
    snacks: 'Snack',
  };

  return (
    <div className="group bg-slate-900 border border-slate-800 hover:border-emerald-500/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300 flex flex-col">
      
      {/* Image Header with Overlay Badges */}
      <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-950 cursor-pointer" onClick={() => onSelect(meal)}>
        <img
          src={meal.image}
          alt={meal.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <span className="bg-slate-950/90 backdrop-blur-md border border-slate-700/80 px-2.5 py-1 rounded-full text-[11px] font-bold text-emerald-400 flex items-center space-x-1">
            <Flame className="w-3 h-3 text-amber-400" />
            <span>{meal.macros.calories} kcal</span>
          </span>

          <span className="bg-emerald-500 text-slate-950 px-3 py-1 rounded-full text-xs font-black shadow-lg shadow-emerald-500/30">
            ${meal.price ? meal.price.toFixed(2) : '10.99'}
          </span>
        </div>

        {/* Category & Goal Badges */}
        <div className="absolute bottom-3 left-3 right-3 flex flex-wrap items-center justify-between gap-1">
          <span className="bg-slate-950/90 text-amber-400 border border-amber-500/40 text-[10px] font-extrabold px-2 py-0.5 rounded-md uppercase tracking-wider">
            {categoryLabels[meal.category] || 'Platillo'}
          </span>

          <div className="flex gap-1">
            {meal.goal.slice(0, 1).map((g) => {
              const labels: Record<string, string> = {
                masa_muscular: '💪 Masa',
                reducir_grasa: '🔥 Definición',
                aumentar_fuerza: '⚡ Fuerza',
                recuperacion: '🧘 Recuperación',
              };
              return (
                <span
                  key={g}
                  className="bg-slate-900/90 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold px-2 py-0.5 rounded-md"
                >
                  {labels[g] || g}
                </span>
              );
            })}
          </div>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        
        <div>
          <h3 
            onClick={() => onSelect(meal)}
            className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors cursor-pointer line-clamp-1"
          >
            {meal.title}
          </h3>
          <p className="text-xs text-slate-400 line-clamp-2 mt-1 font-normal">
            {meal.subtitle}
          </p>
        </div>

        {/* Macros Grid */}
        <div className="grid grid-cols-3 gap-2 bg-slate-950/80 p-2.5 rounded-xl border border-slate-800 text-center">
          <div>
            <span className="block text-[10px] text-slate-400 font-semibold uppercase">Proteína</span>
            <span className="text-xs font-black text-emerald-400">{meal.macros.protein}g</span>
          </div>
          <div>
            <span className="block text-[10px] text-slate-400 font-semibold uppercase">Carbs</span>
            <span className="text-xs font-black text-teal-300">{meal.macros.carbs}g</span>
          </div>
          <div>
            <span className="block text-[10px] text-slate-400 font-semibold uppercase">Grasas</span>
            <span className="text-xs font-black text-amber-300">{meal.macros.fats}g</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 space-y-2">
          
          {/* Main Add to Cart Button */}
          <button
            onClick={handleAddToCartClick}
            className={`w-full py-2.5 px-4 rounded-xl text-xs font-black transition-all flex items-center justify-center space-x-2 ${
              addedAnimation
                ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/20 scale-95'
                : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-md shadow-emerald-500/10'
            }`}
          >
            {addedAnimation ? (
              <>
                <Check className="w-4 h-4 text-slate-950" />
                <span>¡Añadido al Carrito!</span>
              </>
            ) : (
              <>
                <ShoppingCart className="w-4 h-4 text-slate-950" />
                <span>Añadir al Carrito</span>
              </>
            )}
          </button>

          {/* Secondary Buttons */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => onSelect(meal)}
              className="flex-1 flex items-center justify-center space-x-1 py-1.5 px-3 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 text-[11px] font-semibold border border-slate-700/80 transition-colors"
            >
              <span>Ver detalles</span>
              <ChevronRight className="w-3 h-3 text-slate-400" />
            </button>

            <button
              onClick={() => onAddToPlanner(meal)}
              className={`py-1.5 px-3 rounded-lg text-[11px] font-semibold transition-all flex items-center space-x-1 ${
                isPlanned
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                  : 'bg-slate-800 text-slate-300 hover:text-white border border-slate-700'
              }`}
              title={isPlanned ? 'En tu plan' : 'Añadir a plan diario'}
            >
              {isPlanned ? <Check className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
              <span>{isPlanned ? 'En plan' : 'Plan'}</span>
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
