import React, { useState, useMemo } from 'react';
import { Calculator, Dumbbell, Flame, Sparkles, Scale, Activity, ArrowRight, Droplets, CheckCircle2 } from 'lucide-react';
import { FitnessGoal, CalculatedMacros, UserFitnessProfile } from '../types';

interface MacroCalculatorProps {
  onApplyProfile: (profile: UserFitnessProfile, macros: CalculatedMacros) => void;
  onOpenAIWithProfile: (profile: UserFitnessProfile, macros: CalculatedMacros) => void;
}

export const MacroCalculator: React.FC<MacroCalculatorProps> = ({
  onApplyProfile,
  onOpenAIWithProfile,
}) => {
  const [profile, setProfile] = useState<UserFitnessProfile>({
    age: 25,
    gender: 'masculino',
    weightKg: 75,
    heightCm: 175,
    activityLevel: 'moderado',
    goal: 'masa_muscular',
  });

  // Calculate Macros using Mifflin-St Jeor formula
  const calculatedMacros = useMemo<CalculatedMacros>(() => {
    const { age, gender, weightKg, heightCm, activityLevel, goal } = profile;

    // Mifflin-St Jeor BMR
    let bmr = 10 * weightKg + 6.25 * heightCm - 5 * age;
    if (gender === 'masculino') {
      bmr += 5;
    } else {
      bmr -= 161;
    }

    // Activity Multiplier
    const multipliers: Record<string, number> = {
      sedentario: 1.2,
      ligero: 1.375,
      moderado: 1.55,
      intenso: 1.725,
      atleta: 1.9,
    };
    const tdee = Math.round(bmr * (multipliers[activityLevel] || 1.55));

    // Goal Adjustments
    let targetCalories = tdee;
    let proteinPerKg = 2.0;
    let fatRatio = 0.25;

    if (goal === 'masa_muscular') {
      targetCalories = Math.round(tdee * 1.12); // +12% surplus
      proteinPerKg = 2.2;
      fatRatio = 0.25;
    } else if (goal === 'reducir_grasa') {
      targetCalories = Math.round(tdee * 0.80); // -20% deficit
      proteinPerKg = 2.4; // higher protein to preserve muscle
      fatRatio = 0.25;
    } else if (goal === 'aumentar_fuerza') {
      targetCalories = Math.round(tdee * 1.08); // +8% surplus
      proteinPerKg = 2.2;
      fatRatio = 0.30;
    } else {
      // recuperacion / mantenimiento
      targetCalories = tdee;
      proteinPerKg = 2.0;
      fatRatio = 0.25;
    }

    const proteinGrams = Math.round(weightKg * proteinPerKg);
    const proteinCalories = proteinGrams * 4;
    const fatCalories = targetCalories * fatRatio;
    const fatsGrams = Math.round(fatCalories / 9);
    const carbCalories = Math.max(0, targetCalories - (proteinCalories + fatCalories));
    const carbsGrams = Math.round(carbCalories / 4);

    const waterLiters = Number((weightKg * 0.035).toFixed(1));

    return {
      bmr: Math.round(bmr),
      tdee,
      targetCalories,
      proteinGrams,
      carbsGrams,
      fatsGrams,
      waterLiters,
    };
  }, [profile]);

  return (
    <div className="space-y-8 py-6">
      
      {/* Title */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-3">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold">
          <Calculator className="w-4 h-4" />
          <span>Algoritmo Mifflin-St Jeor para Atletas</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
          Calculadora de Calorías y Macronutrientes Gym
        </h2>
        <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
          Determina tu Gasto Energético Total (TDEE) y obtén tus metas exactas de Proteínas, Carbohidratos y Grasas según tu peso, altura y objetivo deportivo.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Form Inputs */}
        <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-6 shadow-xl">
          
          <h3 className="text-base font-bold text-white flex items-center space-x-2 border-b border-slate-800 pb-3">
            <Scale className="w-5 h-5 text-emerald-400" />
            <span>1. Tus Datos Físicos</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Gender */}
            <div>
              <label className="block text-xs font-bold text-slate-400 mb-1.5 uppercase">Género Biológico</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setProfile((p) => ({ ...p, gender: 'masculino' }))}
                  className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all ${
                    profile.gender === 'masculino'
                      ? 'bg-emerald-500 text-slate-950 border-emerald-400'
                      : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  Masculino
                </button>
                <button
                  type="button"
                  onClick={() => setProfile((p) => ({ ...p, gender: 'femenino' }))}
                  className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all ${
                    profile.gender === 'femenino'
                      ? 'bg-emerald-500 text-slate-950 border-emerald-400'
                      : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  Femenino
                </button>
              </div>
            </div>

            {/* Age */}
            <div>
              <label className="block text-xs font-bold text-slate-400 mb-1.5 uppercase">Edad (Años)</label>
              <input
                type="number"
                value={profile.age}
                onChange={(e) => setProfile((p) => ({ ...p, age: Number(e.target.value) || 20 }))}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white font-bold focus:outline-none focus:border-emerald-500"
              />
            </div>

            {/* Weight */}
            <div>
              <label className="block text-xs font-bold text-slate-400 mb-1.5 uppercase">Peso Actual (Kg)</label>
              <input
                type="number"
                step="0.5"
                value={profile.weightKg}
                onChange={(e) => setProfile((p) => ({ ...p, weightKg: Number(e.target.value) || 70 }))}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white font-bold focus:outline-none focus:border-emerald-500"
              />
            </div>

            {/* Height */}
            <div>
              <label className="block text-xs font-bold text-slate-400 mb-1.5 uppercase">Estatura (Cm)</label>
              <input
                type="number"
                value={profile.heightCm}
                onChange={(e) => setProfile((p) => ({ ...p, heightCm: Number(e.target.value) || 170 }))}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white font-bold focus:outline-none focus:border-emerald-500"
              />
            </div>

          </div>

          {/* Activity Level */}
          <div>
            <label className="block text-xs font-bold text-slate-400 mb-2 uppercase">Nivel de Actividad Semanal</label>
            <select
              value={profile.activityLevel}
              onChange={(e) => setProfile((p) => ({ ...p, activityLevel: e.target.value as any }))}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm font-semibold text-slate-200 focus:outline-none focus:border-emerald-500 cursor-pointer"
            >
              <option value="sedentario">Sedentario (Trabajo de escritorio, poco ejercicio)</option>
              <option value="ligero">Ligero (Ejercicio 1-3 días a la semana)</option>
              <option value="moderado">Moderado (Gimnasio 3-5 días a la semana)</option>
              <option value="intenso">Intenso (Gimnasio fuerte 6-7 días a la semana)</option>
              <option value="atleta">Atleta / Doble sesión (Atleta de alto rendimiento)</option>
            </select>
          </div>

          {/* Goal Selector */}
          <div>
            <label className="block text-xs font-bold text-slate-400 mb-2 uppercase">Objetivo Deportivo</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {[
                { id: 'masa_muscular', label: '💪 Ganar Masa Muscular', sub: 'Hipertrofia (+12% kcal)' },
                { id: 'reducir_grasa', label: '🔥 Reducir Grasa Corporal', sub: 'Definición (-20% kcal)' },
                { id: 'aumentar_fuerza', label: '⚡ Aumentar Fuerza', sub: 'Potencia & Rendimiento' },
                { id: 'recuperacion', label: '🧘 Mantenimiento / Salud', sub: 'Equilibrio Energético' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setProfile((p) => ({ ...p, goal: item.id as FitnessGoal }))}
                  className={`p-3 rounded-2xl border text-left transition-all ${
                    profile.goal === item.id
                      ? 'bg-slate-800 border-emerald-400 ring-1 ring-emerald-400/50'
                      : 'bg-slate-950 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <p className={`text-xs font-bold ${profile.goal === item.id ? 'text-emerald-300' : 'text-slate-200'}`}>
                    {item.label}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">{item.sub}</p>
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Calculated Results Panel */}
        <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-6 space-y-6 shadow-2xl flex flex-col justify-between">
          
          <div className="space-y-6">
            <h3 className="text-base font-bold text-white flex items-center space-x-2 border-b border-slate-800 pb-3">
              <Activity className="w-5 h-5 text-emerald-400" />
              <span>2. Tu Plan de Macros Estimado</span>
            </h3>

            {/* Main Target Calories Badge */}
            <div className="bg-slate-950 p-5 rounded-2xl border border-emerald-500/30 text-center space-y-1 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl pointer-events-none" />
              <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">Objetivo Calórico Diario</span>
              <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                {calculatedMacros.targetCalories} <span className="text-lg text-emerald-400">kcal/día</span>
              </div>
              <p className="text-[11px] text-slate-400 pt-1">
                Gasto Basal (BMR): {calculatedMacros.bmr} kcal | Gasto Total (TDEE): {calculatedMacros.tdee} kcal
              </p>
            </div>

            {/* Macros Breakdown */}
            <div className="grid grid-cols-3 gap-3">
              
              <div className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800 text-center">
                <span className="block text-[10px] uppercase font-bold text-slate-400">Proteína</span>
                <span className="text-xl font-black text-emerald-400">{calculatedMacros.proteinGrams}g</span>
                <span className="block text-[10px] text-slate-500 mt-0.5">{calculatedMacros.proteinGrams * 4} kcal</span>
              </div>

              <div className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800 text-center">
                <span className="block text-[10px] uppercase font-bold text-slate-400">Carbohidratos</span>
                <span className="text-xl font-black text-teal-300">{calculatedMacros.carbsGrams}g</span>
                <span className="block text-[10px] text-slate-500 mt-0.5">{calculatedMacros.carbsGrams * 4} kcal</span>
              </div>

              <div className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800 text-center">
                <span className="block text-[10px] uppercase font-bold text-slate-400">Grasas</span>
                <span className="text-xl font-black text-amber-300">{calculatedMacros.fatsGrams}g</span>
                <span className="block text-[10px] text-slate-500 mt-0.5">{calculatedMacros.fatsGrams * 9} kcal</span>
              </div>

            </div>

            {/* Water Recommendation */}
            <div className="flex items-center space-x-3 p-3.5 rounded-2xl bg-slate-950 border border-slate-800">
              <Droplets className="w-5 h-5 text-cyan-400 flex-shrink-0" />
              <div className="text-xs">
                <span className="font-bold text-slate-200 block">Hidratación Recomendada:</span>
                <span className="text-slate-400">Mínimo <strong className="text-cyan-300">{calculatedMacros.waterLiters} Litros</strong> de agua al día para optimizar la hipertrofia.</span>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="space-y-3 pt-4 border-t border-slate-800">
            <button
              onClick={() => onOpenAIWithProfile(profile, calculatedMacros)}
              className="w-full flex items-center justify-center space-x-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-extrabold text-sm shadow-lg shadow-emerald-500/20 transition-all"
            >
              <Sparkles className="w-4 h-4 fill-slate-950" />
              <span>Generar Menú Diario con Asistente IA</span>
            </button>

            <button
              onClick={() => onApplyProfile(profile, calculatedMacros)}
              className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs border border-slate-700 transition-all"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Usar estos Macros en Filtros</span>
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
