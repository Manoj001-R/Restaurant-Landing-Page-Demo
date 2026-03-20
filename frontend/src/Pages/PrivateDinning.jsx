import React from 'react';
import { motion } from 'motion/react';
import { Users, Wine, Shield, Navigation, Sun, Key, Compass, Music, Link, Send } from 'lucide-react';
import image15 from '../assets/image15.png';
import image16 from '../assets/image16.png';
import image17 from '../assets/image17.png';

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

const PrivateDinning = () => {
  return (
    <div className="w-full flex flex-col font-sans bg-[#131313] text-[#DDDDDD] overflow-x-hidden pt-24 md:pt-0">
      
      {/* 1. Hero Section */}
      <section className="relative w-full min-h-[85vh] md:min-h-[90vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 mb-24 md:mb-40 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute inset-0 z-0"
        >
          <img src={image15} alt="Private Dining Room" className="w-full h-full object-cover origin-center opacity-40 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-[#131313]/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#131313]/80 via-transparent to-[#131313]/50"></div>
        </motion.div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col mt-20 md:mt-32">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex-1 max-w-2xl"
          >
            <motion.p variants={fadeUp} className="text-[#F07113] text-[9px] font-bold tracking-[0.25em] uppercase mb-6">
              THE INNER SANCTUM
            </motion.p>
            
            <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl md:text-[7rem] font-bold leading-[0.85] tracking-tight mb-8">
              <span className="text-white block">Private</span>
              <span className="text-[#F07113] block italic drop-shadow-[0_0_20px_rgba(240,113,19,0.3)]">Conviviality</span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-[#AAAAAA] text-sm md:text-base leading-[1.8] max-w-md font-medium">
              Where the city's pulse fades into the soft amber glow of shared secrets. Experience the ultimate in culinary discretion within our curated enclaves.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 2. The Venues */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-32 md:mb-48">
         <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={staggerContainer}
            className="w-full"
         >
            {/* Header */}
            <motion.div variants={fadeUp} className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
               <h2 className="text-5xl md:text-[5rem] text-white font-bold tracking-tight italic">The Venues</h2>
               <p className="text-[#888888] text-[9px] font-bold tracking-[0.2em] uppercase max-w-[280px] leading-relaxed">
                  DISTINCT SPACES TAILORED FOR MOMENTS OF PROFOUND CONNECTION AND GASTRONOMIC EXCELLENCE.
               </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 lg:gap-32">
               
               {/* Venue A: The Gilded Vault */}
               <motion.div variants={fadeUp} className="flex flex-col group">
                  <div className="relative rounded-lg overflow-hidden aspect-[4/5] mb-8">
                     <img src={image16} alt="The Gilded Vault" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                     <div className="absolute top-4 left-4 bg-[#F07113] text-black text-[9px] font-bold px-3 py-1.5 rounded-[2px] tracking-widest uppercase shadow-md">
                        UP TO 14 GUESTS
                     </div>
                  </div>
                  
                  <div className="flex justify-between items-start mb-6 border-b border-white/5 pb-6">
                     <div>
                        <h3 className="text-3xl text-white font-bold tracking-tight mb-2">The Gilded Vault</h3>
                        <p className="text-[#F07113] text-[10px] font-bold tracking-widest uppercase">IN-VAULT DINING</p>
                     </div>
                     <span className="text-[#666666] text-[9px] font-bold tracking-widest uppercase mt-2">EXOTIC</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                     <div className="flex items-start space-x-3">
                        <Shield size={14} className="text-[#F07113] mt-0.5 shrink-0" />
                        <p className="text-[#AAAAAA] text-xs font-medium leading-[1.6]">Absolute Privacy setting for hotel discretion</p>
                     </div>
                     <div className="flex items-start space-x-3">
                        <Wine size={14} className="text-[#F07113] mt-0.5 shrink-0" />
                        <p className="text-[#AAAAAA] text-xs font-medium leading-[1.6]">Dedicated Sommelier, Decanting & Private Cellar</p>
                     </div>
                     <div className="flex items-start space-x-3">
                        <Users size={14} className="text-[#F07113] mt-0.5 shrink-0" />
                        <p className="text-[#AAAAAA] text-xs font-medium leading-[1.6]">Personalized Menu Printing with Gold Leaf</p>
                     </div>
                     <div className="flex items-start space-x-3">
                        <Music size={14} className="text-[#F07113] mt-0.5 shrink-0" />
                        <p className="text-[#AAAAAA] text-xs font-medium leading-[1.6]">Custom Score & Climate Profiles</p>
                     </div>
                  </div>
               </motion.div>
               
               {/* Venue B: The Saffron Lounge */}
               <motion.div variants={fadeUp} className="flex flex-col group mt-0 md:mt-32">
                  <div className="relative rounded-lg overflow-hidden aspect-[4/5] mb-8">
                     <img src={image17} alt="The Saffron Lounge" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale hover:grayscale-0" />
                     <div className="absolute top-4 left-4 bg-[#F07113] text-black text-[9px] font-bold px-3 py-1.5 rounded-[2px] tracking-widest uppercase shadow-md">
                        UP TO 40 GUESTS
                     </div>
                  </div>
                  
                  <div className="flex justify-between items-start mb-6 border-b border-white/5 pb-6">
                     <div>
                        <h3 className="text-3xl text-white font-bold tracking-tight mb-2">The Saffron Lounge</h3>
                        <p className="text-[#F07113] text-[10px] font-bold tracking-widest uppercase">ROOFTOP PRESTIGE</p>
                     </div>
                     <span className="text-[#666666] text-[9px] font-bold tracking-widest uppercase mt-2">CLASSIC</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                     <div className="flex items-start space-x-3">
                        <Sun size={14} className="text-[#F07113] mt-0.5 shrink-0" />
                        <p className="text-[#AAAAAA] text-xs font-medium leading-[1.6]">Private Street Access for VIP arrivals</p>
                     </div>
                     <div className="flex items-start space-x-3">
                        <Navigation size={14} className="text-[#F07113] mt-0.5 shrink-0" />
                        <p className="text-[#AAAAAA] text-xs font-medium leading-[1.6]">Wrap-around Terrace with Skyline views</p>
                     </div>
                     <div className="flex items-start space-x-3">
                        <Compass size={14} className="text-[#F07113] mt-0.5 shrink-0" />
                        <p className="text-[#AAAAAA] text-xs font-medium leading-[1.6]">Fully Customizable Ambient Audio System</p>
                     </div>
                     <div className="flex items-start space-x-3">
                        <Key size={14} className="text-[#F07113] mt-0.5 shrink-0" />
                        <p className="text-[#AAAAAA] text-xs font-medium leading-[1.6]">Retractable Glass Ceiling Exposure</p>
                     </div>
                  </div>
               </motion.div>
               
            </div>
         </motion.div>
      </section>

      {/* 3. The Private Collection (Menu Curations) */}
      <section className="w-full bg-[#1A1A1C] py-24 md:py-32 px-6 md:px-12 lg:px-24 mb-24 md:mb-40 border-y border-white/5">
         <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={staggerContainer}
            className="max-w-7xl mx-auto flex flex-col items-center"
         >
            <motion.p variants={fadeUp} className="text-[#F07113] text-[9px] font-bold tracking-[0.2em] uppercase mb-6 text-center">
               GASTRONOMIC CURATIONS
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-5xl md:text-[5rem] text-center font-bold tracking-tight mb-8 leading-[0.9]">
               <span className="text-white block">The Private</span>
               <span className="text-[#F07113] block italic drop-shadow-[0_0_15px_rgba(240,113,19,0.3)]">Collection</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[#AAAAAA] text-xs md:text-sm font-medium max-w-lg text-center leading-[1.8] mb-20">
               Curated degustation journeys designed exclusively for our private residents. Each course is a testament to the Saffron philosophy of shadow and spice.
            </motion.p>
            
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
               {/* Card 1 */}
               <motion.div variants={fadeUp} className="bg-[#222222] rounded-lg p-10 md:p-12 border-t-2 border-[#1A1A1A] hover:border-[#F07113] transition-colors relative flex flex-col h-full shadow-lg">
                  <div className="flex justify-between items-start mb-12">
                     <h3 className="text-3xl md:text-4xl text-white font-bold tracking-tight leading-tight max-w-[200px]">7-Course Degustation</h3>
                     <span className="text-[#F07113] text-2xl font-bold">$245</span>
                  </div>
                  
                  <div className="mb-10">
                     <p className="text-[#F07113] text-[8px] font-bold tracking-[0.2em] uppercase mb-3">SIGNATURE HIGHLIGHT</p>
                     <p className="text-white text-base font-bold mb-2">Midnight Truffle Gnocchi</p>
                     <p className="text-[#888888] text-xs font-medium leading-[1.6]">Served with hand-shaved black winter truffle and gold leaf.</p>
                  </div>
                  
                  <div className="mb-12">
                     <p className="text-[#F07113] text-[8px] font-bold tracking-[0.2em] uppercase mb-3">THE CROWNING TOUCH</p>
                     <p className="text-white text-base font-bold mb-2">Smoked Charcoal Wagyu</p>
                     <p className="text-[#888888] text-xs font-medium leading-[1.6]">A5 reserved grade, integrated over saffron-ash embers.</p>
                  </div>
                  
                  <div className="mt-auto border-t border-white/5 pt-8">
                     <a href="#" className="flex items-center text-[#AAAAAA] text-[9px] font-bold tracking-[0.15em] uppercase hover:text-white transition-colors w-max">
                        VIEW FULL MENUS
                     </a>
                  </div>
               </motion.div>
               
               {/* Card 2 */}
               <motion.div variants={fadeUp} className="bg-[#111111] rounded-lg p-10 md:p-12 border border-white/5 hover:border-white/20 transition-colors relative flex flex-col h-full shadow-lg">
                  <div className="flex justify-between items-start mb-12">
                     <h3 className="text-3xl md:text-4xl text-white font-bold tracking-tight leading-tight max-w-[200px]">Curated Small Plates</h3>
                     <span className="text-[#F07113] text-2xl font-bold">$185</span>
                  </div>
                  
                  <div className="mb-10">
                     <p className="text-[#F07113] text-[8px] font-bold tracking-[0.2em] uppercase mb-3">SIGNATURE HIGHLIGHT</p>
                     <p className="text-white text-base font-bold mb-2">Braised Saffron Lamb</p>
                     <p className="text-[#888888] text-xs font-medium leading-[1.6]">Walnut crumble and preserved lemon in aromatic emulsion.</p>
                  </div>
                  
                  <div className="mb-12">
                     <p className="text-[#F07113] text-[8px] font-bold tracking-[0.2em] uppercase mb-3">THE CROWNING TOUCH</p>
                     <p className="text-white text-base font-bold mb-2">Burnt Honey Burrata</p>
                     <p className="text-[#888888] text-xs font-medium leading-[1.6]">Charcoal crust with fresh passion fruit reduction.</p>
                  </div>
                  
                  <div className="mt-auto border-t border-white/5 pt-8">
                     <a href="#" className="flex items-center text-[#AAAAAA] text-[9px] font-bold tracking-[0.15em] uppercase hover:text-white transition-colors w-max">
                        VIEW BAR PACKAGES
                     </a>
                  </div>
               </motion.div>
            </div>
         </motion.div>
      </section>

      {/* 4. Inquire / Form Section */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-32 md:mb-48">
         <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24"
         >
            {/* Left Col - Inquiry Info */}
            <motion.div variants={fadeUp} className="flex flex-col justify-center">
               <p className="text-[#F07113] text-[9px] font-bold tracking-[0.2em] uppercase mb-6">RESERVATIONS</p>
               <h2 className="text-5xl md:text-[6rem] font-bold tracking-tight leading-[0.85] mb-8">
                  <span className="text-white block">Inquire</span>
                  <span className="text-[#F07113] block italic drop-shadow-[0_0_15px_rgba(240,113,19,0.3)]">Exclusivity</span>
               </h2>
               
               <p className="text-[#AAAAAA] text-sm font-medium leading-[1.8] max-w-md mb-12">
                  Secure your date within our vaults. Our events concierge will review your request to ensure a seamless experience of luxury and total discretion.
               </p>
               
               <div className="flex flex-col mb-16 border-l-2 border-[#1A1A1A] pl-6">
                  <p className="text-[#666666] text-[9px] font-bold tracking-[0.15em] uppercase mb-2 mt-1">SECURE YOUR DATE</p>
                  <a href="tel:+12345678900" className="text-white text-2xl font-bold tracking-tight mb-1 hover:text-[#F07113] transition-colors inline-block w-max">+1 (234) 567-8900</a>
                  <a href="mailto:events@midnightsaffron.com" className="text-[#888888] text-xs font-medium hover:text-white transition-colors w-max">events@midnightsaffron.com</a>
               </div>
               
               <div className="flex space-x-6">
                  <button className="text-[#AAAAAA] hover:text-white transition-colors"><Link size={18} /></button>
                  <button className="text-[#AAAAAA] hover:text-white transition-colors"><Send size={18} /></button>
               </div>
            </motion.div>
            
            {/* Right Col - Form */}
            <motion.div variants={fadeUp} className="bg-[#111111] p-10 md:p-14 rounded-lg shadow-2xl relative">
               <div className="absolute top-0 right-0 w-48 h-48 bg-[#F07113]/5 rounded-full blur-[80px] pointer-events-none"></div>
               
               <form className="flex flex-col relative z-10" onSubmit={(e) => e.preventDefault()}>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                     <div className="flex flex-col space-y-3">
                        <label className="text-[#666666] text-[8px] font-bold tracking-[0.2em] uppercase">FULL NAME</label>
                        <input type="text" placeholder="Elias Thorne" className="bg-transparent text-white text-sm border-b border-[#333333] pb-3 focus:outline-none focus:border-[#F07113] transition-colors placeholder:text-[#555] rounded-none"/>
                     </div>
                     <div className="flex flex-col space-y-3">
                        <label className="text-[#666666] text-[8px] font-bold tracking-[0.2em] uppercase">EMAIL ADDRESS</label>
                        <input type="email" placeholder="elias@executive.com" className="bg-transparent text-white text-sm border-b border-[#333333] pb-3 focus:outline-none focus:border-[#F07113] transition-colors placeholder:text-[#555] rounded-none"/>
                     </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                     <div className="flex flex-col space-y-3 relative">
                        <label className="text-[#666666] text-[8px] font-bold tracking-[0.2em] uppercase">PREFERRED VENUE</label>
                        <select className="bg-transparent text-white text-sm border-b border-[#333333] pb-3 focus:outline-none focus:border-[#F07113] transition-colors appearance-none cursor-pointer rounded-none">
                           <option value="vault" className="bg-[#111]">The Gilded Vault</option>
                           <option value="lounge" className="bg-[#111]">The Saffron Lounge</option>
                        </select>
                        <div className="absolute right-0 bottom-4 pointer-events-none text-[#555] text-[10px] transform scale-x-150">v</div>
                     </div>
                     <div className="flex flex-col space-y-3 relative">
                        <label className="text-[#666666] text-[8px] font-bold tracking-[0.2em] uppercase">DATE & TIME</label>
                        <input type="text" placeholder="DD/MM/YYYY" className="bg-transparent text-white text-sm border-b border-[#333333] pb-3 focus:outline-none focus:border-[#F07113] transition-colors placeholder:text-white rounded-none"/>
                        <div className="absolute right-0 bottom-4 pointer-events-none text-[#555] text-xs">📅</div>
                     </div>
                  </div>
                  
                  <div className="flex flex-col space-y-3 mb-12">
                     <label className="text-[#F07113] text-[8px] font-bold tracking-[0.2em] uppercase">SPECIAL REQUIREMENTS</label>
                     <textarea 
                        rows="3"
                        placeholder="Allergies, decor requests, or specific beverage pairings..." 
                        className="bg-transparent text-white text-sm border-b border-[#333333] pb-3 focus:outline-none focus:border-[#F07113] transition-colors placeholder:text-[#555] resize-none rounded-none"
                     ></textarea>
                  </div>
                  
                  <button type="submit" className="w-full bg-gradient-to-r from-[#F07113] to-[#FF9040] hover:from-[#D5610F] hover:to-[#F07113] text-black text-[11px] font-bold py-5 rounded-[4px] tracking-[0.2em] uppercase transition-all shadow-[0_4px_20px_rgba(240,113,19,0.3)]">
                     REQUEST ACCESS
                  </button>
               </form>
            </motion.div>
         </motion.div>
      </section>

    </div>
  );
};

export default PrivateDinning;
