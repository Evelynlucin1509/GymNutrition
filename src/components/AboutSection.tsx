import React from 'react';
import { Target, Award, Heart, Users, CheckCircle, Shield, Sparkles, Activity } from 'lucide-react';
import gymLogo from '../assets/images/gymnutrition_logo_1784952810347.jpg';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-slate-900 border-b border-slate-800 text-white relative overflow-hidden">
      
      {/* Background radial gradients */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-amber-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Top Header & Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-4 h-4" />
              <span>Conoce GymNutrition</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Transformando el Rendimiento Deportivo a través de la <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-400">Nutrición de Precisión</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              En <strong className="text-emerald-400">GymNutrition</strong>, entendemos que el 70% del éxito en el gimnasio depende de lo que pones en tu plato. Nacimos con la misión de eliminar la complicación de cocinar, pesar ingredientes y contar calorías para atletas y entusiastas del fitness.
            </p>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Creamos menús saludables, deliciosos y ultra frescos, diseñados científicamente para impulsar el desarrollo de masa muscular, acelerar la quema de grasa y acortar los tiempos de recuperación tras entrenamientos intensos de fuerza y cardio.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-1">
                <div className="text-2xl sm:text-3xl font-black text-emerald-400">+15,000</div>
                <p className="text-xs text-slate-400 font-medium">Menús Nutricionales Entregados</p>
              </div>
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-1">
                <div className="text-2xl sm:text-3xl font-black text-amber-400">99.2%</div>
                <p className="text-xs text-slate-400 font-medium">Satisfacción en Atletas y Gym Lovers</p>
              </div>
            </div>
          </div>

          {/* Visual Presentation Card */}
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 relative shadow-2xl space-y-6 overflow-hidden">
            <div className="flex items-center space-x-4">
              <img
                src={gymLogo}
                alt="GymNutrition Seal"
                className="w-16 h-16 rounded-2xl ring-2 ring-emerald-500/40 object-cover"
                referrerPolicy="no-referrer"
              />
              <div>
                <h3 className="text-xl font-black text-white">El Compromiso GymNutrition</h3>
                <p className="text-xs text-emerald-400 font-semibold">Garantía de Calidad y Rendimiento</p>
              </div>
            </div>

            <div className="space-y-3.5 text-xs text-slate-300">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span><strong>Ingredientes 100% Frescos:</strong> Comprados diariamente a proveedores locales sostenibles, garantizando sabor e higiene.</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span><strong>Acompañamiento Nutricional:</strong> Menús etiquetados con desglose completo de calorías, proteínas, carbohidratos, grasas y fibra.</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span><strong>Empaques Ecológicos:</strong> Contenedores aptos para microondas, biodegradables y sellados herméticamente.</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span><strong>Adaptabilidad a tus Horarios:</strong> Recibe tu menú listo para comer en tu casa, oficina o directamente en el gimnasio.</span>
              </div>
            </div>

            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-4 flex items-center justify-between text-xs font-bold text-emerald-300">
              <span className="flex items-center space-x-2">
                <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
                <span>Nutrición Evidenciada</span>
              </span>
              <span>Atletas de Alto Rendimiento</span>
            </div>
          </div>

        </div>

        {/* Mission, Vision, Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          <div className="bg-slate-950/80 p-6 rounded-3xl border border-slate-800 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-bold">
              <Target className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white">Nuestra Misión</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Facilitar el acceso a una alimentación balanceada y sabrosa, adaptada a los requerimientos de quienes buscan transformar su físico y salud en el gimnasio.
            </p>
          </div>

          <div className="bg-slate-950/80 p-6 rounded-3xl border border-slate-800 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center font-bold">
              <Award className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white">Nuestra Visión</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Ser la marca líder referente en nutrición deportiva en el país, reconocida por la calidad intransigente de nuestros insumos y la exactitud de nuestros perfiles nutricionales.
            </p>
          </div>

          <div className="bg-slate-950/80 p-6 rounded-3xl border border-slate-800 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-teal-500/20 text-teal-400 border border-teal-500/30 flex items-center justify-center font-bold">
              <Users className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white">Equipo Multidisciplinario</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Contamos con chefs ejecutivos especializados en gastronomía saludable y nutriólogos deportivos certificados que supervisan cada gramo de proteína entregado.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
