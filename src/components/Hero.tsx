import React from 'react';
import { Dumbbell, Target, Flame, Sparkles, ChevronRight, Zap, ShoppingBag, Utensils } from 'lucide-react';
import { FitnessGoal } from '../types';

import gymnutritionWebBanner from '../assets/images/gymnutrition_web_banner_1784953112353.jpg';

interface HeroProps {
  selectedGoal: FitnessGoal;
  onSelectGoal: (goal: FitnessGoal) => void;
  onOpenAI: () => void;
  onOpenCalculator: () => void;
  onViewProducts: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  selectedGoal,
  onSelectGoal,
  onOpenAI,
  onOpenCalculator,
  onViewProducts,
}) => {
  const goals: { id: FitnessGoal; title: string; subtitle: string; icon: React.ReactNode; color: string }[] = [
    {
      id: 'masa_muscular',
      title: 'Ganar Masa Muscular',
      subtitle: 'Hipertrofia & Superávit Proteico',
      icon: <Dumbbell className="w-5 h-5 text-emerald-400" />,
      color: 'from-emerald-500/20 to-teal-500/10 border-emerald-500/40'
    },
    {
      id: 'reducir_grasa',
      title: 'Definición Muscular',
      subtitle: 'Definición & Déficit Saciante',
      icon: <Flame className="w-5 h-5 text-amber-400" />,
      color: 'from-amber-500/20 to-orange-500/10 border-amber-500/40'
    },
    {
      id: 'aumentar_fuerza',
      title: 'Aumentar Fuerza',
      subtitle: 'Rendimiento & Densidad Calórica',
      icon: <Zap className="w-5 h-5 text-cyan-400" />,
      color: 'from-cyan-500/20 to-blue-500/10 border-cyan-500/40'
    },
    {
      id: 'recuperacion',
      title: 'Mejorar Recuperación',
      subtitle: 'Antiinflamatorio & Glucógeno',
      icon: <Target className="w-5 h-5 text-indigo-400" />,
      color: 'from-indigo-500/20 to-purple-500/10 border-indigo-500/40'
    }
  ];

  return (
    <div className="relative overflow-hidden bg-slate-950 text-white pt-8 pb-14 border-b border-slate-800">
      {/* Background Subtle Glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Top Panoramic Web Banner Section - PLATAFORMA OFICIAL GYMNUTRITION */}
        <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl group">
          <div className="aspect-[16/9] md:aspect-[21/9] w-full relative overflow-hidden bg-slate-900">
            <img
              src={gymnutritionWebBanner}
              alt="Banner Panorámico GymNutrition 4K - Atleta con plato saludable"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />

            {/* Banner Text Overlay */}
            <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-between max-w-2xl text-white">
              <div className="space-y-3">
                <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/50 text-emerald-300 text-xs font-black uppercase tracking-wider backdrop-blur-md shadow-lg">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span>PLATAFORMA OFICIAL GYMNUTRITION</span>
                </div>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white drop-shadow-md">
                  Gym<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-400">Nutrition</span>
                </h1>
                <p className="text-xs sm:text-base text-slate-200 font-medium leading-relaxed max-w-xl drop-shadow">
                  Plataforma oficial de nutrición deportiva en Guayas, Ecuador. Menús fitness gourmet preparados para hipertrofia, definición y máximo rendimiento muscular.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-4">
                <button
                  onClick={onViewProducts}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-black text-xs sm:text-sm shadow-xl shadow-emerald-500/20 transition-all flex items-center space-x-2"
                >
                  <Utensils className="w-4 h-4 text-slate-950" />
                  <span>Explorar Productos</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onOpenCalculator}
                  className="px-5 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-bold text-xs sm:text-sm border border-slate-700/80 backdrop-blur-sm transition-all flex items-center space-x-2"
                >
                  <Dumbbell className="w-4 h-4 text-emerald-400" />
                  <span>Calculadora de Macros</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Content Section */}
        <div className="max-w-4xl mx-auto space-y-6">
          
          {/* Main Hero Copy */}
          <div className="space-y-6">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Nutrición Deportiva & Gym Gourmet</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white leading-tight">
              Alimenta tu cuerpo,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-400">
                alcanza tus metas.
              </span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
              GymNutrition te ayuda a elegir y comprar el menú saludable perfecto según tu objetivo físico: ganar masa muscular, definición muscular, aumentar fuerza o acelerar tu recuperación muscular. Platillos fitness gourmet listos para consumir.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={onViewProducts}
                className="flex items-center space-x-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-black text-xs sm:text-sm shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/30 transform hover:-translate-y-0.5 transition-all"
              >
                <Utensils className="w-4 h-4 text-slate-950" />
                <span>Ver Productos</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenCalculator}
                className="flex items-center space-x-2 px-5 py-3.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-100 font-bold text-xs sm:text-sm border border-slate-700 transition-all"
              >
                <Dumbbell className="w-4 h-4 text-emerald-400" />
                <span>Calculadora de Macros</span>
              </button>

              <button
                onClick={onOpenAI}
                className="flex items-center space-x-2 px-5 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-emerald-300 font-bold text-xs sm:text-sm border border-emerald-500/30 transition-all"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Asistente NutriAI</span>
              </button>
            </div>

            {/* Goal Selector Matrix */}
            <div className="pt-4">
              <p className="text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-3">
                Selecciona tu objetivo deportivo para ver productos recomendados:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {goals.map((item) => {
                  const isSelected = selectedGoal === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        onSelectGoal(item.id);
                        onViewProducts();
                      }}
                      className={`flex items-start space-x-3.5 p-3.5 rounded-2xl border text-left transition-all duration-200 ${
                        isSelected
                          ? `bg-slate-800/90 border-emerald-400 ring-2 ring-emerald-400/30 shadow-lg shadow-emerald-500/10`
                          : `bg-slate-900/60 hover:bg-slate-800/80 border-slate-800 hover:border-slate-700`
                      }`}
                    >
                      <div className={`p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex-shrink-0`}>
                        {item.icon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between">
                          <p className={`text-sm font-bold ${isSelected ? 'text-emerald-300' : 'text-slate-200'}`}>
                            {item.title}
                          </p>
                          {isSelected && (
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          )}
                        </div>
                        <p className="text-xs text-slate-400 truncate mt-0.5">
                          {item.subtitle}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
