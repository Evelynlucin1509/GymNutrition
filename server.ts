import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Initialize Gemini AI lazily/safely
  const getAiClient = () => {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is not set");
    }
    return new GoogleGenAI({ apiKey });
  };

  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', app: 'GymNutrition' });
  });

  // AI Nutrition endpoint (Advice, custom meal plans, fridge ingredient generator)
  app.post('/api/ai-nutrition', async (req, res) => {
    try {
      const { type, prompt, userProfile } = req.body;

      let systemInstruction = `Eres "NutriGym AI", un nutricionista deportivo profesional y experto en alimentación para gimnastas y atletas de alto rendimiento. 
Tus respuestas deben ser motivadoras, científicamente respaldadas, amigables, claras y orientadas a metas físicas (hipertrofia, definición, fuerza, rendimiento).
Siempre ofrece valores nutricionales aproximados (calorías, proteínas, carbohidratos, grasas) cuando sugieras platos o comidas. Responde en un formato estructurado y amigable utilizando Markdown (con negritas, listas y secciones claras). Siempre responde en idioma español.`;

      if (type === 'custom_plan') {
        systemInstruction += `\nEl usuario solicita un plan alimenticio personalizado diario. Utiliza sus datos: Objetivo: ${userProfile?.goal || 'General'}, Peso: ${userProfile?.weight || 70}kg, Calorías objetivo: ${userProfile?.targetCalories || 2200} kcal, Proteínas: ${userProfile?.targetProtein || 150}g. Estructura el plan en Desayuno, Pre-Entreno, Post-Entreno, Almuerzo y Cena.`;
      } else if (type === 'fridge_ingredients') {
        systemInstruction += `\nEl usuario te dará una lista de ingredientes disponibles. Tu tarea es sugerir 2-3 platillos saludables para el gimnasio que usen principalmente esos ingredientes, indicando tiempo de preparación, macros estimados e instrucciones paso a paso.`;
      }

      const ai = getAiClient();
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });

      res.json({ text: response.text });
    } catch (error: any) {
      console.error('Error in /api/ai-nutrition:', error);
      res.status(500).json({ 
        error: error.message || 'Error al procesar la consulta con Inteligencia Artificial' 
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`GymNutrition server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
});
