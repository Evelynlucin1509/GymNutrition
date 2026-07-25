import React, { useState } from 'react';
import { NUTRITION_GUIDES } from '../data/guides';
import { BookOpen, Zap, Activity, PieChart, ShieldCheck, Clock, ChevronRight, CheckCircle2 } from 'lucide-react';
import { NutritionGuideArticle } from '../types';

export const NutritionTips: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<NutritionGuideArticle>(NUTRITION_GUIDES[0]);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap': return <Zap className="w-5 h-5 text-amber-400" />;
      case 'Activity': return <Activity className="w-5 h-5 text-emerald-400" />;
      case 'PieChart': return <PieChart className="w-5 h-5 text-teal-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-cyan-400" />;
      default: return <BookOpen className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <div className="space-y-8 py-6">
      
      {/* Title Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-3">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold">
          <BookOpen className="w-4 h-4" />
          <span>Evidencia Científica & Consejos de Nutrición</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
          Guías y Fundamentos de Alimentación Deportiva
        </h2>
        <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
          Principios probados para acompañar tus rutinas de gimnasio, optimizar la recuperación tisular y maximizar la fuerza física.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Article Nav List */}
        <div className="lg:col-span-4 space-y-3">
          {NUTRITION_GUIDES.map((article) => {
            const isSelected = selectedArticle.id === article.id;
            return (
              <button
                key={article.id}
                onClick={() => setSelectedArticle(article)}
                className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 ${
                  isSelected
                    ? 'bg-slate-800 border-emerald-400 ring-1 ring-emerald-400/50 shadow-lg'
                    : 'bg-slate-900 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-start space-x-3">
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex-shrink-0">
                    {getIcon(article.iconName)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] uppercase font-bold text-emerald-400 block tracking-wider">
                      {article.category}
                    </span>
                    <h3 className={`text-xs font-bold mt-0.5 line-clamp-2 ${isSelected ? 'text-white' : 'text-slate-200'}`}>
                      {article.title}
                    </h3>
                    <p className="text-[11px] text-slate-400 mt-1 flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{article.readTime}</span>
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Article Viewer */}
        <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
          
          <div className="space-y-3 border-b border-slate-800 pb-4">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                {selectedArticle.category}
              </span>
              <span className="text-xs text-slate-400">{selectedArticle.readTime}</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-black text-white leading-tight">
              {selectedArticle.title}
            </h2>
          </div>

          {/* Key Takeaways Highlight Box */}
          <div className="bg-slate-950 p-4 rounded-2xl border border-emerald-500/30 space-y-2">
            <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4" />
              <span>Puntos Clave:</span>
            </h4>
            <ul className="space-y-1.5 pl-2">
              {selectedArticle.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start space-x-2 text-xs text-slate-200">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Article Paragraphs */}
          <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
            {selectedArticle.content.map((paragraph, idx) => (
              <p key={idx} className="bg-slate-950/40 p-3.5 rounded-xl border border-slate-800/60">
                {paragraph}
              </p>
            ))}
          </div>

        </div>

      </div>

    </div>
  );
};
