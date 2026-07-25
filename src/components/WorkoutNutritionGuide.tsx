import React, { useState } from 'react';
import { Flame, Activity, Zap, Clock, ShieldCheck, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
import { MealItem, MealTiming } from '../types';

interface WorkoutNutritionGuideProps {
  onSelectTimingFilter: (timing: MealTiming) => void;
  meals: MealItem[];
  onSelectMeal: (meal: MealItem) => void;
}

export const WorkoutNutritionGuide: React.FC<WorkoutNutritionGuideProps> = ({
  onSelectTimingFilter,
  meals,
  onSelectMeal
}) => {
  const [activeWindow, setActiveWindow] = useState<'pre' | 'post'>('pre');

  const preWorkoutMeals = meals.filter(m => m.timing.includes('pre_entreno'));
  const postWorkoutMeals = meals.filter(m => m.timing.includes('post_entreno'));

  return (
    <div className="space-y-10 py-6">
      
      {/* Header Banner */}
      <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
            <Zap className="w-3.5 h-3.5" />
            <span>Optimizador de Rendimiento & Glucógeno</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
            Guía de Nutrición{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              Pre y Post Entrenamiento
            </span>
          </h2>

          <p className="text-slate-300 text-sm leading-relaxed">
            La sincronización de tus alimentos (Nutrient Timing) es fundamental para llegar con máxima fuerza a las series pesadas y encender la recuperación muscular inmediatamente al terminar de entrenar.
          </p>

          {/* Toggle Switch */}
          <div className="pt-2 flex items-center space-x-3">
            <button
              onClick={() => setActiveWindow('pre')}
              className={`flex items-center space-x-2 px-5 py-3 rounded-2xl font-bold text-sm transition-all ${
                activeWindow === 'pre'
                  ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              <Zap className="w-4 h-4" />
              <span>ANTES de Entrenar (Pre-Workout)</span>
            </button>

            <button
              onClick={() => setActiveWindow('post')}
              className={`flex items-center space-x-2 px-5 py-3 rounded-2xl font-bold text-sm transition-all ${
                activeWindow === 'post'
                  ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              <Activity className="w-4 h-4" />
              <span>DESPUÉS de Entrenar (Post-Workout)</span>
            </button>
          </div>

        </div>
      </div>

      {/* Pre-Workout Section Content */}
      {activeWindow === 'pre' && (
        <div className="space-y-8 animate-fade-in">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Timeline 1: 2-3 Hours Before */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
              <div className="flex items-center space-x-3 border-b border-slate-800 pb-3">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 font-bold">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">2 a 3 Horas Antes del Gimnasio</h3>
                  <p className="text-xs text-amber-400 font-medium">Comida Principal de Carga</p>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Permite la digestión completa de una comida sólida. Asegura depósitos de glucógeno cargados para soportar un alto volumen de entrenamiento sin fatiga prematura.
              </p>

              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between p-2 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="text-slate-400">Carbohidratos Complejos:</span>
                  <span className="font-bold text-teal-300">Avena, Camote, Arroz Integral, Quinua</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="text-slate-400">Proteína Magra:</span>
                  <span className="font-bold text-emerald-400">Pollo, Pavo, Claras de Huevo, Salmón</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="text-slate-400">Grasas:</span>
                  <span className="font-bold text-amber-300">Moderadas/Bajas (para agilizar digestión)</span>
                </div>
              </div>
            </div>

            {/* Timeline 2: 30-45 Mins Before */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
              <div className="flex items-center space-x-3 border-b border-slate-800 pb-3">
                <div className="p-2.5 rounded-xl bg-orange-500/10 text-orange-400 font-bold">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">30 a 45 Minutos Antes</h3>
                  <p className="text-xs text-orange-400 font-medium">Snack Expres de Fácil Digestión</p>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Diseñado para elevar la glucosa en sangre de manera controlada sin causar pesadez ni malestar estomacal durante las sentadillas o press de banca.
              </p>

              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between p-2 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="text-slate-400">Opción 1:</span>
                  <span className="font-bold text-orange-300">Banana con 1 cucharadita de Miel</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="text-slate-400">Opción 2:</span>
                  <span className="font-bold text-emerald-300">Yogurt Griego 0% con Frutos Rojos</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="text-slate-400">Opción 3:</span>
                  <span className="font-bold text-cyan-300">Tostada de pan de masa madre con mermelada</span>
                </div>
              </div>
            </div>

          </div>

          {/* Recommended Pre-Workout Meals */}
          <div className="space-y-4 pt-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Platillos Pre-Entreno Recomendados</span>
              </h3>
              <button
                onClick={() => onSelectTimingFilter('pre_entreno')}
                className="text-xs font-bold text-emerald-400 hover:underline flex items-center space-x-1"
              >
                <span>Ver todos los pre-entrenos</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {preWorkoutMeals.map((meal) => (
                <div
                  key={meal.id}
                  onClick={() => onSelectMeal(meal)}
                  className="bg-slate-900 border border-slate-800 hover:border-amber-500/50 p-4 rounded-2xl cursor-pointer flex space-x-4 items-center group transition-all"
                >
                  <img
                    src={meal.image}
                    alt={meal.title}
                    referrerPolicy="no-referrer"
                    className="w-16 h-16 rounded-xl object-cover flex-shrink-0 group-hover:scale-105 transition-transform"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="font-bold text-white text-xs truncate group-hover:text-amber-400">
                      {meal.title}
                    </p>

                    <div className="flex items-center space-x-2 text-[11px] text-slate-400 mt-1">
                      <span className="text-amber-400 font-bold">{meal.macros.calories} kcal</span>
                      <span>•</span>
                      <span className="text-emerald-400 font-bold">{meal.macros.protein}g Prot</span>
                    </div>

                    <span className="inline-block mt-1 text-[10px] text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                      {meal.prepTimeMinutes + meal.cookTimeMinutes} min
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

      {/* Post-Workout Section Content */}
      {activeWindow === 'post' && (
        <div className="space-y-8 animate-fade-in">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Window 1: Immediate Post Workout */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
              <div className="flex items-center space-x-3 border-b border-slate-800 pb-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 font-bold">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Ventana Inmediata (0 a 45 min)</h3>
                  <p className="text-xs text-emerald-400 font-medium">Recarga Líquida / Batido Proteico</p>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Prioriza la velocidad de absorción. Aporta aminoácidos clave (leucina) para iniciar la síntesis de proteína muscular y detener el catabolismo del entrenamiento.
              </p>

              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between p-2 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="text-slate-400">Proteína Rápida:</span>
                  <span className="font-bold text-emerald-400">1.5 scoops Whey Isolate o Claras</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="text-slate-400">Carbohidratos:</span>
                  <span className="font-bold text-teal-300">Avena instantánea, Frutas o Amilopectina</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="text-slate-400">Suplemento Clave:</span>
                  <span className="font-bold text-cyan-300">3-5g Monohidrato de Creatina</span>
                </div>
              </div>
            </div>

            {/* Window 2: 1-2 Hours After */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
              <div className="flex items-center space-x-3 border-b border-slate-800 pb-3">
                <div className="p-2.5 rounded-xl bg-teal-500/10 text-teal-400 font-bold">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">1 a 2 Horas Después</h3>
                  <p className="text-xs text-teal-400 font-medium">Comida Sólida Completa</p>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Sustenta el proceso de hipertrofia durante las horas siguientes. Aporta nutrientes de digestión sostenida para mantener el balance nitrogenado positivo.
              </p>

              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between p-2 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="text-slate-400">Platillo Ideal 1:</span>
                  <span className="font-bold text-emerald-300">Pecho de pollo con quinua y camote</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="text-slate-400">Platillo Ideal 2:</span>
                  <span className="font-bold text-teal-300">Salmón a la plancha con arroz y vegetales</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="text-slate-400">Platillo Ideal 3:</span>
                  <span className="font-bold text-cyan-300">Bife magro de res con papas horneadas</span>
                </div>
              </div>
            </div>

          </div>

          {/* Recommended Post-Workout Meals */}
          <div className="space-y-4 pt-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>Platillos Post-Entreno Recomendados</span>
              </h3>
              <button
                onClick={() => onSelectTimingFilter('post_entreno')}
                className="text-xs font-bold text-emerald-400 hover:underline flex items-center space-x-1"
              >
                <span>Ver todos los post-entrenos</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {postWorkoutMeals.map((meal) => (
                <div
                  key={meal.id}
                  onClick={() => onSelectMeal(meal)}
                  className="bg-slate-900 border border-slate-800 hover:border-emerald-500/50 p-4 rounded-2xl cursor-pointer flex space-x-4 items-center group transition-all"
                >
                  <img
                    src={meal.image}
                    alt={meal.title}
                    referrerPolicy="no-referrer"
                    className="w-16 h-16 rounded-xl object-cover flex-shrink-0 group-hover:scale-105 transition-transform"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="font-bold text-white text-xs truncate group-hover:text-emerald-400">
                      {meal.title}
                    </p>

                    <div className="flex items-center space-x-2 text-[11px] text-slate-400 mt-1">
                      <span className="text-amber-400 font-bold">{meal.macros.calories} kcal</span>
                      <span>•</span>
                      <span className="text-emerald-400 font-bold">{meal.macros.protein}g Prot</span>
                    </div>

                    <span className="inline-block mt-1 text-[10px] text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                      {meal.prepTimeMinutes + meal.cookTimeMinutes} min
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

    </div>
  );
};
