import React from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Services from './components/Services.tsx';
import Products from './components/Products.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import FishAssistant from './components/FishAssistant.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Products />
        <Contact />
      </main>
      <Footer />
      
      {/* AI Assistant Widget */}
      <FishAssistant />

      {/* Persistent Call To Action for Mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t border-slate-200 z-40 flex space-x-2">
        <a 
          href="tel:077-4760866" 
          className="flex-1 bg-slate-900 text-white text-center py-3 rounded-xl font-bold text-sm shadow-lg active:scale-95 transition-transform"
        >
          Call Farm
        </a>
        <a 
          href="https://wa.me/94774760866" 
          className="flex-1 bg-green-500 text-white text-center py-3 rounded-xl font-bold text-sm shadow-lg active:scale-95 transition-transform"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
};

export default App;