
import React from 'react';
import { ChevronRight, MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&q=80&w=2000" 
          alt="Fish farm background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display text-white mb-6 leading-tight">
            Premium Quality <span className="text-cyan-400">Ornamental Fish</span> for Global Waters
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed">
            Breeding and supplying premium-quality Ornamental fish for local and export markets. 
            From vibrant Guppies to majestic Koi, we bring life to your aquariums.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={WHATSAPP_LINK} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Us</span>
            </a>
            <a 
              href="#services" 
              className="flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold transition-all border border-white/30"
            >
              <span>Explore Services</span>
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Stats/Badges */}
      <div className="absolute bottom-10 left-0 right-0 z-10 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between">
          <div className="flex items-center space-x-3 text-white">
            <div className="w-1 bg-cyan-500 h-10"></div>
            <div>
              <p className="text-2xl font-bold">100%</p>
              <p className="text-xs uppercase tracking-widest text-slate-400">Healthy Fry</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 text-white">
            <div className="w-1 bg-cyan-500 h-10"></div>
            <div>
              <p className="text-2xl font-bold">Expert</p>
              <p className="text-xs uppercase tracking-widest text-slate-400">Consultancy</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 text-white">
            <div className="w-1 bg-cyan-500 h-10"></div>
            <div>
              <p className="text-2xl font-bold">Global</p>
              <p className="text-xs uppercase tracking-widest text-slate-400">Export Ready</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
