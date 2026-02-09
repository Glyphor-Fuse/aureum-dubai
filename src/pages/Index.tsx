import { AureumHero } from "@/components/AureumHero";
import { LineupBento } from "@/components/LineupBento";
import { VenueExplorer } from "@/components/VenueExplorer";
import { VipReservation } from "@/components/VipReservation";
import { Menu, X, Facebook, Instagram, Twitter } from "lucide-react";
import { useState, useEffect } from "react";

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-aureum-black min-h-screen text-white selection:bg-aureum-gold selection:text-black">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/90 backdrop-blur-md py-4 border-b border-white/10" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          <a href="#" className="font-serif text-2xl font-bold tracking-tighter text-white">
            AUREUM
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium hover:text-aureum-gold transition-colors uppercase tracking-widest">Events</a>
            <a href="#" className="text-sm font-medium hover:text-aureum-gold transition-colors uppercase tracking-widest">The Venue</a>
            <a href="#" className="text-sm font-medium hover:text-aureum-gold transition-colors uppercase tracking-widest">Gallery</a>
            <button className="px-6 py-2 border border-aureum-gold text-aureum-gold hover:bg-aureum-gold hover:text-black transition-all uppercase text-xs font-bold tracking-widest">
              Reservations
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center space-y-8 animate-fade-in">
           <a href="#" className="font-serif text-3xl hover:text-aureum-gold">Events</a>
           <a href="#" className="font-serif text-3xl hover:text-aureum-gold">The Venue</a>
           <a href="#" className="font-serif text-3xl hover:text-aureum-gold">Gallery</a>
           <button className="px-8 py-4 bg-aureum-gold text-black font-bold uppercase tracking-widest">
              Book Table
           </button>
        </div>
      )}

      <main>
        <AureumHero />
        <LineupBento />
        <VenueExplorer />
        <VipReservation />
      </main>

      <footer className="bg-black py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="font-serif text-2xl font-bold mb-2">AUREUM DUBAI</h2>
            <p className="text-gray-500 text-sm">The Palm Jumeirah, Dubai, UAE</p>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-aureum-gold transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="text-gray-400 hover:text-aureum-gold transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="text-gray-400 hover:text-aureum-gold transition-colors"><Twitter className="w-5 h-5" /></a>
          </div>

          <div className="text-gray-600 text-xs">
            © 2024 Aureum Entertainment. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
