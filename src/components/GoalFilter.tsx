import React from 'react';
import { Search, Clock, ArrowUpDown, Filter } from 'lucide-react';
import { FitnessGoal, MealTiming } from '../types';

interface GoalFilterProps {
  selectedGoal: FitnessGoal | 'all';
  setSelectedGoal: (goal: FitnessGoal | 'all') => void;
  selectedTiming: MealTiming | 'all';
  setSelectedTiming: (timing: MealTiming | 'all') => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  sortBy: 'default' | 'protein' | 'calories_asc' | 'prep_time';
  setSortBy: (sort: 'default' | 'protein' | 'calories_asc' | 'prep_time') => void;
  totalResults: number;
}

export const GoalFilter: React.FC<GoalFilterProps> = ({
  selectedGoal,
  setSelectedGoal,
  selectedTiming,
  setSelectedTiming,
  searchQuery,
  setSearchQuery,
  sortBy,
  setSortBy,
  totalResults
}) => {
  const goalTabs: { id: FitnessGoal | 'all'; label: string }[] = [
    { id: 'all', label: 'Todos los Objetivos' },
    { id: 'masa_muscular', label: '💪 Ganar Masa Muscular' },
    { id: 'reducir_grasa', label: '🔥 Reducir Grasa' },
    { id: 'aumentar_fuerza', label: '⚡ Aumentar Fuerza' },
    { id: 'recuperacion', label: '🧘 Recuperación' },
  ];

  const timingTabs: { id: MealTiming | 'all'; label: string }[] = [
    { id: 'all', label: 'Cualquier Momento' },
    { id: 'pre_entreno', label: '⚡ Pre-Entreno' },
    { id: 'post_entreno', label: '🏋️ Post-Entreno' },
    { id: 'desayuno', label: '🍳 Desayuno' },
    { id: 'almuerzo', label: '🥗 Almuerzo' },
    { id: 'cena', label: '🌙 Cena' },
    { id: 'snack', label: '🍌 Snacks' },
  ];

  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 mb-8 shadow-xl">
      
      {/* Top Filter Bar: Search & Sort */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Buscar por platillo, ingrediente (ej. pollo, avena, salmón, quinua)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-white"
            >
              Limpiar
            </button>
          )}
        </div>

        {/* Sort Dropdown & Count */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-300">
            <ArrowUpDown className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-slate-400 hidden sm:inline">Ordenar:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-transparent text-slate-200 font-semibold focus:outline-none cursor-pointer"
            >
              <option value="default" className="bg-slate-900 text-slate-200">Recomendados</option>
              <option value="protein" className="bg-slate-900 text-slate-200">Más alto en proteína</option>
              <option value="calories_asc" className="bg-slate-900 text-slate-200">Menos calorías</option>
              <option value="prep_time" className="bg-slate-900 text-slate-200">Más rápido de preparar</option>
            </select>
          </div>

          <div className="text-xs font-bold px-3 py-2 rounded-xl bg-slate-800 text-emerald-400 border border-slate-700/60 whitespace-nowrap">
            {totalResults} {totalResults === 1 ? 'platillo' : 'platillos'}
          </div>
        </div>

      </div>

      {/* Goal Filters Row */}
      <div className="pt-4 space-y-3">
        <div className="flex items-center space-x-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
          <Filter className="w-3.5 h-3.5 text-emerald-400" />
          <span>Filtrar por Objetivo Físico:</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {goalTabs.map((tab) => {
            const isActive = selectedGoal === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedGoal(tab.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                  isActive
                    ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                    : 'bg-slate-950 text-slate-300 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Timing Filters Row */}
      <div className="pt-3 space-y-2 border-t border-slate-800/80 mt-3">
        <div className="flex items-center space-x-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
          <Clock className="w-3.5 h-3.5 text-teal-400" />
          <span>Momento del Día / Entrenamiento:</span>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {timingTabs.map((tab) => {
            const isActive = selectedTiming === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedTiming(tab.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-teal-500 text-slate-950 font-bold'
                    : 'bg-slate-950/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

    </div>
  );
};
