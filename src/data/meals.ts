import { MealItem } from '../types';

import proteinBowlImg from '../assets/images/gym_protein_bowl_1784952346493.jpg';
import muscleGainPlateImg from '../assets/images/muscle_gain_chicken_rice_1784952990573.jpg';
import definitionPlateImg from '../assets/images/definition_chicken_quinoa_plate_1784953059886.jpg';
import salmonRiceImg from '../assets/images/gym_salmon_rice_1784952355961.jpg';
import proteinPancakesImg from '../assets/images/gym_protein_pancakes_1784952364105.jpg';
import preWorkoutBowlImg from '../assets/images/gym_pre_workout_bowl_1784952373325.jpg';
import eggFitnessMealsImg from '../assets/images/egg_fitness_bowl_rice_avocado_cherry_1784960247270.jpg';
import eggMuffinsFitnessImg from '../assets/images/egg_muffins_recipe_exact_1784959153317.jpg';
import poachedEggsAsparagusImg from '../assets/images/poached_eggs_asparagus_1784958324372.jpg';
import boiledEggSweetPotatoImg from '../assets/images/huevos_cocidos_camote_brocoli_1784960150964.jpg';
import tunaEggSaladImg from '../assets/images/fitness_egg_salad_chia_1784960006064.jpg';
import turkeyWhiteOmeletteImg from '../assets/images/omelette_claras_pavo_champinones_1784959821240.jpg';
import boiledEggAvocadoSaladImg from '../assets/images/boiled_egg_avocado_salad_1784958584727.jpg';
import scrambledEggsQuinoaImg from '../assets/images/scrambled_eggs_vegetables_quinoa_1784959927134.jpg';
import toastBoiledEggAvocadoImg from '../assets/images/toast_boiled_egg_avocado_single_plate_1784960055822.jpg';
import shakshukaLigeraImg from '../assets/images/shakshuka_boiled_eggs_recipe_1784959552283.jpg';
import corvinaCamoteImg from '../assets/images/corvina_camote_1784960613560.jpg';
import carnePapaVegImg from '../assets/images/carne_papa_veg_1784960625683.jpg';

export const INITIAL_MEALS: MealItem[] = [
  // ==========================================
  // RECETAS OFICIALES PARA GANAR MASA MUSCULAR
  // ==========================================
  {
    id: 'pollo-arroz-aguacate',
    title: 'Pollo a la plancha con arroz integral y aguacate',
    subtitle: '200g pechuga de pollo, 1 taza arroz integral, ½ aguacate, brócoli y aceite de oliva',
    description: 'Aporta proteínas de alta calidad y carbohidratos complejos para favorecer el crecimiento muscular.',
    image: muscleGainPlateImg,
    price: 10.99,
    category: 'proteinas',
    goal: ['masa_muscular', 'aumentar_fuerza', 'recuperacion'],
    timing: ['almuerzo', 'cena', 'post_entreno'],
    macros: {
      calories: 540,
      protein: 52,
      carbs: 48,
      fats: 16,
      fiber: 7,
    },
    prepTimeMinutes: 12,
    cookTimeMinutes: 18,
    difficulty: 'Fácil',
    benefits: [
      'Aporta proteínas de alta calidad y carbohidratos complejos para favorecer el crecimiento muscular.',
      'Proteína magra para síntesis muscular y reparación proteica.',
      'Grasas saludables del aguacate que optimizan el perfil hormonal.'
    ],
    ingredients: [
      '200 g de pechuga de pollo',
      '1 taza de arroz integral',
      '½ aguacate',
      'Brócoli al vapor',
      '1 cucharadita de aceite de oliva'
    ],
    instructions: [
      'Sazona la pechuga de pollo con sal marina, ajo en polvo y pimienta.',
      'Cocina el pollo a la plancha con 1 cucharadita de aceite de oliva durante 6 minutos por lado hasta que dore.',
      'Sirve acompañado de 1 taza de arroz integral caliente y el brócoli al vapor.',
      'Agrega medio aguacate cortado en láminas por encima y sirve tibio.'
    ],
    tags: ['Masa Muscular', 'Alta Proteína', 'Carbs Complejos', 'Hipertrofia'],
    featured: true
  },
  {
    id: 'corvina-pure-camote',
    title: 'Corvina al horno con puré de camote',
    subtitle: '200g filete de corvina, 250g camote, ensalada de lechuga y tomate, limón',
    description: 'Proteínas magras y carbohidratos de absorción lenta para una mejor recuperación muscular e hipertrofia.',
    image: corvinaCamoteImg,
    price: 12.50,
    category: 'proteinas',
    goal: ['masa_muscular', 'recuperacion'],
    timing: ['almuerzo', 'cena', 'post_entreno'],
    macros: {
      calories: 480,
      protein: 42,
      carbs: 58,
      fats: 7,
      fiber: 8,
    },
    prepTimeMinutes: 15,
    cookTimeMinutes: 20,
    difficulty: 'Fácil',
    benefits: [
      'Proteínas magras y carbohidratos de absorción lenta para una mejor recuperación.',
      'Proteína marina de fácil digestión para consumo post-entrenamiento.',
      'Rico en potasio y betacarotenos del camote.'
    ],
    ingredients: [
      '200 g de filete de corvina',
      '250 g de camote',
      'Ensalada de lechuga y tomate',
      'Limón'
    ],
    instructions: [
      'Hornea el filete de corvina sazonado con sal, pimienta y limón a 190°C por 18 minutos.',
      'Cocina el camote en agua hirviendo y machácalo hasta formar un puré suave.',
      'Prepara una ensalada fresca con lechuga, tomate y aderezo de limón.',
      'Sirve el filete de corvina sobre el puré de camote con la ensalada al lado.'
    ],
    tags: ['Masa Muscular', 'Proteína Marina', 'Recuperación', 'Bajo en Grasa'],
    featured: true
  },
  {
    id: 'carne-res-papa-vegetales',
    title: 'Carne de res magra con papa y vegetales',
    subtitle: '200g lomo fino o pulpa negra, 2 papas medianas cocidas, brócoli, zanahoria, aceite de oliva',
    description: 'Rica en hierro, creatina natural y proteínas para aumentar la fuerza y la masa muscular.',
    image: carnePapaVegImg,
    price: 12.99,
    category: 'proteinas',
    goal: ['masa_muscular', 'aumentar_fuerza'],
    timing: ['almuerzo', 'cena'],
    macros: {
      calories: 580,
      protein: 48,
      carbs: 52,
      fats: 18,
      fiber: 6,
    },
    prepTimeMinutes: 15,
    cookTimeMinutes: 20,
    difficulty: 'Fácil',
    benefits: [
      'Rica en hierro, creatina natural y proteínas para aumentar la fuerza y la masa muscular.',
      'Aporte de hierro hemo de máxima biodisponibilidad.',
      'Recarga de carbohidratos limpios para el rendimiento físico.'
    ],
    ingredients: [
      '200 g de lomo fino o pulpa negra',
      '2 papas medianas cocidas',
      'Brócoli',
      'Zanahoria',
      'Aceite de oliva'
    ],
    instructions: [
      'Corta las 2 papas medianas y cocínalas en agua salada hasta que estén suaves.',
      'Saltea el brócoli y las zanahorias al vapor con unas gotas de aceite de oliva.',
      'Sazona el corte de res con sal y pimienta y cocina a la plancha a fuego alto al término deseado.',
      'Sirve la carne de res magra con las papas y la guarnición de vegetales.'
    ],
    tags: ['Masa Muscular', 'Creatina Natural', 'Hierro Hemo', 'Aumentar Fuerza'],
    featured: true
  },
  {
    id: 'pavo-pasta-integral',
    title: 'Pavo con pasta integral',
    subtitle: '200g pechuga de pavo, 1 taza pasta integral, champiñones, pimiento rojo, espinaca',
    description: 'Excelente combinación para entrenamientos intensos y recuperación muscular.',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=800',
    price: 11.50,
    category: 'proteinas',
    goal: ['masa_muscular', 'aumentar_fuerza', 'recuperacion'],
    timing: ['almuerzo', 'post_entreno'],
    macros: {
      calories: 520,
      protein: 46,
      carbs: 55,
      fats: 8,
      fiber: 7,
    },
    prepTimeMinutes: 10,
    cookTimeMinutes: 15,
    difficulty: 'Fácil',
    benefits: [
      'Excelente combinación para entrenamientos intensos y recuperación muscular.',
      'Carbohidratos complejos de absorción media para llenar depósitos de glucógeno.',
      'Bajo contenido en grasas saturadas.'
    ],
    ingredients: [
      '200 g de pechuga de pavo',
      '1 taza de pasta integral',
      'Champiñones',
      'Pimiento rojo',
      'Espinaca'
    ],
    instructions: [
      'Cocina la pasta integral en agua hirviendo con sal hasta que esté al dente.',
      'Saltea la pechuga de pavo en tiras con los champiñones, pimiento rojo y la espinaca.',
      'Mezcla la pasta con el pavo y los vegetales salteados.',
      'Sirve caliente con una pizca de orégano.'
    ],
    tags: ['Masa Muscular', 'Post-Workout', 'Alta Proteína', 'Cero Grasa Extra'],
    featured: true
  },
  {
    id: 'atun-quinoa-aguacate',
    title: 'Atún con quinoa y aguacate',
    subtitle: '200g atún fresco o en agua, 1 taza quinoa, ½ aguacate, pepino, tomate',
    description: 'Bowl saludable con 200g de atún, base de quinoa andina, medio aguacate, pepino en cubos y tomate fresco con un toque de limón criollo.',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=800',
    price: 10.99,
    category: 'proteinas',
    goal: ['masa_muscular', 'recuperacion'],
    timing: ['almuerzo', 'cena', 'post_entreno'],
    macros: {
      calories: 510,
      protein: 48,
      carbs: 42,
      fats: 15,
      fiber: 8,
    },
    prepTimeMinutes: 10,
    cookTimeMinutes: 10,
    difficulty: 'Fácil',
    benefits: [
      'Alto contenido de proteínas y grasas saludables para el crecimiento muscular.',
      'Aporte de Omega-3 proveniente del atún y el aguacate.',
      'Proteína completa y fibra de la quinoa andina con pepino y tomate hidratantes.'
    ],
    ingredients: [
      '200 g de atún fresco o en agua',
      '1 taza de quinoa',
      '½ aguacate',
      'Pepino',
      'Tomate'
    ],
    instructions: [
      'Lava y cocina la quinoa en agua durante 12-15 minutos a fuego medio.',
      'Corta el pepino en cubos pequeños, el tomate en rodajas y el medio aguacate en láminas.',
      'Sirve la quinoa como base en el bowl y coloca encima los 200g de atún lomo o en agua.',
      'Acompaña con el pepino, tomate y aguacate, y sazona con un chorrito de limón criollo y sal.'
    ],
    tags: ['Masa Muscular', 'Grasas Saludables', 'Omega-3', 'Nutritivo'],
    featured: true
  },
  {
    id: 'camarones-arroz-vegetales',
    title: 'Camarones con arroz y vegetales',
    subtitle: '200g camarones, 1 taza arroz blanco o integral, brócoli, zanahoria, ajo',
    description: 'Proteína de alta calidad y bajo contenido de grasa para desarrollo muscular magro.',
    image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&q=80&w=800',
    price: 12.99,
    category: 'proteinas',
    goal: ['masa_muscular', 'aumentar_fuerza'],
    timing: ['almuerzo', 'cena', 'post_entreno'],
    macros: {
      calories: 440,
      protein: 40,
      carbs: 50,
      fats: 6,
      fiber: 5,
    },
    prepTimeMinutes: 10,
    cookTimeMinutes: 12,
    difficulty: 'Fácil',
    benefits: [
      'Proteína de alta calidad y bajo contenido de grasa.',
      'Rico en antioxidantes como astaxantina y minerales traza.',
      'Ideal para recargas de carbohidratos con proteína magra.'
    ],
    ingredients: [
      '200 g de camarones',
      '1 taza de arroz blanco o integral',
      'Brócoli',
      'Zanahoria',
      'Ajo'
    ],
    instructions: [
      'Saltea el ajo finamente picado en una sartén con spray de cocina.',
      'Agrega los camarones limpios y saltea durante 3-4 minutos hasta que doren.',
      'Cocina el brócoli y las rodajas de zanahoria al vapor.',
      'Acomoda en el plato el arroz, los camarones al ajo y la guarnición de vegetales.'
    ],
    tags: ['Masa Muscular', 'Proteína Magra', 'Volumen Limpio'],
    featured: true
  },
  {
    id: 'omelette-huevos-avena',
    title: 'Omelette de huevos con avena',
    subtitle: '3 huevos enteros, 3 claras, espinaca, champiñones, ½ taza de avena cocida',
    description: 'Ideal para el desayuno o después del entrenamiento con máxima calidad proteica.',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800',
    price: 8.50,
    category: 'desayunos',
    goal: ['masa_muscular', 'aumentar_fuerza'],
    timing: ['desayuno', 'post_entreno'],
    macros: {
      calories: 410,
      protein: 34,
      carbs: 32,
      fats: 16,
      fiber: 5,
    },
    prepTimeMinutes: 8,
    cookTimeMinutes: 8,
    difficulty: 'Fácil',
    benefits: [
      'Ideal para el desayuno o después del entrenamiento.',
      'Poder anabólico con el perfil completo de aminoácidos del huevo.',
      'Avena que proporciona energía estable y duradera.'
    ],
    ingredients: [
      '3 huevos enteros',
      '3 claras',
      'Espinaca',
      'Champiñones',
      '½ taza de avena cocida'
    ],
    instructions: [
      'Bate los 3 huevos enteros con las 3 claras y una pizca de sal.',
      'Saltea la espinaca y los champiñones en una sartén antiadherente.',
      'Vierte la mezcla de huevos, cocina a fuego medio hasta cuajar y dobla por la mitad.',
      'Sirve acompañado de la media taza de avena cocida tibia.'
    ],
    tags: ['Masa Muscular', 'Desayuno Anabólico', 'Proteína Completa'],
    featured: true
  },
  {
    id: 'menestra-lentejas-pollo',
    title: 'Menestra de lentejas con pollo',
    subtitle: '1 taza de lentejas, 200g pechuga de pollo, arroz integral, aguacate',
    description: 'Combina proteínas animales y vegetales para favorecer la hipertrofia muscular.',
    image: 'https://images.unsplash.com/photo-1546069901-eacef0df6022?auto=format&fit=crop&q=80&w=800',
    price: 11.99,
    category: 'proteinas',
    goal: ['masa_muscular', 'aumentar_fuerza'],
    timing: ['almuerzo', 'post_entreno'],
    macros: {
      calories: 630,
      protein: 56,
      carbs: 68,
      fats: 14,
      fiber: 12,
    },
    prepTimeMinutes: 15,
    cookTimeMinutes: 25,
    difficulty: 'Intermedio',
    benefits: [
      'Combina proteínas animales y vegetales para favorecer la hipertrofia muscular.',
      'Rico en fibra, hierro y folatos para un metabolismo activo.',
      'Excelente densidad calórica para desarrollo muscular constante.'
    ],
    ingredients: [
      '1 taza de lentejas',
      '200 g de pechuga de pollo',
      'Arroz integral',
      'Aguacate'
    ],
    instructions: [
      'Cocina las lentejas hasta que estén tiernas con refrito casero de cebolla y pimiento.',
      'Cocina la pechuga de pollo a la plancha hasta dorar.',
      'Sirve una porción de arroz integral, la menestra de lentejas jugosa y el pollo.',
      'Decora con rebanadas de aguacate fresco.'
    ],
    tags: ['Masa Muscular', 'Hipertrofia', 'Plato Tradicional', 'Gran Aporte Proteico'],
    featured: true
  },
  {
    id: 'queso-fresco-verde-asado-huevo',
    title: 'Queso fresco con verde asado y huevo',
    subtitle: '150g queso fresco bajo en grasa, 1 verde asado, 2 huevos cocidos, tomate',
    description: 'Excelente opción para un desayuno o cena rica en proteínas y energía.',
    image: 'https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?auto=format&fit=crop&q=80&w=800',
    price: 8.99,
    category: 'desayunos',
    goal: ['masa_muscular', 'aumentar_fuerza'],
    timing: ['desayuno', 'cena', 'snack'],
    macros: {
      calories: 530,
      protein: 38,
      carbs: 48,
      fats: 19,
      fiber: 5,
    },
    prepTimeMinutes: 10,
    cookTimeMinutes: 15,
    difficulty: 'Fácil',
    benefits: [
      'Excelente opción para un desayuno o cena rica en proteínas y energía.',
      'Energía de carbohidrato complejo del plátano verde.',
      'Combinación deliciosa con queso fresco magro y huevo.'
    ],
    ingredients: [
      '150 g de queso fresco bajo en grasa',
      '1 verde asado',
      '2 huevos cocidos',
      'Tomate'
    ],
    instructions: [
      'Asa el plátano verde a la parrilla o sartén hasta que esté tierno.',
      'Hierve los 2 huevos durante 8-10 minutos.',
      'Sirve el verde asado con el queso fresco bajo en grasa cortado en lonjas, los huevos cocidos y rodajas de tomate.'
    ],
    tags: ['Masa Muscular', 'Desayuno Criollo', 'Carbs Complejos'],
    featured: true
  },
  {
    id: 'batido-anabolico-natural',
    title: 'Batido anabólico natural',
    subtitle: '300 ml de leche, 1 banano, 40 g de avena, 2 cdas mantequilla de maní, canela, proteína (opcional)',
    description: 'Aporta proteínas, carbohidratos y calorías saludables para favorecer el aumento de masa muscular después del entrenamiento.',
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&q=80&w=800',
    price: 6.50,
    category: 'batidos',
    goal: ['masa_muscular', 'aumentar_fuerza', 'recuperacion'],
    timing: ['post_entreno', 'snack', 'desayuno'],
    macros: {
      calories: 550,
      protein: 35,
      carbs: 65,
      fats: 18,
      fiber: 7,
    },
    prepTimeMinutes: 3,
    cookTimeMinutes: 0,
    difficulty: 'Fácil',
    benefits: [
      'Aporta proteínas, carbohidratos y calorías saludables para favorecer el aumento de masa muscular después del entrenamiento.',
      'Suministro rápido de nutrientes para la ventana anabólica.',
      'Favorece la ganancia de peso y músculo sin pesadez.'
    ],
    ingredients: [
      '300 ml de leche',
      '1 banano',
      '40 g de avena',
      '2 cucharadas de mantequilla de maní',
      'Canela',
      'Proteína de suero (opcional)'
    ],
    instructions: [
      'Vierte los 300 ml de leche en el vaso de la licuadora.',
      'Agrega el banano, los 40g de avena, las 2 cucharadas de mantequilla de maní y un toque de canela.',
      'Añade un scoop de proteína de suero si lo deseas.',
      'Licúa a alta velocidad durante 45 segundos y consume recién preparado.'
    ],
    tags: ['Masa Muscular', 'Batido Anabólico', 'Post-Workout'],
    featured: true
  },

  // ==========================================
  // RECETAS DE DEFINICIÓN Y OTRAS CATEGORÍAS
  // ==========================================
  {
    id: 'menu-definicion-muscular',
    title: 'Plato Fitness Gourmet para Definición Muscular',
    subtitle: 'Pechuga de pollo, quinoa, espárragos, ensalada fresca y agua mineral con limón',
    description: 'Menú balanceado de alta definición y quema de grasa: Pechuga de pollo a la plancha, quinoa ligera, espárragos salteados y ensalada fresca de tomate y lechuga.',
    image: definitionPlateImg,
    price: 11.50,
    category: 'proteinas',
    goal: ['reducir_grasa', 'recuperacion'],
    timing: ['almuerzo', 'cena', 'post_entreno'],
    macros: {
      calories: 380,
      protein: 44,
      carbs: 28,
      fats: 10,
      fiber: 7,
    },
    prepTimeMinutes: 12,
    cookTimeMinutes: 15,
    difficulty: 'Fácil',
    benefits: [
      'Elevada densidad nutricional con bajo aporte calórico para facilitar el déficit.',
      'Espárragos con efecto diurético natural para eliminar retención de líquidos.',
      'Quinoa como carbohidrato de bajo índice glucémico rica en aminoácidos.'
    ],
    ingredients: [
      '180g de pechuga de pollo deshuesada a las finas hierbas',
      '60g de quinoa cocida',
      '6-8 espárragos verdes frescos al horno',
      '1 taza de ensalada fresca (lechuga romana, tomates cherry y orégano)',
      '1 vaso de agua mineral helada con rodaja de limón'
    ],
    instructions: [
      'Sazona la pechuga de pollo con pimienta negra, ajo en polvo y finas hierbas.',
      'Cocina el pollo a la plancha hasta dorar uniformemente por ambos lados.',
      'Saltea los espárragos verdes con un hilo de aceite de oliva y sal marina.',
      'Prepara la ensalada fresca de lechuga y tomates cherry aliñada con limón.',
      'Sirve la pechuga junto a la quinoa, espárragos y ensalada.'
    ],
    tags: ['Definición Muscular', 'Déficit Calórico', 'Alta Proteína']
  },
  {
    id: 'salmon-arroz-salvaje',
    title: 'Salmón Glaseado con Arroz Salvaje y Espárragos',
    subtitle: 'Rico en Omega-3 para acelerar la recuperación y reducir la inflamación',
    description: 'Lomo de salmón salvaje a la plancha con piel crujiente, acompañado de arroz salvaje al limón y espárragos verdes salteados.',
    image: salmonRiceImg,
    price: 14.99,
    category: 'proteinas',
    goal: ['aumentar_fuerza', 'recuperacion'],
    timing: ['cena', 'almuerzo', 'post_entreno'],
    macros: {
      calories: 510,
      protein: 42,
      carbs: 40,
      fats: 20,
      fiber: 6,
    },
    prepTimeMinutes: 10,
    cookTimeMinutes: 15,
    difficulty: 'Fácil',
    benefits: [
      'Ácidos grasos Omega-3 (EPA/DHA) que disminuyen el dolor muscular tardío.',
      'Proteína de altísima digestibilidad rica en aminoácidos esenciales.',
      'Aporte de selenio, vitamina D y B12 para el metabolismo energético.'
    ],
    ingredients: [
      '180g de filete de salmón fresco',
      '150g de arroz salvaje o arroz integral cocido',
      '8-10 espárragos verdes frescos',
      '1/2 limón (jugo y ralladura)',
      '1 cucharadita de salsa de soya reducida en sodio'
    ],
    instructions: [
      'Sazona el salmón con sal, pimienta y un chorrito de jugo de limón.',
      'Saltea los espárragos en una sartén antiadherente durante 4 minutos.',
      'Cocina el salmón comenzando por el lado de la piel durante 4 minutos.',
      'Sirve sobre el arroz salvaje caliente.'
    ],
    tags: ['Omega-3', 'Recuperación', 'Antiinflamatorio']
  },
  {
    id: 'pancakes-avena-proteina',
    title: 'Pancakes Proteicos de Avena y Frutos Rojos',
    subtitle: 'Desayuno o pre-entreno energético cargado de fibra y glucógeno',
    description: 'Esponjosos pancakes elaborados con harina de avena entera, claras de huevo, proteína en polvo y banana.',
    image: proteinPancakesImg,
    price: 8.50,
    category: 'desayunos',
    goal: ['aumentar_fuerza', 'recuperacion'],
    timing: ['desayuno', 'pre_entreno'],
    macros: {
      calories: 450,
      protein: 36,
      carbs: 52,
      fats: 11,
      fiber: 8,
    },
    prepTimeMinutes: 10,
    cookTimeMinutes: 10,
    difficulty: 'Fácil',
    benefits: [
      'Liberación constante de energía durante el entrenamiento intenso.',
      'Antioxidantes de los frutos rojos que combaten el estrés oxidativo.',
      'Sabor delicioso sin azúcares añadidos ni harinas refinadas.'
    ],
    ingredients: [
      '60g de harina de avena o avena molida',
      '1 scoop de proteína whey sabor vainilla',
      '3 claras de huevo + 1 huevo entero',
      '1/2 banana madura machacada',
      '1/2 taza de arándanos y frambuesas'
    ],
    instructions: [
      'Licúa la avena, proteína en polvo, claras, banana y canela.',
      'Cocina porciones en una sartén antiadherente caliente.',
      'Voltea cuando salgan burbujas en la superficie.',
      'Sirve decorado con frutos rojos.'
    ],
    tags: ['Pre-Entreno', 'Desayuno Fit', 'Energía Completa']
  },
  {
    id: 'yogurt-griego-preworkout',
    title: 'Bowl Pre-Entreno Digestivo de Yogurt y Banana',
    subtitle: 'Energía rápida de fácil digestión 30-45 minutos antes de entrenar',
    description: 'Yogurt griego natural bajo en grasa combinado con banana en rodajas, semillas de chía y miel pura.',
    image: preWorkoutBowlImg,
    price: 5.99,
    category: 'snacks',
    goal: ['aumentar_fuerza', 'recuperacion'],
    timing: ['pre_entreno', 'snack', 'desayuno'],
    macros: {
      calories: 370,
      protein: 25,
      carbs: 45,
      fats: 10,
      fiber: 5,
    },
    prepTimeMinutes: 5,
    cookTimeMinutes: 0,
    difficulty: 'Fácil',
    benefits: [
      'Relación ideal de carbohidratos simples y complejos para carga de glucógeno rápida.',
      'Proteína de suero y caseína de digestión sostenida.',
      'Magnesio y potasio de la banana para la contracción muscular.'
    ],
    ingredients: [
      '200g de Yogurt Griego 0% materia grasa',
      '1 banana mediana madura',
      '1 cucharadita de miel pura de abeja',
      '1 cucharada de semillas de chía'
    ],
    instructions: [
      'Sirve el yogurt griego bien frío en un bowl.',
      'Corta la banana en rodajas y colócala sobre el yogurt.',
      'Espolvorea semillas de chía y baña con miel pura.'
    ],
    tags: ['Pre-Workout Express', 'Sin Cocción', 'Carga de Glucógeno']
  },
  {
    id: 'wrap-pavo-aguacate',
    title: 'Wrap Integral de Pavo, Queso Cottage y Espinacas',
    subtitle: 'Tortilla integral, pechuga de pavo magra, queso cottage, espinacas y tomate',
    description: 'Tortilla de trigo integral rellena de pechuga de pavo baja en sodio, queso cottage cremoso y espinacas.',
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&q=80&w=800',
    price: 7.50,
    category: 'snacks',
    goal: ['reducir_grasa', 'recuperacion'],
    timing: ['almuerzo', 'snack', 'cena'],
    macros: {
      calories: 360,
      protein: 35,
      carbs: 32,
      fats: 10,
      fiber: 6,
    },
    prepTimeMinutes: 8,
    cookTimeMinutes: 2,
    difficulty: 'Fácil',
    benefits: [
      'Bajo en densidad calórica pero extremadamente saciante.',
      'Queso cottage rico en proteína de caseína de lenta digestión.',
      'Aporte de hierro vegetal de las espinacas.'
    ],
    ingredients: [
      '1 tortilla integral grande',
      '120g de pechuga de pavo magra',
      '3 cucharadas de queso cottage bajo en grasa',
      '1 taza de espinacas baby',
      '4 rodajas de tomate'
    ],
    instructions: [
      'Unta el queso cottage sobre la tortilla integral.',
      'Añade la capa de espinacas, tomate y las lonjas de pavo.',
      'Enrolla firmemente y corta por la mitad.'
    ],
    tags: ['Déficit Calórico', 'Bajo en Grasa', 'Rápido y Fácil']
  },
  {
    id: 'omelette-claras-champinones',
    title: 'Omelette Proteico de Claras, Champiñones y Pavo',
    subtitle: '5 claras de huevo, 1 huevo entero, champiñones, espinacas y pechuga de pavo',
    description: 'Omelette ligero preparado con 5 claras de huevo y 1 yema, salteado de champiñones y espinacas.',
    image: turkeyWhiteOmeletteImg,
    price: 7.99,
    category: 'desayunos',
    goal: ['reducir_grasa', 'recuperacion'],
    timing: ['desayuno', 'cena'],
    macros: {
      calories: 320,
      protein: 38,
      carbs: 21,
      fats: 9,
      fiber: 4,
    },
    prepTimeMinutes: 7,
    cookTimeMinutes: 8,
    difficulty: 'Fácil',
    benefits: [
      'Cero grasas saturadas extra y muy bajo contenido calórico.',
      'Proteína de la clara de huevo con alto índice de eficiencia.',
      'Rico en micronutrientes y electrolitos.'
    ],
    ingredients: [
      '5 claras de huevo + 1 huevo entero',
      '80g de champiñones laminados',
      '1 taza de espinacas baby',
      '50g de pechuga de pavo picada'
    ],
    instructions: [
      'Saltea los champiñones y espinacas en una sartén por 3 minutos.',
      'Bate las claras con el huevo entero y vierte sobre los vegetales.',
      'Añade el pavo en el centro y dobla por la mitad.'
    ],
    tags: ['Cero Grasa Extra', 'Definición', 'Desayuno Magro']
  },
  {
    id: 'huevos-cocidos-aguacate-ensalada',
    title: 'Huevos Cocidos con Aguacate y Ensalada',
    subtitle: '2 huevos cocidos, aguacate, lechuga, tomate, pepino y aderezo de limón',
    description: 'Proteína de alta calidad y grasas saludables que aumentan la saciedad en déficit calórico.',
    image: boiledEggAvocadoSaladImg,
    price: 7.99,
    category: 'desayunos',
    goal: ['reducir_grasa'],
    timing: ['desayuno', 'snack', 'cena'],
    macros: {
      calories: 280,
      protein: 15,
      carbs: 10,
      fats: 20,
      fiber: 6,
    },
    prepTimeMinutes: 8,
    cookTimeMinutes: 10,
    difficulty: 'Fácil',
    benefits: [
      'Proteína de alta calidad y grasas saludables que aumentan la saciedad.',
      'Ayuda a controlar el apetito durante todo el día.',
      'Aporte natural de electrolitos y potasio.'
    ],
    ingredients: [
      '2 huevos cocidos',
      '1/2 aguacate maduro',
      'Lechuga fresca picada',
      'Tomate en rodajas',
      'Pepino laminado'
    ],
    instructions: [
      'Hierve los 2 huevos durante 8-10 minutos y pela.',
      'Crea una cama de lechuga, tomate y pepino.',
      'Coloca los huevos cortados por la mitad y el aguacate.',
      'Rocía con jugo de limón fresco.'
    ],
    tags: ['Saciante', 'Grasas Saludables', 'Bajo en Carb']
  },
  {
    id: 'huevos-revueltos-vegetales-quinoa',
    title: 'Huevos Revueltos con Vegetales y Quinoa',
    subtitle: '2 huevos, 3 claras, brócoli, pimiento rojo, espinaca y ½ taza de quinoa',
    description: 'Favorece la recuperación muscular y aporta vitaminas y minerales esenciales.',
    image: scrambledEggsQuinoaImg,
    price: 8.99,
    category: 'desayunos',
    goal: ['reducir_grasa', 'recuperacion'],
    timing: ['desayuno', 'almuerzo'],
    macros: {
      calories: 340,
      protein: 28,
      carbs: 29,
      fats: 12,
      fiber: 6,
    },
    prepTimeMinutes: 10,
    cookTimeMinutes: 12,
    difficulty: 'Fácil',
    benefits: [
      'Favorece la recuperación muscular y aporta vitaminas y minerales.',
      'Carbohidratos sostenidos sin picos de insulina.',
      'Rico en micronutrientes como ácido fólico y vitamina C.'
    ],
    ingredients: [
      '2 huevos enteros + 3 claras',
      'Floretes de brócoli picados',
      'Pimiento rojo picado',
      'Espinaca fresca',
      '1/2 taza de quinoa cocida'
    ],
    instructions: [
      'Saltea el brócoli y pimiento rojo en una sartén por 4 minutos.',
      'Añade la espinaca y los huevos batidos.',
      'Revuelve suavemente a fuego medio.',
      'Sirve acompañado de la quinoa cocida.'
    ],
    tags: ['Recuperación', 'Rico en Fibra', 'Energía Sostenida']
  },
  {
    id: 'huevos-pochados-esparragos',
    title: 'Huevos Pochados con Espárragos',
    subtitle: '2 huevos pochados, espárragos, tomate cherry, espinaca y 1 rebanada de pan integral',
    description: 'Bajo en calorías y rico en proteína. Elegante platillo con yemas sedosas sobre espárragos crujientes.',
    image: poachedEggsAsparagusImg,
    price: 8.50,
    category: 'desayunos',
    goal: ['reducir_grasa'],
    timing: ['desayuno', 'cena'],
    macros: {
      calories: 240,
      protein: 18,
      carbs: 18,
      fats: 11,
      fiber: 4,
    },
    prepTimeMinutes: 8,
    cookTimeMinutes: 6,
    difficulty: 'Intermedio',
    benefits: [
      'Bajo en calorías y rico en proteína.',
      'Los espárragos actúan como diurético natural.',
      'Perfecto para una cena ligera de alta densidad nutricional.'
    ],
    ingredients: [
      '2 huevos pochados',
      'Espárragos frescos',
      'Tomates cherry a la mitad',
      '1 rebanada de pan integral tostado'
    ],
    instructions: [
      'Saltea los espárragos con los tomates cherry.',
      'Pocha los 2 huevos en agua hirviendo con vinagre por 3 minutos.',
      'Sirve sobre el pan integral tostado.'
    ],
    tags: ['Bajo en Calorías', 'Diurético', 'Cena Ligera']
  },
  {
    id: 'ensalada-fitness-huevo',
    title: 'Ensalada Fitness con Huevo',
    subtitle: '2 huevos cocidos, lechuga, espinaca, pepino, tomate, zanahoria y semillas de chía',
    description: 'Ligera, rica en fibra y proteína, ideal para una cena de definición.',
    image: tunaEggSaladImg,
    price: 7.50,
    category: 'proteinas',
    goal: ['reducir_grasa'],
    timing: ['cena', 'almuerzo'],
    macros: {
      calories: 255,
      protein: 16,
      carbs: 12,
      fats: 16,
      fiber: 7,
    },
    prepTimeMinutes: 10,
    cookTimeMinutes: 10,
    difficulty: 'Fácil',
    benefits: [
      'Ligera, rica en fibra y proteína para etapas de definición.',
      'Las semillas de chía aportan ácidos grasos Omega-3 antiinflamatorios.',
      'Alta en volumen y muy baja en densidad calórica.'
    ],
    ingredients: [
      '2 huevos cocidos',
      'Lechuga variada y espinaca baby',
      'Pepino y tomate picado',
      'Zanahoria rallada',
      'Semillas de chía'
    ],
    instructions: [
      'Mezcla las verduras en un tazón amplio.',
      'Corta los huevos cocidos en rodajas.',
      'Decora la ensalada con el huevo y chía.',
      'Aliña con limón y aceite de oliva.'
    ],
    tags: ['Súper Ligero', 'Rico en Fibra', 'Cena Fitness']
  },
  {
    id: 'tostadas-integrales-huevo-cocido',
    title: 'Tostadas Integrales con Huevo Cocido',
    subtitle: '2 huevos cocidos en rodajas, 2 tostadas integrales, aguacate triturado y tomate',
    description: 'Aporta energía sostenida y ayuda a preservar la masa muscular durante la definición.',
    image: toastBoiledEggAvocadoImg,
    price: 7.99,
    category: 'snacks',
    goal: ['reducir_grasa'],
    timing: ['desayuno', 'pre_entreno', 'snack'],
    macros: {
      calories: 340,
      protein: 19,
      carbs: 28,
      fats: 17,
      fiber: 5,
    },
    prepTimeMinutes: 7,
    cookTimeMinutes: 10,
    difficulty: 'Fácil',
    benefits: [
      'Aporta energía sostenida y preserva la masa muscular.',
      'Facilita la saciedad entre comidas principales.',
      'Snack o desayuno rápido con alimentos enteros.'
    ],
    ingredients: [
      '2 huevos cocidos',
      '2 tostadas integrales',
      'Aguacate triturado',
      'Tomate fresco en rodajas'
    ],
    instructions: [
      'Tuesta las rebanadas de pan integral.',
      'Unta el aguacate triturado con limón.',
      'Coloca las rodajas de tomate y huevo cocido.'
    ],
    tags: ['Energía Sostenida', 'Snack Proteico', 'Saciante']
  },
  {
    id: 'huevos-cocidos-camote',
    title: 'Huevos Cocidos con Camote',
    subtitle: '2 huevos cocidos, camote al horno y brócoli al vapor',
    description: 'Excelente combinación de proteínas y carbohidratos complejos para después del entrenamiento.',
    image: boiledEggSweetPotatoImg,
    price: 8.99,
    category: 'proteinas',
    goal: ['reducir_grasa', 'recuperacion'],
    timing: ['post_entreno', 'almuerzo'],
    macros: {
      calories: 320,
      protein: 17,
      carbs: 35,
      fats: 12,
      fiber: 6,
    },
    prepTimeMinutes: 8,
    cookTimeMinutes: 15,
    difficulty: 'Fácil',
    benefits: [
      'Excelente combinación de proteínas y carbohidratos complejos.',
      'Recarga las reservas de glucógeno.',
      'Rico en antioxidantes y fibra soluble.'
    ],
    ingredients: [
      '2 huevos cocidos',
      'Camote al horno en cubos',
      'Brócoli al vapor'
    ],
    instructions: [
      'Hornea los cubos de camote por 15-20 minutos.',
      'Cocina el brócoli al vapor durante 5 minutos.',
      'Hierve los huevos 9 minutos y sirve juntos.'
    ],
    tags: ['Post-Entreno', 'Carbs Complejos', 'Definición']
  },
  {
    id: 'muffins-huevo-horno',
    title: 'Muffins de Huevo al Horno',
    subtitle: '4 claras, 2 huevos enteros, espinaca, champiñones, pimiento y queso bajo en grasa',
    description: 'Fáciles de preparar y perfectos para llevar. Bites horneados de huevo y vegetales.',
    image: eggMuffinsFitnessImg,
    price: 7.99,
    category: 'snacks',
    goal: ['reducir_grasa'],
    timing: ['snack', 'desayuno'],
    macros: {
      calories: 280,
      protein: 30,
      carbs: 6,
      fats: 15,
      fiber: 3,
    },
    prepTimeMinutes: 10,
    cookTimeMinutes: 20,
    difficulty: 'Fácil',
    benefits: [
      'Fáciles de preparar y perfectos para llevar.',
      'Muy bajo en carbohidratos y rico en proteína magra.',
      'Snack práctico para el gimnasio o trabajo.'
    ],
    ingredients: [
      '4 claras + 2 huevos enteros',
      'Espinaca y pimiento picado',
      'Champiñones en trozos',
      'Queso bajo en grasa'
    ],
    instructions: [
      'Bate las claras y huevos en un bowl con sal.',
      'Coloca las verduras en moldes para muffins.',
      'Vierte el huevo y hornea por 20 minutos a 180°C.'
    ],
    tags: ['Para Llevar', 'Bajo en Carb', 'Snack Fitness']
  },
  {
    id: 'bowl-fitness-huevo',
    title: 'Bowl Fitness de Huevo',
    subtitle: '2 huevos cocidos, arroz integral, aguacate, espinaca, pepino y tomate cherry',
    description: 'Comida completa y equilibrada para mantener la energía durante la definición.',
    image: eggFitnessMealsImg,
    price: 9.50,
    category: 'proteinas',
    goal: ['reducir_grasa'],
    timing: ['almuerzo', 'cena'],
    macros: {
      calories: 390,
      protein: 20,
      carbs: 42,
      fats: 16,
      fiber: 7,
    },
    prepTimeMinutes: 10,
    cookTimeMinutes: 12,
    difficulty: 'Fácil',
    benefits: [
      'Comida completa para mantener la energía en definición.',
      'Excelente aporte de fibra digestiva.',
      'Sensación de saciedad prolongada.'
    ],
    ingredients: [
      '2 huevos cocidos',
      'Arroz integral cocido',
      'Aguacate en rodajas',
      'Espinaca y tomate cherry'
    ],
    instructions: [
      'Coloca la base de arroz integral y espinaca en el bowl.',
      'Agrega pepino, tomates cherry y aguacate.',
      'Añade los huevos cocidos cortados a la mitad.'
    ],
    tags: ['Plato Completo', 'Definición', 'Energía Fitness']
  },
  {
    id: 'shakshuka-ligera',
    title: 'Shakshuka Ligera',
    subtitle: '2 huevos en salsa de tomate natural, pimiento, cebolla, ajo y pan integral',
    description: 'Rica en proteínas, antioxidantes y muy baja en grasas. Tradicional salsa de tomate especiada.',
    image: shakshukaLigeraImg,
    price: 8.50,
    category: 'desayunos',
    goal: ['reducir_grasa'],
    timing: ['desayuno', 'cena'],
    macros: {
      calories: 280,
      protein: 18,
      carbs: 23,
      fats: 13,
      fiber: 5,
    },
    prepTimeMinutes: 8,
    cookTimeMinutes: 12,
    difficulty: 'Intermedio',
    benefits: [
      'Rica en proteínas, antioxidantes y muy baja en grasas.',
      'El tomate aporta licopeno protector celular.',
      'Sabor especiado delicioso sin aportar grasas saturadas.'
    ],
    ingredients: [
      '2 huevos frescos',
      'Salsa de tomate natural',
      'Pimiento rojo, cebolla y ajo',
      'Comino y paprika',
      '1 rebanada de pan integral'
    ],
    instructions: [
      'Saltea cebolla, pimiento y ajo con comino y paprika.',
      'Vierte la salsa de tomate natural y deja reducir 5 minutos.',
      'Rompe los huevos encima, tapa y cocina 6 minutos.',
      'Sirve con pan integral.'
    ],
    tags: ['Bajo en Grasa', 'Antioxidantes', 'Sabores del Mundo']
  }
];
