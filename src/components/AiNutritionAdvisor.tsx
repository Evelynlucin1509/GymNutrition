import React, { useState } from 'react';
import { Sparkles, Send, Utensils, Refrigerator, MessageSquare, Loader2, Dumbbell, Flame, CheckCircle2, User } from 'lucide-react';
import { UserFitnessProfile, CalculatedMacros } from '../types';

interface AiNutritionAdvisorProps {
  initialProfile?: UserFitnessProfile | null;
  initialMacros?: CalculatedMacros | null;
}

export const AiNutritionAdvisor: React.FC<AiNutritionAdvisorProps> = ({
  initialProfile,
  initialMacros,
}) => {
  const [activeMode, setActiveMode] = useState<'custom_plan' | 'fridge' | 'chat'>('custom_plan');
  
  // Form states
  const [fridgeIngredients, setFridgeIngredients] = useState('');
  const [chatQuestion, setChatQuestion] = useState('');
  
  // Custom Plan inputs
  const [targetCalories, setTargetCalories] = useState(initialMacros?.targetCalories || 2400);
  const [targetProtein, setTargetProtein] = useState(initialMacros?.proteinGrams || 160);
  const [dietaryGoal, setDietaryGoal] = useState(initialProfile?.goal || 'masa_muscular');
  const [dietaryRestrictions, setDietaryRestrictions] = useState('Sin restricciones');

  // Response state
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);

    let prompt = '';
    if (activeMode === 'custom_plan') {
      prompt = `Diseña un plan alimenticio diario completo para el gimnasio con las siguientes metas:
- Objetivo Físico: ${dietaryGoal}
- Calorías Objetivo: ${targetCalories} kcal
- Proteína Objetivo: ${targetProtein}g
- Restricciones/Preferencias: ${dietaryRestrictions}

Por favor distribuye el plan en:
1. Desayuno Fitness
2. Pre-Entreno
3. Post-Entreno
4. Almuerzo
5. Cena
6. Snack Opcional

Para cada comida incluye los ingredientes exactos, instrucciones rápidas de preparación y los macros estimados (Calorías, Proteína, Carbs, Grasas).`;
    } else if (activeMode === 'fridge') {
      if (!fridgeIngredients.trim()) {
        setErrorMessage('Por favor ingresa algunos ingredientes que tengas en tu cocina.');
        setIsLoading(false);
        return;
      }
      prompt = `Tengo estos ingredientes en mi refrigerador y alacena: ${fridgeIngredients}.
Crea 2 platillos saludables para el gimnasio aprovechando estos ingredientes. Para cada receta especifica:
- Nombre del platillo
- Beneficios para el entrenamiento (Hipertrofia, Pérdida de Grasa, Fuerza o Recuperación)
- Tiempo de preparación
- Desglose aproximado de macros (Calorías, Proteína, Carbs, Grasas)
- Instrucciones paso a paso.`;
    } else {
      if (!chatQuestion.trim()) {
        setErrorMessage('Por favor escribe tu duda sobre nutrición deportiva.');
        setIsLoading(false);
        return;
      }
      prompt = chatQuestion;
    }

    try {
      const response = await fetch('/api/ai-nutrition', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: activeMode === 'fridge' ? 'fridge_ingredients' : activeMode,
          prompt,
          userProfile: {
            goal: dietaryGoal,
            targetCalories,
            targetProtein,
          },
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Error al comunicarse con la IA');
      }

      setAiResponse(data.text);
    } catch (err: any) {
      console.error(err);
      setErrorMessage(err.message || 'No se pudo generar la respuesta de IA.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8 py-6">
      
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-3 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>Asistente Inteligente GymNutrition</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight mt-2">
            NutriAI Assistant
          </h2>
          <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
            Obtén respuestas respaldadas por la ciencia de la nutrición deportiva, genera menús personalizados o crea recetas con los ingredientes que ya tienes en casa.
          </p>
        </div>

        {/* Mode Selector Tabs */}
        <div className="pt-4 flex flex-wrap gap-2 border-t border-slate-800/80">
          <button
            onClick={() => { setActiveMode('custom_plan'); setAiResponse(null); }}
            className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl font-bold text-xs transition-all ${
              activeMode === 'custom_plan'
                ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                : 'bg-slate-950 text-slate-300 hover:bg-slate-800 border border-slate-800'
            }`}
          >
            <Utensils className="w-4 h-4" />
            <span>Plan Diario Personalizado</span>
          </button>

          <button
            onClick={() => { setActiveMode('fridge'); setAiResponse(null); }}
            className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl font-bold text-xs transition-all ${
              activeMode === 'fridge'
                ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                : 'bg-slate-950 text-slate-300 hover:bg-slate-800 border border-slate-800'
            }`}
          >
            <Refrigerator className="w-4 h-4" />
            <span>Creador con mi Refrigerador</span>
          </button>

          <button
            onClick={() => { setActiveMode('chat'); setAiResponse(null); }}
            className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl font-bold text-xs transition-all ${
              activeMode === 'chat'
                ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                : 'bg-slate-950 text-slate-300 hover:bg-slate-800 border border-slate-800'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>Consulta Nutricional Gym</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Form */}
        <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-5 shadow-xl">
          
          {activeMode === 'custom_plan' && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="font-bold text-white text-base border-b border-slate-800 pb-2">
                Configura tu Menú Personalizado
              </h3>

              <div>
                <label className="block text-xs font-bold text-slate-400 mb-1">Objetivo Deportivo</label>
                <select
                  value={dietaryGoal}
                  onChange={(e) => setDietaryGoal(e.target.value as any)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-xs font-semibold text-white focus:outline-none"
                >
                  <option value="masa_muscular">💪 Ganar Masa Muscular (Hipertrofia)</option>
                  <option value="reducir_grasa">🔥 Reducir Grasa Corporal (Definición)</option>
                  <option value="aumentar_fuerza">⚡ Aumentar Fuerza y Rendimiento</option>
                  <option value="recuperacion">🧘 Mantenimiento y Recuperación</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-400 mb-1">Calorías (kcal)</label>
                  <input
                    type="number"
                    value={targetCalories}
                    onChange={(e) => setTargetCalories(Number(e.target.value) || 2000)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-xs text-white font-bold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 mb-1">Proteína (g)</label>
                  <input
                    type="number"
                    value={targetProtein}
                    onChange={(e) => setTargetProtein(Number(e.target.value) || 150)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-xs text-white font-bold"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 mb-1">Preferencias o Alergias</label>
                <input
                  type="text"
                  placeholder="Ej. Sin lácteos, vegetariano, poco tiempo de cocina..."
                  value={dietaryRestrictions}
                  onChange={(e) => setDietaryRestrictions(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-xs text-white"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs shadow-lg shadow-emerald-500/20 transition-all disabled:opacity-50"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Diseñando tu plan con IA...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 fill-slate-950" />
                    <span>Generar Plan de 1 Día</span>
                  </>
                )}
              </button>
            </form>
          )}

          {activeMode === 'fridge' && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="font-bold text-white text-base border-b border-slate-800 pb-2">
                Ingresa lo que tienes en Casa
              </h3>

              <p className="text-xs text-slate-400">
                Escribe los ingredientes disponibles en tu cocina y NutriAI diseñará opciones saludables para el gimnasio.
              </p>

              <div>
                <textarea
                  rows={4}
                  placeholder="Ej. Pechuga de pollo, 4 huevos, 1 lata de atún, arroz, avena, espinacas, mantequilla de maní..."
                  value={fridgeIngredients}
                  onChange={(e) => setFridgeIngredients(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs shadow-lg shadow-emerald-500/20 transition-all disabled:opacity-50"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Creando Recetas...</span>
                  </>
                ) : (
                  <>
                    <Refrigerator className="w-4 h-4" />
                    <span>Crear Recetas Fitness</span>
                  </>
                )}
              </button>
            </form>
          )}

          {activeMode === 'chat' && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="font-bold text-white text-base border-b border-slate-800 pb-2">
                Pregunta a NutriAI Gym
              </h3>

              <p className="text-xs text-slate-400">
                Consulta sobre suplementos (creatina, whey), timing de comidas, calambres, déficit calórico o trucos de cocina fitness.
              </p>

              <div>
                <textarea
                  rows={4}
                  placeholder="Ej. ¿Qué debo comer exactamente 45 minutos antes de mi rutina de piernas pesadas?"
                  value={chatQuestion}
                  onChange={(e) => setChatQuestion(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs shadow-lg shadow-emerald-500/20 transition-all disabled:opacity-50"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Analizando respuesta...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Enviar Consulta</span>
                  </>
                )}
              </button>
            </form>
          )}

          {errorMessage && (
            <div className="p-3 bg-red-500/10 border border-red-500/30 text-red-300 rounded-xl text-xs">
              {errorMessage}
            </div>
          )}

        </div>

        {/* Right Output Panel */}
        <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl min-h-[400px] flex flex-col">
          
          <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
                ✨
              </div>
              <span className="font-bold text-white text-sm">Respuesta de NutriAI</span>
            </div>

            {aiResponse && (
              <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                IA Respuesta Generada
              </span>
            )}
          </div>

          <div className="flex-1 overflow-y-auto">
            {isLoading ? (
              <div className="h-full flex flex-col items-center justify-center py-12 text-slate-400 space-y-3">
                <Loader2 className="w-8 h-8 text-emerald-400 animate-spin" />
                <p className="text-xs font-semibold text-slate-300">
                  NutriAI está preparando tu información nutricional personalizada...
                </p>
              </div>
            ) : aiResponse ? (
              <div className="prose prose-invert max-w-none text-xs sm:text-sm leading-relaxed space-y-3 text-slate-200">
                {aiResponse.split('\n').map((line, idx) => {
                  if (line.startsWith('# ')) {
                    return <h2 key={idx} className="text-lg font-black text-emerald-400 pt-2">{line.replace('# ', '')}</h2>;
                  }
                  if (line.startsWith('## ')) {
                    return <h3 key={idx} className="text-base font-bold text-teal-300 pt-2 border-b border-slate-800 pb-1">{line.replace('## ', '')}</h3>;
                  }
                  if (line.startsWith('### ')) {
                    return <h4 key={idx} className="text-sm font-bold text-cyan-300 pt-1">{line.replace('### ', '')}</h4>;
                  }
                  if (line.startsWith('- ') || line.startsWith('* ')) {
                    return (
                      <div key={idx} className="flex items-start space-x-2 pl-2">
                        <span className="text-emerald-400 font-bold">•</span>
                        <span>{line.substring(2)}</span>
                      </div>
                    );
                  }
                  if (line.trim() === '') return <br key={idx} />;
                  return <p key={idx}>{line}</p>;
                })}
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center py-16 text-center text-slate-500 space-y-3">
                <Sparkles className="w-10 h-10 text-slate-700" />
                <p className="text-xs font-medium max-w-sm">
                  Usa el formulario a la izquierda para generar tu plan diario, recetas de refrigerador o preguntar tus dudas nutricionales.
                </p>
              </div>
            )}
          </div>

        </div>

      </div>

    </div>
  );
};
