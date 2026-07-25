import { MealItem } from '../types';

import proteinBowlImg from '../assets/images/gym_protein_bowl_1784952346493.jpg';
import muscleGainPlateImg from '../assets/images/muscle_gain_chicken_rice_1784952990573.jpg';
import definitionPlateImg from '../assets/images/definition_chicken_quinoa_plate_1784953059886.jpg';
import salmonRiceImg from '../assets/images/gym_salmon_rice_1784952355961.jpg';
import proteinPancakesImg from '../assets/images/gym_protein_pancakes_1784952364105.jpg';
import preWorkoutBowlImg from '../assets/images/gym_pre_workout_bowl_1784952373325.jpg';

export const INITIAL_MEALS: MealItem[] = [
  {
    id: 'bowl-pollo-quinua',
    title: 'Plato Fitness Gourmet para Masa Muscular',
    subtitle: 'Pechuga a la parrilla, arroz integral, brócoli, aguacate y batido proteico',
    description: 'Menú gourmet de alto rendimiento hipertrófico: Jugosa pechuga de pollo a la parrilla servida con arroz integral, brócoli al vapor, rebanadas de aguacate cremoso y un batido de proteína de suero al lado.',
    image: muscleGainPlateImg,
    price: 11.99,
    category: 'proteinas',
    goal: ['masa_muscular', 'aumentar_fuerza', 'recuperacion'],
    timing: ['almuerzo', 'post_entreno'],
    macros: {
      calories: 580,
      protein: 48,
      carbs: 56,
      fats: 16,
      fiber: 9,
    },
    prepTimeMinutes: 15,
    cookTimeMinutes: 20,
    difficulty: 'Fácil',
    benefits: [
      '48g de proteína limpia para máxima síntesis de proteína muscular',
      'Carbohidratos complejos de basso índice glucémico para energía sostenida',
      'Grasas saludables del aguacate que optimizan el perfil hormonal',
      'Rico en potasio y magnesio para evitar calambres'
    ],
    ingredients: [
      '200g de pechuga de pollo deshuesada',
      '80g de quinua cocida',
      '100g de camote (batata) al horno',
      '1/2 aguacate maduro',
      '1 taza de floretes de brócoli al vapor',
      '1 cucharadita de aceite de oliva virgen extra',
      'Sal marina, ajo en polvo y pimentón ahumado'
    ],
    instructions: [
      'Sazona la pechuga de pollo con sal, ajo en polvo, pimentón y pimienta negra.',
      'Cocina el pollo a la plancha con unas gotas de aceite de oliva durante 6-7 minutos por lado hasta que quede dorado y jugoso.',
      'En un tazón, coloca la quinua cocida de base y acomoda el camote horneado en cubos.',
      'Corta el pollo en tiras y agrégalo junto con el brócoli al vapor y las rebanadas de aguacate.',
      'Espolvorea semillas de ajonjolí si lo deseas y sirve tibio.'
    ],
    tags: ['Alta Proteína', 'Sin Gluten', 'Post-Workout', 'Hipertrofia'],
    featured: true
  },
  {
    id: 'menu-definicion-muscular',
    title: 'Plato Fitness Gourmet para Definición Muscular',
    subtitle: 'Pechuga de pollo, quinoa, espárragos, ensalada fresca y agua mineral con limón',
    description: 'Menú balanceado de alta definición y quema de grasa: Pechuga de pollo a la plancha, quinoa ligera, espárragos salteados y ensalada fresca de tomate y lechuga, acompañado de agua mineral con limón.',
    image: definitionPlateImg,
    price: 11.50,
    category: 'proteinas',
    goal: ['reducir_grasa', 'recuperacion'],
    timing: ['almuerzo', 'cena', 'post_entreno'],
    macros: {
      calories: 380,
      protein: 44,
      carbs: 34,
      fats: 8,
      fiber: 7,
    },
    prepTimeMinutes: 12,
    cookTimeMinutes: 15,
    difficulty: 'Fácil',
    benefits: [
      'Elevada densidad nutricional con bajo aporte calórico para facilitar el déficit',
      'Espárragos con efecto diurético natural para eliminar retención de líquidos',
      'Quinoa como carbohidrato de bajo índice glucémico rica en aminoácidos',
      'Minerales e hidratación óptima con el vaso de agua mineral con limón'
    ],
    ingredients: [
      '180g de pechuga de pollo deshuesada a las finas hierbas',
      '60g de quinoa cocida',
      '6-8 espárragos verdes frescos al horno',
      '1 taza de ensalada fresca (lechuga romana, tomates cherry y orégano)',
      '1 vaso de agua mineral helada con rodaja de limón',
      '1 cucharadita de aceite de oliva virgen extra'
    ],
    instructions: [
      'Sazona la pechuga de pollo con pimienta negra, ajo en polvo y finas hierbas.',
      'Cocina el pollo a la plancha hasta dorar uniformemente por ambos lados.',
      'Saltea los espárragos verdes con un hilo de aceite de oliva y sal marina.',
      'Prepara la ensalada fresca de lechuga y tomates cherry aliñada con limón.',
      'Sirve la pechuga junto a la quinoa, espárragos y ensalada, acompañado con el vaso de agua mineral con limón.'
    ],
    tags: ['Definición Muscular', 'Déficit Calórico', 'Alta Proteína', 'Diurético Natural'],
    featured: true
  },
  {
    id: 'salmon-arroz-salvaje',
    title: 'Salmón Glaseado con Arroz Salvaje y Espárragos',
    subtitle: 'Rico en Omega-3 para acelerar la recuperación y reducir la inflamación',
    description: 'Lomo de salmón salvaje a la plancha con piel crujiente, acompañado de arroz salvaje al limón y espárragos verdes salteados. Nutrición premium para atletas.',
    image: salmonRiceImg,
    price: 14.99,
    category: 'proteinas',
    goal: ['masa_muscular', 'aumentar_fuerza', 'recuperacion', 'reducir_grasa'],
    timing: ['cena', 'almuerzo', 'post_entreno'],
    macros: {
      calories: 520,
      protein: 42,
      carbs: 40,
      fats: 20,
      fiber: 6,
    },
    prepTimeMinutes: 10,
    cookTimeMinutes: 15,
    difficulty: 'Fácil',
    benefits: [
      'Ácidos grasos Omega-3 (EPA/DHA) que disminuyen el dolor muscular tardío (DOMS)',
      'Proteína de altísima digestibilidad rica en aminoácidos esenciales',
      'Aporte de selenio, vitamina D y B12 para potenciar el metabolismo energético'
    ],
    ingredients: [
      '180g de filete de salmón fresco',
      '150g de arroz salvaje o arroz integral cocido',
      '8-10 espárragos verdes frescos',
      '1/2 limón (jugo y ralladura)',
      '1 cucharadita de salsa de soya reducida en sodio',
      'Sal de mar y pimienta recién molida'
    ],
    instructions: [
      'Sazona el salmón con sal, pimienta y un chorrito de jugo de limón.',
      'Saltea los espárragos en una sartén antiadherente caliente durante 4 minutos hasta que queden tiernos.',
      'En la misma sartén, cocina el salmón comenzando por el lado de la piel durante 4 minutos hasta que esté crujiente, luego voltea 2-3 minutos.',
      'Sirve sobre una cama de arroz salvaje caliente y adorna con rodajas de limón.'
    ],
    tags: ['Omega-3', 'Recuperación', 'Antiinflamatorio', 'Bajo en Sodio'],
    featured: true
  },
  {
    id: 'pancakes-avena-proteina',
    title: 'Pancakes Proteicos de Avena y Frutos Rojos',
    subtitle: 'Desayuno o pre-entreno energético cargado de fibra y glucógeno',
    description: 'Esponjosos pancakes elaborados con harina de avena entera, claras de huevo, proteína en polvo y banana. Coronados con crema de maní natural y frutos rojos ricos en antioxidantes.',
    image: proteinPancakesImg,
    price: 8.50,
    category: 'desayunos',
    goal: ['masa_muscular', 'aumentar_fuerza'],
    timing: ['desayuno', 'pre_entreno'],
    macros: {
      calories: 450,
      protein: 36,
      carbs: 52,
      fats: 10,
      fiber: 8,
    },
    prepTimeMinutes: 10,
    cookTimeMinutes: 10,
    difficulty: 'Fácil',
    benefits: [
      'Liberación constante de energía durante el entrenamiento intenso de fuerza',
      'Antioxidantes de los frutos rojos que combaten el estrés oxidativo',
      'Sabor delicioso sin azúcares añadidos ni harinas refinadas'
    ],
    ingredients: [
      '60g de harina de avena o avena molida',
      '1 scoop (30g) de proteína whey sabor vainilla o neutra',
      '3 claras de huevo + 1 huevo entero',
      '1/2 banana madura machacada',
      '1/2 cucharadita de polvo para hornear y canela',
      '1 cucharada de mantequilla de maní 100% natural',
      '1/2 taza de arándanos y frambuesas frescas'
    ],
    instructions: [
      'Licúa o mezcla en un tazón la avena, proteína en polvo, claras, banana, polvo de hornear y canela hasta obtener una mezcla homogénea.',
      'Calienta una sartén antiadherente a fuego medio con una gota de aceite de coco o spray de cocina.',
      'Vierte porciones de la mezcla y cocina hasta que salgan burbujas en la superficie (aproximadamente 2 min). Voltea y cocina 1 minuto más.',
      'Sirve la pila de pancakes, añade la mantequilla de maní tibia y decora con frutos rojos.'
    ],
    tags: ['Pre-Entreno', 'Desayuno Fit', 'Energía Completa'],
    featured: true
  },
  {
    id: 'yogurt-griego-preworkout',
    title: 'Bowl Pre-Entreno Digestivo de Yogurt y Banana',
    subtitle: 'Energía rápida de fácil digestión 30-45 minutos antes de entrenar',
    description: 'Yogurt griego natural bajo en grasa combinado con banana en rodajas, semillas de chía, nueces crujientes y un toque de miel pura. Diseñado para no recargar el estómago antes de hacer ejercicio.',
    image: preWorkoutBowlImg,
    price: 5.99,
    category: 'snacks',
    goal: ['aumentar_fuerza', 'recuperacion', 'reducir_grasa'],
    timing: ['pre_entreno', 'snack', 'desayuno'],
    macros: {
      calories: 340,
      protein: 24,
      carbs: 42,
      fats: 9,
      fiber: 5,
    },
    prepTimeMinutes: 5,
    cookTimeMinutes: 0,
    difficulty: 'Fácil',
    benefits: [
      'Relación ideal de carbohidratos simples y complejos para carga de glucógeno rápida',
      'Proteína de suero y caseína de digestión sostenida',
      'Magnesio y potasio de la banana para maximizar la contracción muscular'
    ],
    ingredients: [
      '200g de Yogurt Griego 0% materia grasa sin azúcar',
      '1 banana banana mediana madura',
      '1 cucharadita de miel pura de abeja',
      '1 cucharada de semillas de chía o linaza',
      '15g de nueces o almendras troceadas'
    ],
    instructions: [
      'Sirve el yogurt griego bien frío en un bowl.',
      'Corta la banana en rodajas finas y distribúyela sobre el yogurt.',
      'Agrega las semillas de chía y los frutos secos picados.',
      'Baña con un hilo de miel pura y consume 40 minutos antes de tu sesión de gimnasio.'
    ],
    tags: ['Pre-Workout Express', 'Sin Cocción', 'Carga de Glucógeno'],
    featured: true
  },
  {
    id: 'wrap-pavo-aguacate',
    title: 'Wrap Integral de Pavo, Queso Cottage y Espinacas',
    subtitle: 'Opción ligera y saciante ideal para déficit calórico y quema de grasa',
    description: 'Tortilla de trigo integral o avena rellena de pechuga de pavo baja en sodio, queso cottage cremoso rico en caseína, hojas frescas de espinaca y tomate picado.',
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&q=80&w=800',
    price: 7.50,
    category: 'snacks',
    goal: ['reducir_grasa', 'recuperacion'],
    timing: ['almuerzo', 'snack', 'cena'],
    macros: {
      calories: 360,
      protein: 34,
      carbs: 32,
      fats: 10,
      fiber: 6,
    },
    prepTimeMinutes: 8,
    cookTimeMinutes: 2,
    difficulty: 'Fácil',
    benefits: [
      'Bajo en densidad calórica pero extremadamente saciante por su fibra y proteína',
      'Queso cottage rico en proteína de caseína de lenta digestión',
      'Aporte de hierro vegetal y antioxidantes de las espinacas frescas'
    ],
    ingredients: [
      '1 tortilla integral grande (o de harina de almendras)',
      '120g de pechuga de pavo magra en lonjas',
      '3 cucharadas de queso cottage bajo en grasa',
      '1 taza de espinacas baby frescas',
      '4 rodajas de tomate fresco',
      '1/4 de aguacate untado'
    ],
    instructions: [
      'Unte el aguacate y el queso cottage uniformemente sobre la tortilla integral.',
      'Añade la capa de espinacas, rodajas de tomate y las lonjas de pavo.',
      'Sazona con orégano y un toque de pimienta.',
      'Enrolla firmemente el wrap y córtalo por la mitad en diagonal. Puedes dorarlo 1 minuto en sartén.'
    ],
    tags: ['Déficit Calórico', 'Bajo en Grasa', 'Rápido y Fácil']
  },
  {
    id: 'batido-postworkout-chocolate',
    title: 'Batido Anabólico de Proteína, Cacao y Avena',
    subtitle: 'Recarga inmediata post-entreno para maximizar la ventana anabólica',
    description: 'Batido cremoso de proteína aislado de suero de leche (Whey ISO), bebida de almendras sin azúcar, cacao puro antioxidante, avena rápida y crema de almendras.',
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&q=80&w=800',
    price: 6.50,
    category: 'batidos',
    goal: ['masa_muscular', 'aumentar_fuerza', 'recuperacion'],
    timing: ['post_entreno', 'snack'],
    macros: {
      calories: 390,
      protein: 38,
      carbs: 40,
      fats: 8,
      fiber: 6,
    },
    prepTimeMinutes: 3,
    cookTimeMinutes: 0,
    difficulty: 'Fácil',
    benefits: [
      'Absorción ultra rápida en los primeros 30 minutos tras entrenar',
      'Suministro de BCCA (Leucina, Isoleucina, Valina) para reparar fibras musculares',
      'Polifenoles del cacao que reducen la rigidez arterial y estimulan el óxido nítrico'
    ],
    ingredients: [
      '1.5 scoops (40g) de Proteína Whey ISO sabor Chocolate',
      '300ml de leche de almendras o leche descremada',
      '40g de hojuelas de avena',
      '1 cucharadita de cacao amargo en polvo 100% puro',
      '1/2 banana o cubos de hielo al gusto'
    ],
    instructions: [
      'Añade todos los ingredientes a la licuadora o shaker.',
      'Licúa a velocidad máxima durante 45 segundos hasta obtener una consistencia cremosa.',
      'Tómalo inmediatamente después de tu rutina de ejercicios de pesas o hipertrofia.'
    ],
    tags: ['Post-Workout', 'Batido Proteico', 'Absorción Rápida']
  },
  {
    id: 'carne-magra-papas-asadas',
    title: 'Bife Magro a la Parrilla con Papas Asadas y Romero',
    subtitle: 'Alto aporte de creatina natural, hierro hemo y zinc para fuerza máxima',
    description: 'Corte magro de res (lomo o cuadril) sazonado con hierbas, acompañado de papitas criollas horneadas con romero y una ensalada fresca con aderezo de limón.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800',
    price: 12.99,
    category: 'proteinas',
    goal: ['aumentar_fuerza', 'masa_muscular'],
    timing: ['almuerzo', 'cena'],
    macros: {
      calories: 620,
      protein: 52,
      carbs: 48,
      fats: 18,
      fiber: 5,
    },
    prepTimeMinutes: 15,
    cookTimeMinutes: 25,
    difficulty: 'Intermedio',
    benefits: [
      'Excelente fuente natural de creatina para incrementar la fuerza explosiva',
      'Hierro hemo de alta biodisponibilidad que previene la fatiga y optimiza la oxigenación',
      'Zinc mineral clave en la síntesis natural de testosterona'
    ],
    ingredients: [
      '220g de lomo fino o corte magro de res',
      '200g de papas pequeñas lavadas con cáscara',
      '1 rama de romero fresco y 2 dientes de ajo',
      '1 cucharada de aceite de oliva',
      'Ensalada verde (rúcula, lechuga y tomate cherry)',
      'Sal gruesa y pimienta negra'
    ],
    instructions: [
      'Corta las papas en mitades, mézclalas con aceite de oliva, romero picado, sal y ajo. Hornea a 200°C por 20 minutos hasta que estén doradas.',
      'Calienta la sartén de hierro o parrilla a fuego alto.',
      'Cocina el bife de res 3-4 minutos por lado para término medio o 5 minutos para 3/4.',
      'Deja reposar la carne 3 minutos antes de trinchera para mantener los jugos y sirve con las papas.'
    ],
    tags: ['Creatina Natural', 'Rendimiento', 'Carga de Fuerza']
  },
  {
    id: 'omelette-claras-champinones',
    title: 'Omelette Proteico de Claras, Champiñones y Pavo',
    subtitle: 'Desayuno o cena ultra magra rica en proteína de valor biológico 100%',
    description: 'Omelette ligero preparado con 5 claras de huevo y 1 yema, salteado de champiñones portobello, espinacas y lonjas de pavo. Acompañado de tostada de masa madre.',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800',
    price: 7.99,
    category: 'desayunos',
    goal: ['reducir_grasa', 'recuperacion'],
    timing: ['desayuno', 'cena'],
    macros: {
      calories: 320,
      protein: 36,
      carbs: 22,
      fats: 8,
      fiber: 4,
    },
    prepTimeMinutes: 7,
    cookTimeMinutes: 8,
    difficulty: 'Fácil',
    benefits: [
      'Cero grasas saturadas extra y muy bajo contenido calórico',
      'Proteína de la clara de huevo con el índice de eficiencia proteica más alto',
      'Hongos y vegetal de hoja verde cargados de micronutrientes y electrolitos'
    ],
    ingredients: [
      '5 claras de huevo + 1 huevo entero',
      '80g de champiñones laminados',
      '1 taza de espinacas baby',
      '50g de pechuga de pavo picada',
      '1 rebanada de pan de masa madre o integral',
      'Sal, orégano y spray vegetal'
    ],
    instructions: [
      'Saltea los champiñones y espinacas en una sartén con spray de cocina durante 3 minutos.',
      'Bate las claras con el huevo entero, sal y orégano.',
      'Vierte los huevos batidos sobre los vegetales salteados a fuego bajo.',
      'Añade el pavo en el centro, dobla el omelette por la mitad y cocina hasta que cuaje.',
      'Acompaña con la tostada de masa madre dorada.'
    ],
    tags: ['Cero Grasa Extra', 'Definición', 'Desayuno Magro']
  }
];
