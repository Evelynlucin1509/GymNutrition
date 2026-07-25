import React, { useState } from 'react';
import { CartItem } from '../types';
import { ShoppingBag, CheckCircle, MapPin, Phone, User, CreditCard, Truck, X, Sparkles, ArrowRight } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  subtotal: number;
  shippingFee: number;
  total: number;
  onOrderSuccess: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  cartItems,
  subtotal,
  shippingFee,
  total,
  onOrderSuccess,
}) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: 'Ciudad Principal',
    deliveryNotes: '',
    paymentMethod: 'effective' as 'effective' | 'card' | 'transfer',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep('success');
    }, 1200);
  };

  const handleFinish = () => {
    onOrderSuccess();
    onClose();
    setStep('form');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'form' ? (
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center font-bold">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-black text-white">Finalizar Pedido GymNutrition</h3>
                <p className="text-xs text-slate-400">Ingresa tus datos de envío para procesar tu orden fitness</p>
              </div>
            </div>

            <form onSubmit={handleSubmitOrder} className="space-y-6">
              
              {/* Customer Info */}
              <div className="space-y-4 bg-slate-950/60 p-4 rounded-2xl border border-slate-800/80">
                <h4 className="text-xs font-extrabold text-emerald-400 uppercase tracking-wider flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>Datos del Cliente</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">Nombre Completo *</label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Juan Pérez"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">Teléfono / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+593 99 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-slate-300 font-semibold mb-1">Correo Electrónico *</label>
                    <input
                      type="email"
                      required
                      placeholder="atleta@gymnutrition.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>
              </div>

              {/* Delivery Info */}
              <div className="space-y-4 bg-slate-950/60 p-4 rounded-2xl border border-slate-800/80">
                <h4 className="text-xs font-extrabold text-amber-400 uppercase tracking-wider flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Dirección de Entrega</span>
                </h4>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">Dirección Exacta (Calle, Nro, Referencias) *</label>
                    <input
                      type="text"
                      required
                      placeholder="Av. De los Deportes #123 y Calle Gym, frente al Gimnasio Central"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">Instrucciones de Entrega / Horario preferido</label>
                    <input
                      type="text"
                      placeholder="Ej. Entregar antes de las 12:00 PM o dejar en garita"
                      value={formData.deliveryNotes}
                      onChange={(e) => setFormData({ ...formData, deliveryNotes: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="space-y-3 bg-slate-950/60 p-4 rounded-2xl border border-slate-800/80">
                <h4 className="text-xs font-extrabold text-teal-400 uppercase tracking-wider flex items-center space-x-2">
                  <CreditCard className="w-4 h-4" />
                  <span>Método de Pago</span>
                </h4>

                <div className="grid grid-cols-3 gap-2.5 text-xs">
                  <label
                    onClick={() => setFormData({ ...formData, paymentMethod: 'effective' })}
                    className={`cursor-pointer p-3 rounded-xl border text-center transition-all ${
                      formData.paymentMethod === 'effective'
                        ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    💵 Efectivo
                  </label>
                  <label
                    onClick={() => setFormData({ ...formData, paymentMethod: 'card' })}
                    className={`cursor-pointer p-3 rounded-xl border text-center transition-all ${
                      formData.paymentMethod === 'card'
                        ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    💳 Tarjeta en Entrega
                  </label>
                  <label
                    onClick={() => setFormData({ ...formData, paymentMethod: 'transfer' })}
                    className={`cursor-pointer p-3 rounded-xl border text-center transition-all ${
                      formData.paymentMethod === 'transfer'
                        ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    🏦 Transferencia
                  </label>
                </div>
              </div>

              {/* Order Summary Box */}
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2 text-xs">
                <div className="flex justify-between text-slate-400">
                  <span>Subtotal ({cartItems.reduce((acc, i) => acc + i.quantity, 0)} productos):</span>
                  <span className="font-bold text-white">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Envío refrigerado exprés:</span>
                  <span className="font-bold text-emerald-400">
                    {shippingFee === 0 ? '¡GRATIS!' : `$${shippingFee.toFixed(2)}`}
                  </span>
                </div>
                <div className="pt-2 border-t border-slate-800 flex justify-between text-sm font-black text-white">
                  <span>Total a pagar:</span>
                  <span className="text-emerald-400 text-lg">${total.toFixed(2)}</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-black text-sm shadow-xl shadow-emerald-500/20 transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Procesando tu pedido...</span>
                ) : (
                  <>
                    <span>Confirmar y Realizar Pedido</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>

            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-6">
            <div className="w-20 h-20 bg-emerald-500/20 border-2 border-emerald-400 rounded-full flex items-center justify-center mx-auto text-emerald-400 shadow-xl shadow-emerald-500/30 animate-bounce">
              <CheckCircle className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-black text-white">¡Pedido Confirmado con Éxito!</h3>
              <p className="text-xs text-slate-300 max-w-md mx-auto">
                Gracias, <strong className="text-emerald-400">{formData.name}</strong>. Hemos recibido tu pedido para la dirección{' '}
                <strong className="text-white">{formData.address}</strong>.
              </p>
            </div>

            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-left text-xs space-y-2 max-w-md mx-auto">
              <div className="flex justify-between text-slate-400">
                <span>Número de orden:</span>
                <span className="font-mono font-bold text-emerald-400">#GYM-{Math.floor(100000 + Math.random() * 900000)}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Estado:</span>
                <span className="font-bold text-amber-400">En preparación nutricional</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Tiempo de entrega estimado:</span>
                <span className="font-bold text-white">30 - 45 minutos</span>
              </div>
              <div className="flex justify-between text-slate-400 pt-2 border-t border-slate-800 font-bold">
                <span>Monto a cancelar:</span>
                <span className="text-emerald-400 text-sm">${total.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={handleFinish}
              className="px-8 py-3.5 rounded-xl bg-emerald-500 text-slate-950 font-black text-xs hover:bg-emerald-400 transition-colors shadow-lg"
            >
              Volver a la Tienda
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
