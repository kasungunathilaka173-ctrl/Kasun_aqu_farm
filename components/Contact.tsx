
import React from 'react';
import { MapPin, Phone, Mail, Send, MessageCircle } from 'lucide-react';
import { ADDRESS, PHONE_NUMBERS, EMAIL, WHATSAPP_LINK } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div>
            <h2 className="text-cyan-600 font-bold tracking-widest uppercase text-sm mb-4">Get In Touch</h2>
            <h3 className="text-3xl md:text-4xl font-display text-slate-900 mb-8">Let's Discuss Your Aquatic Needs</h3>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-cyan-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Visit Us</h4>
                  <p className="text-slate-600 mt-1">{ADDRESS}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-cyan-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Call Us</h4>
                  {PHONE_NUMBERS.map((num, i) => (
                    <a key={i} href={`tel:${num}`} className="block text-slate-600 hover:text-cyan-600 mt-1">{num}</a>
                  ))}
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-cyan-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Email Us</h4>
                  <a href={`mailto:${EMAIL}`} className="text-slate-600 hover:text-cyan-600 mt-1">{EMAIL}</a>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="font-bold text-slate-900 mb-4">Quick Connect</h4>
              <div className="flex space-x-4">
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-bold transition-all shadow-lg shadow-green-200"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp Message</span>
                </a>
              </div>
            </div>
          </div>

          {/* Map/Form Placeholder */}
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-inner overflow-hidden">
             <div className="aspect-video w-full bg-slate-200 rounded-2xl relative flex items-center justify-center mb-8">
                <MapPin className="w-12 h-12 text-slate-400" />
                <span className="absolute bottom-4 text-xs text-slate-500 font-medium">Katupotha, Kurunegala - Location Placeholder</span>
             </div>
             
             <form className="space-y-4">
               <div>
                 <label className="block text-sm font-semibold text-slate-700 mb-1">Your Name</label>
                 <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500" placeholder="John Doe" />
               </div>
               <div>
                 <label className="block text-sm font-semibold text-slate-700 mb-1">Message</label>
                 <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500" placeholder="I'm interested in buying fry fish..."></textarea>
               </div>
               <button className="w-full py-4 bg-slate-900 hover:bg-cyan-600 text-white rounded-xl font-bold transition-all flex items-center justify-center space-x-2">
                 <span>Send Enquiry</span>
                 <Send className="w-4 h-4" />
               </button>
             </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
