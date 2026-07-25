import React from 'react';
import { Dumbbell, Utensils, Calculator, Sparkles, BookOpen, Calendar, Flame } from 'lucide-react';
import gymLogo from '../assets/images/gymnutrition_logo_1784952810347.jpg';

interface HeaderProps {
  activeTab: 'meals' | 'guide' | 'calculator' | 'ai' | 'planner' | 'articles';
  setActiveTab: (tab: 'meals' | 'guide' | 'calculator' | 'ai' | 'planner' | 'articles') => void;
  plannedCount: number;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, plannedCount }) => {
  return (
    <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand */}
          <div 
            onClick={() => setActiveTab('meals')}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="w-11 h-11 rounded-xl overflow-hidden bg-slate-900 ring-2 ring-emerald-500/40 shadow-md shadow-emerald-500/20 group-hover:scale-105 group-hover:ring-emerald-400 transition-all duration-200 flex items-center justify-center p-0.5">
              <img 
                src={gymLogo} 
                alt="GymNutrition Logo" 
                className="w-full h-full object-cover rounded-lg"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="text-xl font-black tracking-tight text-white">Gym</span>
                <span className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-400">
                  Nutrition
                </span>
              </div>
              <p className="text-[10px] text-emerald-400/90 font-medium tracking-wide uppercase flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Nutrición Deportivo & Gym
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 bg-slate-800/60 p-1.5 rounded-2xl border border-slate-700/50">
            <button
              onClick={() => setActiveTab('meals')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeTab === 'meals'
                  ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <Utensils className="w-4 h-4" />
              <span>Platillos Fitness</span>
            </button>

            <button
              onClick={() => setActiveTab('guide')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeTab === 'guide'
                  ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <Flame className="w-4 h-4" />
              <span>Pre & Post Entreno</span>
            </button>

            <button
              onClick={() => setActiveTab('calculator')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeTab === 'calculator'
                  ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <Calculator className="w-4 h-4" />
              <span>Calculadora</span>
            </button>

            <button
              onClick={() => setActiveTab('ai')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeTab === 'ai'
                  ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <Sparkles className="w-4 h-4 text-emerald-300" />
              <span>NutriAI Assistant</span>
            </button>

            <button
              onClick={() => setActiveTab('articles')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeTab === 'articles'
                  ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Guías</span>
            </button>
          </nav>

          {/* Action Button - Daily Planner Counter */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setActiveTab('planner')}
              className={`relative flex items-center space-x-2.5 px-4 py-2.5 rounded-xl font-bold text-sm transition-all duration-200 ${
                activeTab === 'planner'
                  ? 'bg-teal-500 text-slate-950 shadow-lg shadow-teal-500/25 ring-2 ring-teal-400/50'
                  : 'bg-slate-800 text-slate-100 hover:bg-slate-700 border border-slate-700/80'
              }`}
            >
              <Calendar className="w-4 h-4 text-emerald-400" />
              <span className="hidden sm:inline">Mi Plan del Día</span>
              {plannedCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-emerald-400 text-slate-950 text-xs font-extrabold flex items-center justify-center animate-pulse">
                  {plannedCount}
                </span>
              )}
            </button>
          </div>

        </div>

        {/* Mobile Sub-Navigation Bar */}
        <div className="flex lg:hidden overflow-x-auto py-2.5 space-x-2 border-t border-slate-800 no-scrollbar">
          <button
            onClick={() => setActiveTab('meals')}
            className={`whitespace-nowrap px-3.5 py-1.5 rounded-lg text-xs font-semibold ${
              activeTab === 'meals' ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-300'
            }`}
          >
            Platillos
          </button>
          <button
            onClick={() => setActiveTab('guide')}
            className={`whitespace-nowrap px-3.5 py-1.5 rounded-lg text-xs font-semibold ${
              activeTab === 'guide' ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-300'
            }`}
          >
            Pre/Post Entreno
          </button>
          <button
            onClick={() => setActiveTab('calculator')}
            className={`whitespace-nowrap px-3.5 py-1.5 rounded-lg text-xs font-semibold ${
              activeTab === 'calculator' ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-300'
            }`}
          >
            Calculadora
          </button>
          <button
            onClick={() => setActiveTab('ai')}
            className={`whitespace-nowrap px-3.5 py-1.5 rounded-lg text-xs font-semibold ${
              activeTab === 'ai' ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-300'
            }`}
          >
            ✨ NutriAI Assistant
          </button>
          <button
            onClick={() => setActiveTab('articles')}
            className={`whitespace-nowrap px-3.5 py-1.5 rounded-lg text-xs font-semibold ${
              activeTab === 'articles' ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-300'
            }`}
          >
            Guías
          </button>
        </div>

      </div>
    </header>
  );
};
