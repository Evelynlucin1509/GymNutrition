import React from 'react';
import { Dumbbell, Target, Flame, Sparkles, ChevronRight, Zap } from 'lucide-react';
import { FitnessGoal } from '../types';

import proteinBowlImg from '../assets/images/gym_protein_bowl_1784952346493.jpg';
import gymLogo from '../assets/images/gymnutrition_logo_1784952810347.jpg';
import gymHeroCover from '../assets/images/gym_hero_cover_1784952937983.jpg';
import gymnutritionWebBanner from '../assets/images/gymnutrition_web_banner_1784953112353.jpg';

interface HeroProps {
  selectedGoal: FitnessGoal;
  onSelectGoal: (goal: FitnessGoal) => void;
  onOpenAI: () => void;
  onOpenCalculator: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  selectedGoal,
  onSelectGoal,
  onOpenAI,
  onOpenCalculator
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
      title: 'Reducir Grasa Corporal',
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Nutrición Científica para el Gimnasio</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Alimenta tus entrenamientos según tus{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                objetivos físicos
              </span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              GymNutrition te ayuda a elegir el menú exacto para hipertrofia, quemar grasa, potencia y recuperación muscular. Descubre platillos saludables con desglose de macros, recomendaciones de pre y post entreno y asesoría personalizada con IA.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={onOpenAI}
                className="flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-sm shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/30 transform hover:-translate-y-0.5 transition-all"
              >
                <Sparkles className="w-4 h-4 fill-slate-950" />
                <span>Asistente IA GymNutrition</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenCalculator}
                className="flex items-center space-x-2 px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 font-semibold text-sm border border-slate-700 transition-all"
              >
                <Dumbbell className="w-4 h-4 text-emerald-400" />
                <span>Calcular Mis Macros</span>
              </button>
            </div>

            {/* Goal Selector Matrix */}
            <div className="pt-6">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                Selecciona tu objetivo físico actual:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {goals.map((item) => {
                  const isSelected = selectedGoal === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => onSelectGoal(item.id)}
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

          {/* Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Card Container */}
              <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 p-3 shadow-2xl group">
                <div className="relative h-72 sm:h-88 rounded-2xl overflow-hidden">
                  <img
                    src={gymHeroCover}
                    alt="Nutrición deportiva y gimnasio moderno - Pollo, Arroz, Brócoli, Aguacate, Huevos, Avena y Batido de Proteínas"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 bg-slate-950/85 backdrop-blur-md border border-slate-700/80 px-3 py-1.5 rounded-full text-xs font-bold text-emerald-400 flex items-center space-x-1.5 shadow-lg">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Experiencia Fitness & Nutrición 4K</span>
                  </div>

                  {/* Bottom Bar Info */}
                  <div className="absolute bottom-3 left-3 right-3 bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-xl p-3 text-white">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-bold text-slate-100 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                        Alimentación & Entrenamiento de Alto Rendimiento
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-300 leading-tight">
                      Pollo a la parrilla, arroz integral, brócoli, aguacate, huevos, avena y batido proteico en gimnasio moderno.
                    </p>

                    <div className="grid grid-cols-3 gap-2 text-center text-xs pt-2 mt-2 border-t border-slate-800">
                      <div className="bg-slate-950/70 p-1.5 rounded-lg border border-slate-800">
                        <span className="block text-[9px] text-slate-400 uppercase font-semibold">Proteína</span>
                        <span className="font-bold text-emerald-400">65g</span>
                      </div>
                      <div className="bg-slate-950/70 p-1.5 rounded-lg border border-slate-800">
                        <span className="block text-[9px] text-slate-400 uppercase font-semibold">Carbohidratos</span>
                        <span className="font-bold text-teal-300">70g</span>
                      </div>
                      <div className="bg-slate-950/70 p-1.5 rounded-lg border border-slate-800">
                        <span className="block text-[9px] text-slate-400 uppercase font-semibold">Grasas Saludables</span>
                        <span className="font-bold text-amber-300">18g</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Decorative Floating Pill */}
              <div className="absolute -bottom-5 -left-5 bg-slate-900 border border-slate-700/80 rounded-2xl p-3 shadow-xl flex items-center space-x-3 text-xs hidden sm:flex">
                <div className="w-10 h-10 rounded-xl overflow-hidden bg-slate-950 border border-slate-800 p-0.5 flex-shrink-0">
                  <img src={gymLogo} alt="Logo" className="w-full h-full object-cover rounded-lg" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <p className="font-bold text-white">Logo Oficial GymNutrition</p>
                  <p className="text-slate-400 text-[11px]">Diseño minimalista fitness & nutrición</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Panoramic Web Banner Section */}
        <div className="mt-12 pt-8 border-t border-slate-800/80">
          <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl group">
            <div className="aspect-[16/9] md:aspect-[21/9] w-full relative overflow-hidden bg-slate-900">
              <img
                src={gymnutritionWebBanner}
                alt="Banner Oficial GymNutrition 4K - Atleta con plato saludable y batido de proteína en gimnasio moderno"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/60 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />

              {/* Banner Text Overlay */}
              <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-between max-w-2xl text-white">
                <div className="space-y-2">
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Plataforma Oficial GymNutrition</span>
                  </div>
                  <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white drop-shadow-md">
                    Gym<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-400">Nutrition</span>
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed max-w-lg hidden sm:block drop-shadow">
                    Potencia tu rendimiento físico con planes de alimentación deportiva hiperrealistas, recetas adaptadas a tus macros y nutrición con evidencia para gimnasio.
                  </p>
                </div>

                <div className="flex items-center space-x-4 pt-2">
                  <button
                    onClick={onOpenCalculator}
                    className="px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs sm:text-sm shadow-lg shadow-emerald-500/20 transition-all flex items-center space-x-2"
                  >
                    <span>Comenzar Tu Plan</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <span className="text-xs font-bold text-slate-300 bg-slate-900/80 px-3 py-2 rounded-lg border border-slate-700/80 backdrop-blur-sm hidden sm:inline-block">
                    Calidad 4K & Nutrición Gourmet
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
