import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, CheckCircle, Sparkles, Instagram, Facebook } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <section className="py-16 sm:py-24 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-emerald-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-widest">
            <MessageSquare className="w-4 h-4" />
            <span>Contacto GymNutrition</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            ¿Tienes Dudas o Quieres un <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-400">Plan Personalizado?</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Estamos listos para asesorarte con tu alimentación fitness. Contáctanos por formulario, WhatsApp o visítanos en nuestro centro nutricional.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Info & Info Cards (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
              <h3 className="text-xl font-black text-white flex items-center space-x-2">
                <span>Información de Atención</span>
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                
                <div className="flex items-start space-x-3.5 p-3.5 rounded-2xl bg-slate-950 border border-slate-800/80">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Teléfono & WhatsApp</h4>
                    <p className="text-slate-400">+593 99 876 5432 / (02) 234-5678</p>
                    <a
                      href="https://wa.me/593998765432"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-emerald-400 font-bold hover:underline text-xs mt-1"
                    >
                      Escribir directamente por WhatsApp →
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 p-3.5 rounded-2xl bg-slate-950 border border-slate-800/80">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Correo Electrónico</h4>
                    <p className="text-slate-400">contacto@gymnutrition.com</p>
                    <p className="text-slate-500 text-[11px]">Respuesta en menos de 2 horas en horario laboral</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 p-3.5 rounded-2xl bg-slate-950 border border-slate-800/80">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Horarios de Atención</h4>
                    <p className="text-slate-400">Lunes a Sábado: 06:00 AM - 09:00 PM</p>
                    <p className="text-slate-400">Domingos: 08:00 AM - 02:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 p-3.5 rounded-2xl bg-slate-950 border border-slate-800/80">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Centro Principal de Distribución</h4>
                    <p className="text-slate-400">Av. de la Salud & Calle de los Atletas #45, Edificio Fitness Hub</p>
                  </div>
                </div>

              </div>

              {/* Social Networks Links */}
              <div className="pt-4 border-t border-slate-800 space-y-3">
                <h4 className="text-xs font-extrabold uppercase text-slate-400 tracking-wider">Síguenos en Redes Sociales</h4>
                <div className="flex items-center space-x-3">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-emerald-400 hover:border-emerald-500 transition-all"
                    title="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-emerald-400 hover:border-emerald-500 transition-all"
                    title="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="https://wa.me/593998765432"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-emerald-400 hover:border-emerald-500 transition-all"
                    title="WhatsApp"
                  >
                    <Phone className="w-5 h-5" />
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Form & Map (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Interactive Form */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
              <h3 className="text-xl font-black text-white">Envíanos un Mensaje</h3>

              {isSubmitted ? (
                <div className="bg-emerald-500/10 border border-emerald-500/40 p-6 rounded-2xl text-center space-y-3">
                  <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-white text-base">¡Mensaje Enviado con Éxito!</h4>
                  <p className="text-xs text-slate-300">
                    Gracias por comunicarte con GymNutrition. Un asesor en nutrición deportiva se pondrá en contacto contigo en breve.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', message: '' });
                    }}
                    className="mt-2 text-xs font-bold text-emerald-400 underline hover:text-emerald-300"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-300 font-semibold mb-1">Nombre Completo *</label>
                      <input
                        type="text"
                        required
                        placeholder="Tu nombre"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 font-semibold mb-1">Teléfono *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+593 99 123 4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">Correo Electrónico *</label>
                    <input
                      type="email"
                      required
                      placeholder="tu.correo@ejemplo.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">Mensaje o Consulta Nutricional *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Escribe tu mensaje, objetivo físico o dudas sobre nuestros menús..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-black text-sm shadow-xl shadow-emerald-500/20 transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Enviando...</span>
                    ) : (
                      <>
                        <span>Enviar Mensaje</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Interactive Google Map Frame */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 space-y-3">
              <div className="flex items-center justify-between text-xs px-2">
                <span className="font-bold text-white flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  Nuestra Ubicación en el Mapa
                </span>
                <span className="text-slate-400 text-[11px]">Centro Deportivo GymNutrition</span>
              </div>
              <div className="w-full h-60 rounded-2xl overflow-hidden border border-slate-800">
                <iframe
                  title="GymNutrition Google Map Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95373531531825!3d-37.81627977975171!2m3!1f0!0f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sGym%20%26%20Fitness!5e0!3m2!1ses!2s!4v1625000000000!5m2!1ses!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
