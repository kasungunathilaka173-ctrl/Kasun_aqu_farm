
import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { BUSINESS_NAME, ADDRESS, LOGO_URL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-20 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-white p-1">
                <img 
                  src={LOGO_URL} 
                  alt={`${BUSINESS_NAME} Logo`} 
                  className="w-full h-full object-contain rounded-full"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=K+A&background=0891b2&color=fff`;
                  }}
                />
              </div>
              <div>
                <span className="text-2xl font-bold tracking-tight text-white block">{BUSINESS_NAME}</span>
                <span className="text-xs uppercase tracking-[0.2em] text-cyan-500 font-bold">Breeding Excellence</span>
              </div>
            </div>
            <p className="max-w-md mb-8 text-lg leading-relaxed">
              Breeding and supplying premium-quality Ornamental fish for local and export markets. Dedicated to sustainability and quality in every drop.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center hover:bg-cyan-600 hover:text-white hover:-translate-y-1 transition-all"><Facebook className="w-6 h-6" /></a>
              <a href="#" className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center hover:bg-cyan-600 hover:text-white hover:-translate-y-1 transition-all"><Instagram className="w-6 h-6" /></a>
              <a href="#" className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center hover:bg-cyan-600 hover:text-white hover:-translate-y-1 transition-all"><Twitter className="w-6 h-6" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-8 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-cyan-600 rounded-full"></span>
            </h4>
            <ul className="space-y-4 font-medium">
              <li><a href="#home" className="hover:text-cyan-400 transition-colors flex items-center space-x-2"><span>&rsaquo;</span> <span>Home</span></a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors flex items-center space-x-2"><span>&rsaquo;</span> <span>Services</span></a></li>
              <li><a href="#products" className="hover:text-cyan-400 transition-colors flex items-center space-x-2"><span>&rsaquo;</span> <span>Our Fish</span></a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition-colors flex items-center space-x-2"><span>&rsaquo;</span> <span>Contact</span></a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-8 relative inline-block">
              Our Location
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-cyan-600 rounded-full"></span>
            </h4>
            <p className="leading-relaxed mb-4 italic">
              {ADDRESS}
            </p>
            <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 text-sm">
              <p className="text-cyan-500 font-bold mb-1">Business Hours:</p>
              <p>Mon - Sun: 8:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-sm font-medium">
          <p>&copy; {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.</p>
          <div className="flex space-x-10">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
