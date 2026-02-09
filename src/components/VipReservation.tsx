import { useState } from "react";
import { Check, ChevronRight } from "lucide-react";

export const VipReservation = () => {
  const [step, setStep] = useState(1);

  return (
    <section className="py-24 bg-aureum-black relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-aureum-gold/5 blur-[100px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-6xl text-white mb-4">Secure Your Night</h2>
          <p className="text-gray-400">Reservations are highly recommended. Walk-ins are not guaranteed.</p>
        </div>

        <div className="bg-zinc-900/50 border border-white/10 rounded-lg p-8 md:p-12 backdrop-blur-xl">
          {/* Progress Bar */}
          <div className="flex items-center justify-between mb-10 px-4">
            {[1, 2, 3].map((num) => (
              <div key={num} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-serif font-bold transition-all duration-300 ${
                    step >= num
                      ? "bg-aureum-gold text-black scale-110"
                      : "bg-white/10 text-white/50"
                  }`}
                >
                  {step > num ? <Check className="w-5 h-5" /> : num}
                </div>
                {num < 3 && (
                  <div
                    className={`w-16 md:w-32 h-0.5 mx-2 md:mx-4 transition-colors duration-300 ${
                      step > num ? "bg-aureum-gold" : "bg-white/10"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Form Steps */}
          <div className="space-y-6">
            {step === 1 && (
              <div className="animate-fade-in space-y-4">
                <h3 className="text-xl text-white font-serif mb-6">Select Date & Party Size</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div className="space-y-2">
                     <label className="text-xs uppercase text-gray-500 tracking-wider">Date</label>
                     <input type="date" className="w-full bg-black/50 border border-white/20 text-white p-4 focus:border-aureum-gold outline-none rounded-sm" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-xs uppercase text-gray-500 tracking-wider">Guests</label>
                     <select className="w-full bg-black/50 border border-white/20 text-white p-4 focus:border-aureum-gold outline-none rounded-sm">
                       <option>2 Guests</option>
                       <option>4 Guests</option>
                       <option>6-8 Guests</option>
                       <option>10+ (VIP)</option>
                     </select>
                   </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="animate-fade-in space-y-4">
                <h3 className="text-xl text-white font-serif mb-6">Guest Information</h3>
                <div className="grid grid-cols-1 gap-4">
                   <input type="text" placeholder="Full Name" className="w-full bg-black/50 border border-white/20 text-white p-4 focus:border-aureum-gold outline-none rounded-sm" />
                   <input type="email" placeholder="Email Address" className="w-full bg-black/50 border border-white/20 text-white p-4 focus:border-aureum-gold outline-none rounded-sm" />
                   <input type="tel" placeholder="Phone Number (WhatsApp)" className="w-full bg-black/50 border border-white/20 text-white p-4 focus:border-aureum-gold outline-none rounded-sm" />
                </div>
              </div>
            )}
            
            {step === 3 && (
              <div className="animate-fade-in text-center py-8">
                <div className="w-20 h-20 bg-aureum-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-10 h-10 text-aureum-gold" />
                </div>
                <h3 className="text-2xl text-white font-serif mb-2">Request Received</h3>
                <p className="text-gray-400">Our concierge will contact you via WhatsApp shortly to confirm your table.</p>
              </div>
            )}

            {/* Actions */}
            <div className="pt-8 flex justify-between">
              {step > 1 && step < 3 && (
                <button
                  onClick={() => setStep(step - 1)}
                  className="text-gray-400 hover:text-white px-6 py-3 uppercase text-sm tracking-wider"
                >
                  Back
                </button>
              )}
              {step < 3 ? (
                <button
                  onClick={() => setStep(step + 1)}
                  className="ml-auto bg-aureum-gold text-aureum-black font-bold uppercase px-8 py-3 tracking-widest hover:bg-white transition-colors flex items-center gap-2"
                >
                  Next Step <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={() => setStep(1)}
                  className="mx-auto text-aureum-gold hover:text-white border-b border-aureum-gold pb-1"
                >
                  Make Another Reservation
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VipReservation;
