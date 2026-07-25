import React from 'react';
import { Leaf, Dumbbell, Stethoscope, Truck, Target, ShieldCheck, Flame, Award, HeartPulse } from 'lucide-react';

export const BenefitsSection: React.FC = () => {
  const benefitsList = [
    {
      icon: Leaf,
      title: 'Ingredientes Frescos y Naturales',
      badge: '100% Orgánico',
      description: 'Platillos preparados diariamente con pechuga de pollo de libre pastoreo, vegetales orgánicos, arroz integral y aceites prensados en frío, sin conservantes artificiales ni sodio en exceso.',
      color: 'from-emerald-500 to-teal-400',
      textColor: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/30'
    },
    {
      icon: Dumbbell,
      title: 'Alto Contenido de Proteína',
      badge: '+40g por Menú',
      description: 'Cada plato contiene una dosis masiva de aminoácidos esenciales de alto valor biológico (Leucina, Valina e Isoleucina) para acelerar la síntesis proteica muscular e hipertrofia.',
      color: 'from-amber-500 to-orange-400',
      textColor: 'text-amber-400',
      bgColor: 'bg-amber-500/10',
      borderColor: 'border-amber-500/30'
    },
    {
      icon: Stethoscope,
      title: 'Diseñado por Nutricionistas',
      badge: 'Ciencia Deportiva',
      description: 'Recetas formuladas por médicos nutriólogos deportivos. Macro y micronutrientes calculados con precisión milimétrica para asegurar máxima asimilación y digestión óptima.',
      color: 'from-teal-400 to-cyan-400',
      textColor: 'text-teal-400',
      bgColor: 'bg-teal-500/10',
      borderColor: 'border-teal-500/30'
    },
    {
      icon: Truck,
      title: 'Entrega Rápida y Refrigerada',
      badge: 'Exprés 45 min',
      description: 'Envíos con tecnología de cadena de frío y empaques compostables sellados. Tu menú llega a la temperatura perfecta para consumir de inmediato o refrigerar durante la semana.',
      color: 'from-emerald-400 to-amber-400',
      textColor: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/30'
    },
    {
      icon: Target,
      title: 'Opciones para Ganar Masa y Definición',
      badge: 'Objetivos Personalizados',
      description: 'Planes flexibles ajustados tanto para fases de volumen magro e hipertrofia como para déficit calórico estricto y definición muscular con máxima retención de masa magra.',
      color: 'from-orange-400 to-amber-500',
      textColor: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/30'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-950 border-t border-b border-slate-800/80 relative overflow-hidden">
      
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-widest">
            <Award className="w-4 h-4" />
            <span>Por qué elegir GymNutrition</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Nutrición de Élite Diseñada para <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-400">Potenciar tus Resultados</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Unimos la gastronomía gourmet con la ciencia de la nutrición deportiva para llevar la alimentación de tu gimnasio al siguiente nivel.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefitsList.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-slate-900/90 border border-slate-800/90 hover:border-slate-700/90 rounded-3xl p-6 sm:p-8 space-y-5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-emerald-500/5 group relative overflow-hidden flex flex-col justify-between"
              >
                {/* Top Badge & Icon */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-14 h-14 rounded-2xl ${benefit.bgColor} ${benefit.borderColor} border flex items-center justify-center ${benefit.textColor} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-extrabold uppercase px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-slate-300 tracking-wider">
                      {benefit.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-white group-hover:text-emerald-400 transition-colors">
                    {benefit.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Subtle Accent Line */}
                <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${benefit.color} opacity-60 group-hover:w-full transition-all duration-300 mt-2`} />
              </div>
            );
          })}

          {/* Quality Pledge Banner */}
          <div className="bg-gradient-to-br from-emerald-950/60 via-slate-900 to-slate-950 border border-emerald-500/30 rounded-3xl p-6 sm:p-8 flex flex-col justify-center space-y-4 relative overflow-hidden">
            <div className="flex items-center space-x-3 text-emerald-400">
              <ShieldCheck className="w-8 h-8 flex-shrink-0" />
              <h4 className="font-black text-lg text-white">Garantía Nutricional GymNutrition</h4>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Si alguno de nuestros menús no cumple con tus expectativas de sabor, frescura o información macro-nutricional, te reembolsamos tu dinero o enviamos un reemplazo inmediato.
            </p>
            <div className="pt-2 flex items-center space-x-2 text-xs font-bold text-amber-400">
              <HeartPulse className="w-4 h-4 animate-pulse" />
              <span>100% Satisfacción Deportiva Garantizada</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
