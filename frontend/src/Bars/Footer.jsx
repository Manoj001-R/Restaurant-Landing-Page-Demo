import React from 'react';
import { Globe, Camera, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#111111] text-[#AAAAAA] pt-16 pb-8 px-6 md:px-12 border-t border-[#222222]">
      <div className="max-w-7xl mx-auto flex flex-col">
        
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16">
          <div className="max-w-sm">
            <h3 className="font-bold text-2xl tracking-tight text-[#F07113] mb-4">Midnight Saffron</h3>
            <p className="text-sm font-medium leading-[1.6] mb-8 text-[#888888]">
              The intersection of culinary innovation and urban night culture. Experience spice through a new lens.
            </p>
            <div className="flex space-x-4">
               <a href="#" className="w-8 h-8 rounded-full bg-[#1A1A1A] flex items-center justify-center hover:bg-[#333333] transition-colors group">
                 <Globe size={14} className="text-[#F07113] group-hover:text-[#FFAA55]" />
               </a>
               <a href="#" className="w-8 h-8 rounded-full bg-[#1A1A1A] flex items-center justify-center hover:bg-[#333333] transition-colors group">
                 <Camera size={14} className="text-[#F07113] group-hover:text-[#FFAA55]" />
               </a>
               <a href="#" className="w-8 h-8 rounded-full bg-[#1A1A1A] flex items-center justify-center hover:bg-[#333333] transition-colors group">
                 <Mail size={14} className="text-[#F07113] group-hover:text-[#FFAA55]" />
               </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24">
            <div className="flex flex-col space-y-4">
              <span className="text-white text-[9px] font-bold tracking-[0.2em] uppercase mb-2">Dine</span>
              <a href="#" className="text-xs font-medium hover:text-[#F07113] transition-colors">Full Menu</a>
              <a href="#" className="text-xs font-medium hover:text-[#F07113] transition-colors">Wine List</a>
              <a href="#" className="text-xs font-medium hover:text-[#F07113] transition-colors">Reservations</a>
            </div>
            <div className="flex flex-col space-y-4">
              <span className="text-white text-[9px] font-bold tracking-[0.2em] uppercase mb-2">About</span>
              <a href="#" className="text-xs font-medium hover:text-[#F07113] transition-colors">Our Story</a>
              <a href="#" className="text-xs font-medium hover:text-[#F07113] transition-colors">Chefs</a>
              <a href="#" className="text-xs font-medium hover:text-[#F07113] transition-colors">Press Kit</a>
            </div>
            <div className="flex flex-col space-y-4 col-span-2 md:col-span-1 max-w-[200px]">
              <span className="text-white text-[9px] font-bold tracking-[0.2em] uppercase mb-2">Visit</span>
              <p className="text-xs font-medium leading-[1.6]">124 Saffron St, Lower East Side<br/>New York, NY 10002</p>
              <p className="text-xs font-bold text-[#F07113] mt-2">Closed Mondays</p>
            </div>
          </div>
        </div>
        
        <div className="w-full border-t border-[#222222] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] md:text-xs">
            © 2024 Midnight Saffron Editorial Bistro. All rights reserved.
          </p>
          <div className="flex space-x-8 text-[9px] font-bold tracking-[0.1em] uppercase text-[#666666]">
            <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
            <a href="#" className="hover:text-white transition-colors">TERMS OF SERVICE</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
