import React, { useState } from 'react';
import { CartItem } from '../types';
import { ShoppingBag, X, Plus, Minus, Trash2, ArrowRight, ShieldCheck, Sparkles, Truck } from 'lucide-react';
import { CheckoutModal } from './CheckoutModal';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, newQty: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.meal.price * item.quantity, 0);
  const shippingFee = subtotal > 30 || subtotal === 0 ? 0 : 2.99;
  const total = subtotal + shippingFee;

  const totalProtein = cartItems.reduce((acc, item) => acc + item.meal.macros.protein * item.quantity, 0);
  const totalCalories = cartItems.reduce((acc, item) => acc + item.meal.macros.calories * item.quantity, 0);

  const handleOrderSuccess = () => {
    onClearCart();
    onClose();
  };

  return (
    <>
      <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
        <div className="absolute inset-0" onClick={onClose} />

        <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
          <div className="w-screen max-w-md bg-slate-900 border-l border-slate-800 text-white shadow-2xl flex flex-col justify-between">
            
            {/* Header */}
            <div className="p-6 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center font-bold">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-black text-lg text-white">Tu Carrito Fitness</h3>
                  <p className="text-xs text-slate-400">
                    {cartItems.length === 0 ? 'Carrito vacío' : `${cartItems.reduce((a, c) => a + c.quantity, 0)} menús seleccionados`}
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cartItems.length === 0 ? (
                <div className="text-center py-16 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-slate-800 text-slate-600 flex items-center justify-center mx-auto">
                    <ShoppingBag className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold text-white text-base">Aún no has añadido menús a tu carrito</h4>
                  <p className="text-xs text-slate-400 max-w-xs mx-auto">
                    Explora nuestra selección de platillos, desayunos y batidos proteicos para cargar tu entrenamiento.
                  </p>
                </div>
              ) : (
                <>
                  {/* Total Macros Summary bar in cart */}
                  <div className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800/80 flex items-center justify-between text-xs">
                    <div className="flex items-center space-x-2 text-emerald-400 font-bold">
                      <Sparkles className="w-4 h-4" />
                      <span>Macros acumulados:</span>
                    </div>
                    <div className="flex items-center space-x-3 text-[11px]">
                      <span className="font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/30">
                        {totalProtein}g Prot
                      </span>
                      <span className="font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-md border border-amber-500/30">
                        {totalCalories} kcal
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="bg-slate-950/80 p-3.5 rounded-2xl border border-slate-800 flex items-center space-x-3.5 group hover:border-slate-700 transition-colors"
                      >
                        <img
                          src={item.meal.image}
                          alt={item.meal.title}
                          className="w-16 h-16 rounded-xl object-cover flex-shrink-0"
                          referrerPolicy="no-referrer"
                        />
                        <div className="flex-1 min-w-0 space-y-1">
                          <h5 className="font-bold text-xs text-white truncate">{item.meal.title}</h5>
                          <div className="flex items-center space-x-2 text-[10px] text-slate-400">
                            <span className="text-emerald-400 font-bold">{item.meal.macros.protein}g proteína</span>
                            <span>•</span>
                            <span>{item.meal.macros.calories} kcal</span>
                          </div>
                          <div className="font-black text-sm text-emerald-400">${(item.meal.price * item.quantity).toFixed(2)}</div>
                        </div>

                        {/* Controls */}
                        <div className="flex flex-col items-end space-y-2">
                          <button
                            onClick={() => onRemoveItem(item.id)}
                            className="text-slate-500 hover:text-red-400 transition-colors p-1"
                            title="Eliminar del carrito"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>

                          <div className="flex items-center space-x-1.5 bg-slate-900 border border-slate-800 rounded-lg p-1">
                            <button
                              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                              className="w-5 h-5 rounded bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300 transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs font-bold w-4 text-center text-white">{item.quantity}</span>
                            <button
                              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                              className="w-5 h-5 rounded bg-emerald-500 hover:bg-emerald-400 text-slate-950 flex items-center justify-center font-bold transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={onClearCart}
                    className="text-xs text-slate-500 hover:text-red-400 transition-colors flex items-center space-x-1 pt-2"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Vaciar todo el carrito</span>
                  </button>
                </>
              )}
            </div>

            {/* Footer Summary & Checkout Button */}
            {cartItems.length > 0 && (
              <div className="p-6 border-t border-slate-800 bg-slate-950/90 space-y-4">
                
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between text-slate-400">
                    <span>Subtotal:</span>
                    <span className="font-bold text-white">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span className="flex items-center gap-1">
                      <Truck className="w-3.5 h-3.5 text-emerald-400" />
                      Envío refrigerado:
                    </span>
                    <span className="font-bold text-emerald-400">
                      {shippingFee === 0 ? '¡Gratis por compra > $30!' : `$${shippingFee.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="pt-2 border-t border-slate-800 flex justify-between text-sm font-black text-white">
                    <span>Total:</span>
                    <span className="text-emerald-400 text-lg">${total.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  onClick={() => setIsCheckoutOpen(true)}
                  className="w-full py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm shadow-xl shadow-emerald-500/20 transition-all flex items-center justify-center space-x-2"
                >
                  <span>Finalizar Compra</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center justify-center space-x-1.5 text-[10px] text-slate-500">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Entrega segura e ingredientes frescos garantizados</span>
                </div>

              </div>
            )}

          </div>
        </div>
      </div>

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cartItems}
        subtotal={subtotal}
        shippingFee={shippingFee}
        total={total}
        onOrderSuccess={handleOrderSuccess}
      />
    </>
  );
};
