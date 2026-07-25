import { NutritionGuideArticle } from '../types';

export const NUTRITION_GUIDES: NutritionGuideArticle[] = [
  {
    id: 'guia-pre-entreno',
    title: 'Nutrición Pre-Entreno: La Clave para Rendir al 100%',
    category: 'Rendimiento y Energía',
    readTime: '4 min de lectura',
    iconName: 'Zap',
    summary: 'Aprende qué comer y cuándo consumirlo para maximizar tu energía en el gimnasio sin pesadez estomacal.',
    content: [
      'El objetivo principal de la comida pre-entrenamiento es cargar los depósitos de glucógeno muscular y hepático, manteniendo niveles estables de glucosa en sangre durante las series intensas.',
      'Momento 2-3 Horas Antes: Consume una comida completa que incluya carbohidratos complejos de absorción lenta (arroz integral, avena, camote) junto con proteína magra (pollo, pavo, pescado) y poca grasa.',
      'Momento 30-60 Minutos Antes: Opta por carbohidratos de digestión más rápida con poca fibra y poca grasa para evitar molestias gastrointestinales. Un platillo ideal es banana con yogurt griego o tostada con miel.',
      'Evita comidas hipergrasas o con exceso de fibra justo antes de entrenar, ya que ralentizan el vaciado gástrico y desvían el flujo sanguíneo del músculo hacia el sistema digestivo.'
    ],
    keyTakeaways: [
      'Carga glucógeno 2-3 horas antes con carbohidratos complejos y proteína.',
      'Si tienes poco tiempo (30-45 min), consume carbohidratos simples de rápida digestión.',
      'Mantén las grasas bajas en la ventana previa para agilizar la digestión.'
    ]
  },
  {
    id: 'guia-post-entreno',
    title: 'Nutrición Post-Entreno: Ventana Anabólica y Síntesis Proteica',
    category: 'Recuperación Muscular',
    readTime: '5 min de lectura',
    iconName: 'Activity',
    summary: 'Cómo reparar las microfracturas musculares y reponer depósitos de glucógeno para acelerar el crecimiento.',
    content: [
      'Durante el entrenamiento con pesas o alta intensidad, las fibras musculares sufren micro-desgarros y se agotan los depósitos de energía (glucógeno). La nutrición posterior es crucial para cambiar el estado catabólico a anabólico.',
      'Proteína (25-40g): Es fundamental aportar aminoácidos de rápida disponibilidad, especialmente leucina, el gatillo biológico de la vía mTOR que activa la síntesis de proteína muscular.',
      'Carbohidratos: La insulina es una hormona altamente anabólica. Consumir carbohidratos junto con la proteína repone el glucógeno y frena la degradación de proteína muscular.',
      'Proporción Recomendada: Para hipertrofia se aconseja 1:1 o 2:1 (carbohidratos:proteína). Para deportistas de resistencia o rutinas muy agotadoras, hasta 3:1 o 4:1.'
    ],
    keyTakeaways: [
      'Consume entre 25-40g de proteína de alto valor biológico tras la sesión.',
      'Combina con carbohidratos para potenciar la respuesta de insulina y recarga de glucógeno.',
      'La ventana anabólica real se extiende durante 2-3 horas tras el entrenamiento.'
    ]
  },
  {
    id: 'guia-distribucion-macros',
    title: 'Macro-Nutrientes para Hipertrofia vs. Definición Muscular',
    category: 'Estrategia de Nutrición',
    readTime: '6 min de lectura',
    iconName: 'PieChart',
    summary: 'Ajusta tus gramos diarios de Proteína, Carbohidratos y Grasas según tu meta específica de composición corporal.',
    content: [
      'Gaining Phase / Hipertrofia (Superávit Calórico): Requiere un superávit moderado del 10-15% sobre tu TDEE. Proteínas recomendadas: 1.8g a 2.2g por kg de peso corporal. Carbohidratos elevados para respaldar el volumen de entrenamiento.',
      'Cutting Phase / Definición (Déficit Calórico): Requiere un déficit del 15-20%. Proteínas elevadas: 2.2g a 2.6g por kg de peso corporal para preservar la masa magra mientras se pierde tejido graso.',
      'Grasas Saludables: Nunca reduzcas las grasas por debajo del 20% del total calórico diario, ya que son indispensables para la producción de testosterona y salud hormonal.',
      'Distribución de Proteína: Para optimizar la síntesis muscular, reparte tu proteína en 4-5 tomas equitativas espaciadas entre 3 y 4 horas.'
    ],
    keyTakeaways: [
      'En definición eleva la proteína (2.2g-2.6g/kg) para proteger el músculo.',
      'En volumen mantén un superávit controlado con alta presencia de carbohidratos.',
      'Reparte la proteína en 4 a 5 comidas diarias con al menos 2.5g de leucina por toma.'
    ]
  },
  {
    id: 'guia-suplementacion-basica',
    title: 'Suplementos Esenciales Respaldados por la Ciencia',
    category: 'Suplementación Deportiva',
    readTime: '5 min de lectura',
    iconName: 'ShieldCheck',
    summary: 'Los únicos suplementos con evidencia nivel A de eficacia para el gimnasta: Creatina, Whey Protein y Beta-Alanina.',
    content: [
      'Monohidrato de Creatina: El suplemento más estudiado en la ciencia deportiva. Incrementa los depósitos de fosfocreatina en el músculo, aumentan la fuerza máxima, la potencia en series y la hidratación celular. Dosis recomendada: 3-5g diarios sin necesidad de fase de carga.',
      'Proteína de Suero (Whey Protein): Una herramienta práctica y de altísima calidad biológica para alcanzar tus requerimientos proteicos diarios sin añadir grasas o calorías innecesarias.',
      'Electrolitos e Hidratación: La pérdida del 2% del peso corporal en agua puede reducir el rendimiento de fuerza hasta en un 15%. Consume agua con un pellizco de sal marina o electrolitos en días calurosos o sesiones largas.'
    ],
    keyTakeaways: [
      'Creatina Monohidratada 3-5g diarios todos los días (incluso días de descanso).',
      'Whey protein como apoyo práctico para cubrir la cuota de proteínas.',
      'La hidratación adecuada influye directamente en los niveles de fuerza.'
    ]
  }
];
