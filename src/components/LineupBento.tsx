import { Calendar, Music, Star } from 'lucide-react';

const artists = [
  {
    name: "SOLOMUN",
    date: "OCT 24",
    genre: "Deep House",
    image: "/images/dj-solomun.jpg",
    span: "col-span-1 md:col-span-2 row-span-2",
  },
  {
    name: "ARTBAT",
    date: "OCT 31",
    genre: "Melodic Techno",
    image: "/images/dj-artbat.jpg",
    span: "col-span-1 md:col-span-1 row-span-1",
  },
  {
    name: "BLACK COFFEE",
    date: "NOV 07",
    genre: "Afro House",
    image: "/images/dj-blackcoffee.jpg",
    span: "col-span-1 md:col-span-1 row-span-1",
  },
  {
    name: "PEGGY GOU",
    date: "NOV 14",
    genre: "House",
    image: "/images/dj-peggy.jpg",
    span: "col-span-1 md:col-span-2 row-span-1",
  },
];

export const LineupBento = () => {
  return (
    <section className="py-24 bg-aureum-black px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/10 pb-8">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-2">Upcoming Rituals</h2>
            <p className="text-gray-400">World-class selectors in an intimate setting.</p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-aureum-gold hover:text-white transition-colors">
            Full Calendar <Star className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]">
          {artists.map((artist, idx) => (
            <div
              key={idx}
              className={`group relative overflow-hidden rounded-sm bg-neutral-900 border border-white/5 ${artist.span}`}
            >
              <img
                src={artist.image}
                alt={artist.name}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-aureum-gold font-mono text-sm tracking-wider bg-black/50 backdrop-blur-sm px-2 py-1">
                      {artist.date}
                    </span>
                    <Music className="text-white/50 w-4 h-4" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tighter mb-1">
                    {artist.name}
                  </h3>
                  <p className="text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {artist.genre} • Main Stage
                  </p>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border border-aureum-gold/0 group-hover:border-aureum-gold/50 transition-colors duration-500" />
            </div>
          ))}
        </div>
        
        <button className="mt-8 w-full md:hidden flex justify-center items-center gap-2 py-4 border border-white/10 text-white hover:bg-white/5">
          View Full Calendar <Star className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};

export default LineupBento;
