import { useState } from "react";
import { Info, MapPin, Star, Users } from 'lucide-react';

type ZoneKey = "main" | "mezzanine" | "sky";

const zones = {
  main: {
    title: "The Arena",
    description: "The heart of the action. Immersive sound, lasers, and direct access to the dancefloor.",
    capacity: "8-12 Guests",
    minSpend: "AED 5,000",
    image: "/images/zone-main.jpg",
  },
  mezzanine: {
    title: "Royal Mezzanine",
    description: "Elevated privacy with panoramic views of the DJ booth and the crowd below.",
    capacity: "10-15 Guests",
    minSpend: "AED 12,000",
    image: "/images/zone-mezz.jpg",
  },
  sky: {
    title: "Sky Lounge",
    description: "The ultimate status symbol. Private bar, personal security, and the best view in the house.",
    capacity: "20+ Guests",
    minSpend: "AED 25,000",
    image: "/images/zone-sky.jpg",
  },
};

export const VenueExplorer = () => {
  const [activeZone, setActiveZone] = useState<ZoneKey>("main");

  return (
    <section className="py-24 bg-gradient-to-b from-aureum-black to-[#0F0F0F] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-aureum-gold font-mono uppercase tracking-widest text-sm">Interactive Map</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-2">Explore the Venue</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Controls */}
          <div className="space-y-4 order-2 lg:order-1">
            {(Object.keys(zones) as ZoneKey[]).map((key) => (
              <button
                key={key}
                onClick={() => setActiveZone(key)}
                className={`w-full text-left p-6 border transition-all duration-300 group ${
                  activeZone === key
                    ? "border-aureum-gold bg-aureum-gold/10"
                    : "border-white/10 hover:border-white/30 hover:bg-white/5"
                }`}
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className={`font-serif text-xl ${activeZone === key ? "text-aureum-gold" : "text-white"}`}>
                    {zones[key].title}
                  </h3>
                  {activeZone === key && <div className="w-2 h-2 rounded-full bg-aureum-gold animate-pulse" />}
                </div>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                   Level {key === 'main' ? '01' : key === 'mezzanine' ? '02' : '03'}
                </p>
              </button>
            ))}
          </div>

          {/* Visualizer (The Map) */}
          <div className="relative aspect-square lg:aspect-[4/3] w-full order-1 lg:order-2 group">
            <div className="absolute inset-0 rounded-lg overflow-hidden border border-white/10 shadow-2xl shadow-black">
               <img 
                 src={zones[activeZone].image} 
                 alt="Zone View" 
                 className="w-full h-full object-cover transition-all duration-500 transform group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
               
               {/* Interactive Hotspot Simulator */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none flex items-center justify-center">
                  <div className="bg-aureum-gold/20 backdrop-blur-md border border-aureum-gold/50 text-aureum-gold px-6 py-2 rounded-full font-mono text-xs uppercase tracking-widest animate-pulse">
                    Currently Viewing: {zones[activeZone].title}
                  </div>
               </div>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-8 order-3 lg:order-3">
            <div className="bg-white/5 border border-white/10 p-8 rounded-sm backdrop-blur-sm">
              <h3 className="text-2xl font-serif text-white mb-6 border-b border-white/10 pb-4">
                {zones[activeZone].title} Specs
              </h3>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <Users className="w-5 h-5 text-aureum-gold shrink-0 mt-1" />
                  <div>
                    <span className="block text-xs text-gray-500 uppercase tracking-wider">Capacity</span>
                    <span className="text-lg text-white">{zones[activeZone].capacity}</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Star className="w-5 h-5 text-aureum-gold shrink-0 mt-1" />
                  <div>
                    <span className="block text-xs text-gray-500 uppercase tracking-wider">Min. Spend</span>
                    <span className="text-lg text-white">{zones[activeZone].minSpend}</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Info className="w-5 h-5 text-aureum-gold shrink-0 mt-1" />
                  <div>
                    <span className="block text-xs text-gray-500 uppercase tracking-wider">Experience</span>
                    <span className="text-base text-gray-300 leading-relaxed">{zones[activeZone].description}</span>
                  </div>
                </li>
              </ul>

              <button className="w-full mt-8 bg-white text-black font-bold uppercase py-4 tracking-widest hover:bg-aureum-gold transition-colors">
                Select This Zone
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenueExplorer;
