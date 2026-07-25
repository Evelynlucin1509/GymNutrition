import React, { useState } from 'react';
import { Calendar, Trash2, Plus, Droplets, CheckCircle2, Flame, Award, Printer, ArrowLeft } from 'lucide-react';
import { PlannedMealEntry, CalculatedMacros, MealTiming } from '../types';

interface DailyPlannerProps {
  plannedEntries: PlannedMealEntry[];
  onRemoveEntry: (id: string) => void;
  onClearAll: () => void;
  calculatedMacros?: CalculatedMacros | null;
  onBackToMeals: () => void;
}

export const DailyPlanner: React.FC<DailyPlannerProps> = ({
  plannedEntries,
  onRemoveEntry,
  onClearAll,
  calculatedMacros,
  onBackToMeals,
}) => {
  const [waterDrunkMl, setWaterDrunkMl] = useState<number>(1000);

  // Targets
  const targetCalories = calculatedMacros?.targetCalories || 2400;
  const targetProtein = calculatedMacros?.proteinGrams || 160;
  const targetCarbs = calculatedMacros?.carbsGrams || 240;
  const targetFats = calculatedMacros?.fatsGrams || 65;
  const targetWaterLiters = calculatedMacros?.waterLiters || 3.0;

  // Sums
  const currentCalories = plannedEntries.reduce((sum, e) => sum + e.meal.macros.calories, 0);
  const currentProtein = plannedEntries.reduce((sum, e) => sum + e.meal.macros.protein, 0);
  const currentCarbs = plannedEntries.reduce((sum, e) => sum + e.meal.macros.carbs, 0);
  const currentFats = plannedEntries.reduce((sum, e) => sum + e.meal.macros.fats, 0);

  const addWater = (amountMl: number) => {
    setWaterDrunkMl((prev) => Math.max(0, prev + amountMl));
  };

  const timingLabels: Record<MealTiming, string> = {
    desayuno: '🍳 Desayuno Fitness',
    pre_entreno: '⚡ Pre-Entreno',
    post_entreno: '🏋️ Post-Entreno',
    almuerzo: '🥗 Almuerzo Proteico',
    cena: '🌙 Cena Recuperadora',
    snack: '🍌 Snacks & Batidos',
  };

  const groupedEntries = (['desayuno', 'pre_entreno', 'post_entreno', 'almuerzo', 'cena', 'snack'] as MealTiming[]).map(timing => ({
    timing,
    label: timingLabels[timing],
    items: plannedEntries.filter(e => e.timing === timing)
  }));

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-8 py-6">
      
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">
        <div className="space-y-1">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-bold">
            <Calendar className="w-3.5 h-3.5" />
            <span>Mi Planificador Diario</span>
          </div>
          <h2 className="text-2xl font-black text-white">Mi Plan Nutricional del Día</h2>
          <p className="text-xs text-slate-400">
            Seguimiento en tiempo real de tus calorías, proteínas y consumo de agua.
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={handlePrint}
            className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 transition-colors"
          >
            <Printer className="w-4 h-4" />
            <span className="hidden sm:inline">Imprimir Plan</span>
          </button>

          {plannedEntries.length > 0 && (
            <button
              onClick={onClearAll}
              className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 text-xs font-bold border border-red-500/30 transition-colors"
            >
              <Trash2 className="w-4 h-4" />
              <span>Vaciar Día</span>
            </button>
          )}
        </div>
      </div>

      {/* Macro Progress Dashboard Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Calories Progress Card */}
        <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-3">
          <div className="flex justify-between items-center text-xs font-bold">
            <span className="text-slate-400 flex items-center space-x-1">
              <Flame className="w-4 h-4 text-amber-400" />
              <span>Calorías Totales</span>
            </span>
            <span className="text-emerald-400">{currentCalories} / {targetCalories} kcal</span>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-slate-950 h-3 rounded-full overflow-hidden p-0.5 border border-slate-800">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-500"
              style={{ width: `${Math.min(100, (currentCalories / targetCalories) * 100)}%` }}
            />
          </div>
          <p className="text-[11px] text-slate-400 text-right font-medium">
            {Math.max(0, targetCalories - currentCalories)} kcal restantes
          </p>
        </div>

        {/* Protein Progress Card */}
        <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-3">
          <div className="flex justify-between items-center text-xs font-bold">
            <span className="text-slate-400">Proteína Magra</span>
            <span className="text-teal-300">{currentProtein} / {targetProtein}g</span>
          </div>

          <div className="w-full bg-slate-950 h-3 rounded-full overflow-hidden p-0.5 border border-slate-800">
            <div
              className="h-full bg-teal-400 rounded-full transition-all duration-500"
              style={{ width: `${Math.min(100, (currentProtein / targetProtein) * 100)}%` }}
            />
          </div>
          <p className="text-[11px] text-slate-400 text-right font-medium">
            {Math.max(0, targetProtein - currentProtein)}g faltantes
          </p>
        </div>

        {/* Carbs Progress Card */}
        <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-3">
          <div className="flex justify-between items-center text-xs font-bold">
            <span className="text-slate-400">Carbohidratos</span>
            <span className="text-cyan-300">{currentCarbs} / {targetCarbs}g</span>
          </div>

          <div className="w-full bg-slate-950 h-3 rounded-full overflow-hidden p-0.5 border border-slate-800">
            <div
              className="h-full bg-cyan-400 rounded-full transition-all duration-500"
              style={{ width: `${Math.min(100, (currentCarbs / targetCarbs) * 100)}%` }}
            />
          </div>
          <p className="text-[11px] text-slate-400 text-right font-medium">
            {Math.max(0, targetCarbs - currentCarbs)}g faltantes
          </p>
        </div>

        {/* Fats Progress Card */}
        <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-3">
          <div className="flex justify-between items-center text-xs font-bold">
            <span className="text-slate-400">Grasas Saludables</span>
            <span className="text-amber-300">{currentFats} / {targetFats}g</span>
          </div>

          <div className="w-full bg-slate-950 h-3 rounded-full overflow-hidden p-0.5 border border-slate-800">
            <div
              className="h-full bg-amber-400 rounded-full transition-all duration-500"
              style={{ width: `${Math.min(100, (currentFats / targetFats) * 100)}%` }}
            />
          </div>
          <p className="text-[11px] text-slate-400 text-right font-medium">
            {Math.max(0, targetFats - currentFats)}g faltantes
          </p>
        </div>

      </div>

      {/* Water Intake Tracker Bar */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">
            <Droplets className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-white text-sm">Control de Hidratación Deportiva</h4>
            <p className="text-xs text-slate-400">
              Llevas <strong className="text-cyan-300">{(waterDrunkMl / 1000).toFixed(2)}L</strong> de {targetWaterLiters}L recomendados
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => addWater(-250)}
            className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 hover:text-white text-xs font-bold"
          >
            - 250ml
          </button>
          <button
            onClick={() => addWater(250)}
            className="px-3.5 py-1.5 rounded-lg bg-cyan-500 text-slate-950 text-xs font-bold hover:bg-cyan-400"
          >
            + 250ml
          </button>
          <button
            onClick={() => addWater(500)}
            className="px-3.5 py-1.5 rounded-lg bg-cyan-500 text-slate-950 text-xs font-bold hover:bg-cyan-400"
          >
            + 500ml
          </button>
        </div>
      </div>

      {/* Meals List by Timing */}
      <div className="space-y-6">
        {plannedEntries.length === 0 ? (
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-12 text-center space-y-4">
            <Calendar className="w-12 h-12 text-slate-700 mx-auto" />
            <h3 className="font-bold text-white text-lg">Aún no has agregado platillos a tu día</h3>
            <p className="text-xs text-slate-400 max-w-md mx-auto">
              Explora nuestro catálogo de recetas fitness para ganar masa muscular o perder grasa y presiona el botón "+" para agregarlas a tu plan.
            </p>
            <button
              onClick={onBackToMeals}
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Explorar Platillos Fitness</span>
            </button>
          </div>
        ) : (
          groupedEntries.map(group => {
            if (group.items.length === 0) return null;
            return (
              <div key={group.timing} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
                <h3 className="font-bold text-emerald-400 text-sm border-b border-slate-800 pb-2">
                  {group.label} ({group.items.length})
                </h3>

                <div className="space-y-3">
                  {group.items.map(entry => (
                    <div
                      key={entry.id}
                      className="bg-slate-950 border border-slate-800/80 p-3.5 rounded-xl flex items-center justify-between gap-4"
                    >
                      <div className="flex items-center space-x-3.5 min-w-0">
                        <img
                          src={entry.meal.image}
                          alt={entry.meal.title}
                          referrerPolicy="no-referrer"
                          className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                        />
                        <div className="min-w-0">
                          <p className="font-bold text-white text-xs truncate">{entry.meal.title}</p>
                          <div className="flex items-center space-x-2 text-[11px] text-slate-400 mt-0.5">
                            <span className="text-emerald-400 font-bold">{entry.meal.macros.calories} kcal</span>
                            <span>•</span>
                            <span className="text-teal-300 font-bold">{entry.meal.macros.protein}g Prot</span>
                            <span>•</span>
                            <span className="text-cyan-300">{entry.meal.macros.carbs}g Carbs</span>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => onRemoveEntry(entry.id)}
                        className="p-2 text-slate-500 hover:text-red-400 hover:bg-slate-900 rounded-lg transition-colors"
                        title="Eliminar de mi día"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            );
          })
        )}
      </div>

    </div>
  );
};
