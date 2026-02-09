import { useState, useEffect } from "react";
import { ArrowRight, Play, Star } from "lucide-react";

export const AureumHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-aureum-black">
      {/* Background Image with Parallax/Zoom Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-aureum-black via-aureum-black/50 to-transparent z-10" />
        <img
          src="/images/hero-club.jpg"
          alt="Aureum Main Hall"
          className="h-full w-full object-cover opacity-80 animate-slow-zoom"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center text-center px-4">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <span className="mb-4 inline-block rounded-full border border-aureum-gold/30 bg-aureum-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-aureum-gold backdrop-blur-md">
            Dubai • The Palm • Est. 2024
          </span>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold text-white tracking-tighter mb-6">
            AUREUM
          </h1>
          <p className="font-sans text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 font-light tracking-wide">
            Where gold meets sound. The world's most exclusive electronic music cathedral.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
            <button className="group relative px-8 py-4 bg-aureum-gold text-aureum-black font-bold uppercase tracking-wider transition-all hover:bg-white hover:text-black hover:scale-105">
              Book VIP Table
              <div className="absolute inset-0 border border-white/20 scale-105 opacity-0 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500" />
            </button>
            <button className="flex items-center gap-2 text-white hover:text-aureum-gold transition-colors uppercase tracking-widest text-sm font-semibold group">
              <span className="p-2 rounded-full border border-white/20 group-hover:border-aureum-gold transition-colors">
                <Play className="w-4 h-4 fill-current" />
              </span>
              Watch The Film
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce text-white/50">
        <div className="h-10 w-6 rounded-full border border-white/20 flex justify-center pt-2">
          <div className="w-1 h-2 bg-aureum-gold rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default AureumHero;
