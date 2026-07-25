import React from 'react';
import { Heart, ShieldCheck, Sparkles } from 'lucide-react';
import gymLogo from '../assets/images/gymnutrition_logo_1784952810347.jpg';

interface FooterProps {
  setActiveTab: (tab: 'meals' | 'guide' | 'calculator' | 'ai' | 'planner' | 'articles') => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-slate-900 border border-slate-800 p-0.5 shadow-md">
                <img 
                  src={gymLogo} 
                  alt="GymNutrition Logo" 
                  className="w-full h-full object-cover rounded-lg"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-lg font-black text-white tracking-tight">GymNutrition</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Plataforma especializada en alimentación saludable y nutrición deportiva para amantes del gimnasio, fitness e hipertrofia.
            </p>
          </div>

          {/* Nav Section 1 */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">Secciones principales</h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <button onClick={() => setActiveTab('meals')} className="hover:text-emerald-400 transition-colors">
                  Platillos y Menús Fitness
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('guide')} className="hover:text-emerald-400 transition-colors">
                  Guía Pre y Post Entreno
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('calculator')} className="hover:text-emerald-400 transition-colors">
                  Calculadora de Macros
                </button>
              </li>
            </ul>
          </div>

          {/* Nav Section 2 */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">Herramientas IA</h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <button onClick={() => setActiveTab('ai')} className="hover:text-emerald-400 transition-colors">
                  NutriAI Assistant (Gemini)
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('ai')} className="hover:text-emerald-400 transition-colors">
                  Creador con tu Refrigerador
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('articles')} className="hover:text-emerald-400 transition-colors">
                  Guías y Ciencia Deportiva
                </button>
              </li>
            </ul>
          </div>

          {/* Medical / Fitness Disclaimer */}
          <div className="space-y-2 md:col-span-1 bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
            <div className="flex items-center space-x-1.5 text-xs font-bold text-amber-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Aviso Importante</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-normal">
              Las sugerencias calóricas y de macronutrientes proporcionadas son estimaciones con fines educativos y deportivos. Consulta con un nutricionista profesional para planes clínicos individualizados.
            </p>
          </div>

        </div>

        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <p>© {new Date().getFullYear()} GymNutrition. Todos los derechos reservados.</p>
          <p className="flex items-center space-x-1">
            <span>Alimentando tus objetivos con</span>
            <Heart className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />
            <span>& Inteligencia Artificial</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
