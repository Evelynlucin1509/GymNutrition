import React from 'react';
import { Utensils, Calculator, Sparkles, BookOpen, Calendar, Flame, ShoppingCart, Info, Award, PhoneCall, Home } from 'lucide-react';
import gymLogo from '../assets/images/gymnutrition_logo_1784952810347.jpg';
import { MainNavTab } from '../types';

interface HeaderProps {
  activeTab: MainNavTab;
  setActiveTab: (tab: MainNavTab) => void;
  cartCount: number;
  onOpenCart: () => void;
  plannedCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  cartCount,
  onOpenCart,
  plannedCount,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand */}
          <div 
            onClick={() => setActiveTab('home')}
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
                Nutrición Deportiva & Gym
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 bg-slate-800/60 p-1.5 rounded-2xl border border-slate-700/50 text-xs font-bold">
            
            <button
              onClick={() => setActiveTab('home')}
              className={`flex items-center space-x-1.5 px-3 py-2 rounded-xl transition-all duration-200 ${
                activeTab === 'home'
                  ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <Home className="w-4 h-4" />
              <span>Inicio</span>
            </button>

            <button
              onClick={() => setActiveTab('meals')}
              className={`flex items-center space-x-1.5 px-3 py-2 rounded-xl transition-all duration-200 ${
                activeTab === 'meals'
                  ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <Utensils className="w-4 h-4" />
              <span>Productos</span>
            </button>

            <button
              onClick={() => setActiveTab('benefits')}
              className={`flex items-center space-x-1.5 px-3 py-2 rounded-xl transition-all duration-200 ${
                activeTab === 'benefits'
                  ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Beneficios</span>
            </button>

            <button
              onClick={() => setActiveTab('about')}
              className={`flex items-center space-x-1.5 px-3 py-2 rounded-xl transition-all duration-200 ${
                activeTab === 'about'
                  ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <Info className="w-4 h-4" />
              <span>Nosotros</span>
            </button>

            <button
              onClick={() => setActiveTab('contact')}
              className={`flex items-center space-x-1.5 px-3 py-2 rounded-xl transition-all duration-200 ${
                activeTab === 'contact'
                  ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <PhoneCall className="w-4 h-4" />
              <span>Contacto</span>
            </button>

            <div className="h-4 w-px bg-slate-700 my-auto mx-1" />

            <button
              onClick={() => setActiveTab('calculator')}
              className={`flex items-center space-x-1 px-2.5 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-700/50 ${
                activeTab === 'calculator' ? 'text-emerald-400 font-black' : ''
              }`}
              title="Calculadora de Macros"
            >
              <Calculator className="w-3.5 h-3.5 text-emerald-400" />
              <span>Macros</span>
            </button>

            <button
              onClick={() => setActiveTab('ai')}
              className={`flex items-center space-x-1 px-2.5 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-700/50 ${
                activeTab === 'ai' ? 'text-emerald-400 font-black' : ''
              }`}
              title="Asistente de Nutrición IA"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>NutriAI</span>
            </button>

          </nav>

          {/* Cart & Planner Actions */}
          <div className="flex items-center space-x-3">
            
            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative flex items-center space-x-2 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-black text-xs shadow-lg shadow-emerald-500/20 transition-all transform active:scale-95"
            >
              <ShoppingCart className="w-4 h-4" />
              <span className="hidden sm:inline">Carrito</span>
              {cartCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-slate-950 text-amber-400 text-xs font-black flex items-center justify-center ring-2 ring-amber-400 animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Daily Plan Planner Button */}
            <button
              onClick={() => setActiveTab('planner')}
              className={`relative flex items-center space-x-2 px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'planner'
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
              }`}
              title="Mi Plan Diario"
            >
              <Calendar className="w-4 h-4 text-emerald-400" />
              <span className="hidden xl:inline">Plan</span>
              {plannedCount > 0 && (
                <span className="w-4 h-4 rounded-full bg-emerald-400 text-slate-950 text-[10px] font-extrabold flex items-center justify-center">
                  {plannedCount}
                </span>
              )}
            </button>

          </div>

        </div>

        {/* Mobile Sub-Navigation Bar */}
        <div className="flex lg:hidden overflow-x-auto py-2.5 space-x-2 border-t border-slate-800 no-scrollbar">
          <button
            onClick={() => setActiveTab('home')}
            className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-semibold ${
              activeTab === 'home' ? 'bg-emerald-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-300'
            }`}
          >
            Inicio
          </button>
          <button
            onClick={() => setActiveTab('meals')}
            className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-semibold ${
              activeTab === 'meals' ? 'bg-emerald-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-300'
            }`}
          >
            Productos
          </button>
          <button
            onClick={() => setActiveTab('benefits')}
            className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-semibold ${
              activeTab === 'benefits' ? 'bg-emerald-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-300'
            }`}
          >
            Beneficios
          </button>
          <button
            onClick={() => setActiveTab('about')}
            className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-semibold ${
              activeTab === 'about' ? 'bg-emerald-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-300'
            }`}
          >
            Nosotros
          </button>
          <button
            onClick={() => setActiveTab('contact')}
            className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-semibold ${
              activeTab === 'contact' ? 'bg-emerald-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-300'
            }`}
          >
            Contacto
          </button>
          <button
            onClick={() => setActiveTab('calculator')}
            className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-semibold ${
              activeTab === 'calculator' ? 'bg-emerald-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-300'
            }`}
          >
            Calculadora
          </button>
          <button
            onClick={() => setActiveTab('ai')}
            className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-semibold ${
              activeTab === 'ai' ? 'bg-emerald-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-300'
            }`}
          >
            NutriAI
          </button>
        </div>

      </div>
    </header>
  );
};
