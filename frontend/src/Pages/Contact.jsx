import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation, Phone, Mail, Volume2, Globe, Aperture, Send } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const Contact = () => {
  return (
    <div className="w-full flex flex-col font-sans bg-[#131313] text-[#DDDDDD] overflow-x-hidden pt-32 pb-32">
      
      {/* 1. Hero / Header */}
      <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 mb-16">
         <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="w-full mt-12 md:mt-20"
         >
            <motion.h1 variants={fadeUp} className="text-[4rem] md:text-[6rem] font-bold leading-[0.9] tracking-tight mb-8">
               <span className="text-white block">CONNECT WITH</span>
               <span className="text-[#F07113] block drop-shadow-[0_0_20px_rgba(240,113,19,0.4)]">THE NIGHT</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-[#AAAAAA] text-sm md:text-base leading-[1.7] max-w-md font-medium">
               Elevated Persian cuisine meets the raw energy of NYC. Find us where the saffron glow cuts through the shadows.
            </motion.p>
         </motion.div>
      </section>

      {/* 2. Grid Area */}
      <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 mb-24">
         <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8"
         >
            
            {/* Left Column - Form */}
            <motion.div variants={fadeUp} className="lg:col-span-7 bg-[#1A1A1A] rounded-xl p-8 md:p-12 shadow-xl border border-white/5 relative overflow-hidden">
               {/* Subtle background glow */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-[#F07113]/5 rounded-full blur-[80px] pointer-events-none"></div>
               
               <h2 className="text-xl md:text-2xl text-white font-bold tracking-tight mb-8">SEND A MESSAGE</h2>
               
               <form className="flex flex-col space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="flex flex-col space-y-2">
                        <label className="text-white text-[9px] font-bold tracking-[0.2em] uppercase">Name</label>
                        <input 
                           type="text" 
                           placeholder="Your Name" 
                           className="bg-[#111111] text-white text-sm border border-white/10 rounded-md px-4 py-3 focus:outline-none focus:border-[#F07113] transition-colors"
                        />
                     </div>
                     <div className="flex flex-col space-y-2">
                        <label className="text-white text-[9px] font-bold tracking-[0.2em] uppercase">Email</label>
                        <input 
                           type="email" 
                           placeholder="email@address.com" 
                           className="bg-[#111111] text-white text-sm border border-white/10 rounded-md px-4 py-3 focus:outline-none focus:border-[#F07113] transition-colors"
                        />
                     </div>
                  </div>
                  
                  <div className="flex flex-col space-y-2">
                     <label className="text-white text-[9px] font-bold tracking-[0.2em] uppercase">Message</label>
                     <textarea 
                        rows="5"
                        placeholder="Tell us about your inquiry..." 
                        className="bg-[#111111] text-white text-sm border border-white/10 rounded-md px-4 py-3 focus:outline-none focus:border-[#F07113] transition-colors resize-none"
                     ></textarea>
                  </div>
                  
                  <button type="submit" className="w-full md:w-auto bg-[#F07113] hover:bg-[#D5610F] text-black text-[11px] font-bold px-8 py-4 rounded-md tracking-[0.05em] transition-colors flex items-center justify-center md:justify-start w-max group mt-4">
                     DISPATCH <Send size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
               </form>
            </motion.div>
            
            {/* Right Column - Info Cards */}
            <motion.div variants={fadeUp} className="lg:col-span-5 flex flex-col space-y-6">
               
               {/* Location Card */}
               <div className="bg-[#222222] rounded-xl p-8 md:p-10 shadow-xl border-l-[3px] border-l-[#F07113] h-full flex flex-col justify-center">
                  <MapPin size={20} className="text-[#F07113] mb-6" />
                  <h3 className="text-white text-[11px] font-bold tracking-[0.2em] uppercase mb-4">LOCATION</h3>
                  <p className="text-[#DDDDDD] text-sm leading-[1.8] font-medium mb-8">
                     187 Ludlow St,<br/>
                     Lower East Side, NYC<br/>
                     New York, 10002
                  </p>
                  
                  <a href="#" className="flex items-center text-[#E0A87A] text-[10px] font-bold tracking-[0.15em] uppercase hover:text-[#F07113] transition-colors mt-auto w-max">
                     <Navigation size={12} className="mr-2 rotate-45" /> GET DIRECTIONS
                  </a>
               </div>
               
               {/* Contact & Social Card */}
               <div className="bg-[#1A1A1C] rounded-xl p-8 md:p-10 shadow-xl border border-white/5 flex flex-col justify-center">
                  <h3 className="text-white text-[9px] font-bold tracking-[0.2em] uppercase mb-6">RESERVATIONS & PRESS</h3>
                  
                  <div className="flex flex-col space-y-5 mb-10">
                     <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 rounded-full bg-[#2A2A2C] flex items-center justify-center text-white">
                           <Phone size={14} />
                        </div>
                        <span className="text-white font-bold text-sm">+1 (212) 555-0198</span>
                     </div>
                     <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 rounded-full bg-[#2A2A2C] flex items-center justify-center text-white">
                           <Mail size={14} />
                        </div>
                        <span className="text-white font-bold text-sm">hello@midnightsaffron.com</span>
                     </div>
                  </div>
                  
                  <h3 className="text-white text-[9px] font-bold tracking-[0.2em] uppercase mb-4">FOLLOW THE LIGHT</h3>
                  <div className="flex space-x-3">
                     <a href="#" className="w-10 h-10 rounded-full bg-[#0A0A0A] flex items-center justify-center hover:bg-[#F07113] text-white hover:text-black transition-colors">
                        <Volume2 size={16} />
                     </a>
                     <a href="#" className="w-10 h-10 rounded-full bg-[#0A0A0A] flex items-center justify-center hover:bg-[#F07113] text-white hover:text-black transition-colors">
                        <Globe size={16} />
                     </a>
                     <a href="#" className="w-10 h-10 rounded-full bg-[#0A0A0A] flex items-center justify-center hover:bg-[#F07113] text-white hover:text-black transition-colors">
                        <Aperture size={16} />
                     </a>
                  </div>
               </div>

            </motion.div>
            
         </motion.div>
      </section>

      {/* 3. Map Section (Edge to Edge) */}
      <section className="w-full mb-0 md:mb-0">
         <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="w-full h-[400px] md:h-[600px] overflow-hidden relative bg-[#D3D3D3]"
         >
            {/* Google Maps Embed iframe with light greyscale filter to match mockup */}
            <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m2!1s0x89c25983c27ee7c5%3A0xc6c42a22cc4c9820!2s187%20Ludlow%20St%2C%20New%20York%2C%20NY%2010002!5e0!3m2!1sen!2sus!4v1703649553755!5m2!1sen!2sus" 
               width="100%" 
               height="100%" 
               style={{ border: 0, filter: 'grayscale(1) contrast(0.9) brightness(1.1)' }} 
               allowFullScreen="" 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               title="Google Maps Location"
            ></iframe>
            
            {/* Floating Tag over Map */}
            <div className="absolute bottom-6 left-6 md:bottom-12 md:left-16 bg-[#AAAAAA]/90 backdrop-blur-md px-8 py-5 rounded-[4px] shadow-2xl border border-white/20">
               <h3 className="text-white font-bold tracking-widest text-sm mb-1">MIDNIGHT SAFFRON</h3>
               <p className="text-[#EEEEEE] text-[11px] font-medium tracking-wide">Ludlow & Stanton Street</p>
            </div>
         </motion.div>
      </section>

    </div>
  );
};

export default Contact;
