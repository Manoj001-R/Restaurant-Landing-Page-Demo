import React from 'react';
import { motion } from 'motion/react';
import { MoveRight, ChevronLeft, ChevronRight } from 'lucide-react';
import image7 from '../assets/image7.png';
import image8 from '../assets/image8.png';
import image9 from '../assets/image9.png';
import image10 from '../assets/image10.png';
import image11 from '../assets/image11.png';
import image12 from '../assets/image12.png';
import person from '../assets/person.png';

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const Experience = () => {
  return (
    <div className="w-full flex flex-col font-sans bg-[#131313] text-[#DDDDDD] overflow-x-hidden pt-24 md:pt-0">
      
      {/* 1. Hero Section */}
      <section className="relative w-full min-h-[90vh] flex flex-col justify-center px-6 md:px-12 lg:px-24">
        <motion.div 
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute inset-0 z-0"
        >
          <img src={image7} alt="Charcoal Flame" className="w-full h-full object-cover origin-center opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#171717] via-[#171717]/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1C] via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </motion.div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-end gap-16 lg:gap-8 mt-12 md:mt-24">
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex-1 max-w-xl"
          >
            <motion.div variants={fadeUp} className="inline-block bg-[#2A2A2A]/80 backdrop-blur-sm px-4 py-2 rounded-sm mb-6 border border-white/5">
               <p className="text-[#E0A87A] text-[9px] font-bold tracking-[0.2em] uppercase">ESTABLISHED 2024</p>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-6xl md:text-[5.5rem] font-bold tracking-tight leading-[1.05] mb-6 text-white bg-clip-text">
              The Art <br />
              <span className="text-[#F07113]">of Spice.</span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-[#AAAAAA] text-sm md:text-base leading-[1.7] mb-8 max-w-md font-medium">
              An immersive culinary journey where charcoal-fired precision meets the vibrant, kinetic soul of modern saffron-infused bistro culture.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
              <button className="w-full sm:w-auto bg-[#F07113] hover:bg-[#D5610F] text-black text-[11px] font-extrabold px-8 py-4 rounded-md tracking-[0.05em] transition-colors">
                Reserve Your Seat
              </button>
              <button className="text-white text-[10px] font-bold tracking-[0.1em] uppercase flex items-center hover:text-[#F07113] transition-colors group">
                EXPLORE THE MENU <MoveRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
              </button>
            </motion.div>
          </motion.div>
          
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1, delay: 0.6 }}
             className="w-full sm:w-80 bg-[#1F1F1F]/90 backdrop-blur-md rounded-lg p-6 border-l-[3px] border-l-[#F07113] border-t border-t-white/5 border-r border-r-white/5 border-b border-b-white/5 shadow-2xl relative"
          >
             <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10">
                   <img src={person} alt="Chef" className="w-full h-full object-cover" />
                </div>
                <div>
                   <h4 className="text-white text-sm font-bold tracking-tight leading-snug">Chef's Selection</h4>
                   <p className="text-[#888888] text-[10px] font-medium tracking-wide">Signature Tasting Menu</p>
                </div>
             </div>
             <p className="text-[#AAAAAA] text-xs italic font-medium leading-[1.6]">
               "We don't just cook with fire; we orchestrate it."
             </p>
          </motion.div>
          
        </div>
      </section>

      {/* 2. Signatures Grid */}
      <section className="w-full py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-[#1A1A1C]">
         <div className="max-w-7xl mx-auto">
            {/* Header */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={staggerContainer}
              className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6"
            >
               <motion.div variants={fadeUp}>
                  <h2 className="text-4xl md:text-[3rem] text-white font-bold tracking-tight mb-2">SIGNATURES</h2>
                  <p className="text-[#AAAAAA] text-sm leading-[1.6] font-medium">
                     Selected dishes defining our midnight philosophy.
                  </p>
               </motion.div>
               <motion.div variants={fadeUp} className="flex space-x-4">
                  <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 transition-colors">
                     <ChevronLeft size={16} />
                  </button>
                  <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 transition-colors">
                     <ChevronRight size={16} />
                  </button>
               </motion.div>
            </motion.div>
            
            {/* Masonry-Style Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 auto-rows-min">
               
               {/* Left Top - Huge Wide Card -> Smoked Saffron Prawns */}
               <motion.div 
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: false, amount: 0.2 }}
                 transition={{ duration: 0.8 }}
                 className="md:col-span-1 relative rounded-xl overflow-hidden group aspect-[5/4] bg-[#111111]"
               >
                  <img src={image8} alt="Smoked Saffron Prawns" className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/30 to-transparent pointer-events-none"></div>
                  <div className="absolute inset-0 p-8 flex flex-col justify-end pointer-events-none">
                     <div className="bg-[#F07113] text-black text-[9px] font-bold px-3 py-1 rounded-[2px] w-max mb-4">
                        $42.00
                     </div>
                     <h3 className="text-2xl md:text-3xl text-white font-bold mb-3 tracking-tight">Smoked Saffron Prawns</h3>
                     <p className="text-[#AAAAAA] text-sm max-w-sm leading-[1.6] font-medium mb-2">
                        Charcoal charred king prawns, aged saffron butter, chili oil emulsion.
                     </p>
                  </div>
               </motion.div>

               {/* Right Top - Prime Saffron Ribeye */}
               <motion.div 
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: false, amount: 0.2 }}
                 transition={{ duration: 0.8, delay: 0.2 }}
                 className="md:col-span-1 relative rounded-xl overflow-hidden group aspect-[5/4] bg-[#111111] flex flex-col"
               >
                  <div className="w-full relative h-[65%] overflow-hidden">
                     <img src={image9} alt="Prime Saffron Ribeye" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                     <div className="absolute bottom-4 left-6 bg-[#F07113] text-black text-[9px] font-bold px-3 py-1 rounded-[2px] w-max">
                        $58.00
                     </div>
                  </div>
                  <div className="h-[35%] w-full bg-[#111111] p-6 lg:p-8 flex flex-col justify-center">
                     <h3 className="text-xl md:text-2xl text-white font-bold mb-2 tracking-tight">Prime Saffron Ribeye</h3>
                     <p className="text-[#AAAAAA] text-xs leading-[1.6] font-medium">
                        45-day dry aged, saffron-infused bone marrow jus.
                     </p>
                  </div>
               </motion.div>

               {/* Left Bottom - Midnight Bloom */}
               <motion.div 
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: false, amount: 0.2 }}
                 transition={{ duration: 0.8 }}
                 className="md:col-span-1 relative rounded-xl overflow-hidden group aspect-square bg-[#111111]"
               >
                  <img src={image10} alt="Midnight Bloom" className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent pointer-events-none"></div>
                  <div className="absolute inset-0 p-8 flex flex-col justify-end pointer-events-none">
                     <div className="bg-[#F07113] text-black text-[9px] font-bold px-3 py-1 rounded-[2px] w-max mb-3">
                        $18.00
                     </div>
                     <h3 className="text-xl md:text-2xl text-white font-bold mb-2 tracking-tight">Midnight Bloom</h3>
                     <p className="text-[#AAAAAA] text-xs leading-[1.6] font-medium max-w-xs">
                        Saffron panna cotta, dark chocolate soil, gold dust.
                     </p>
                  </div>
               </motion.div>

               {/* Right Bottom - Half Text / Half Image */}
               <motion.div 
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: false, amount: 0.2 }}
                 transition={{ duration: 0.8, delay: 0.2 }}
                 className="md:col-span-1 relative rounded-xl overflow-hidden group aspect-square bg-[#111111] grid grid-cols-2"
               >
                  <div className="col-span-1 p-6 lg:p-10 flex flex-col justify-center">
                     <p className="text-[#F07113] text-[8px] font-bold tracking-[0.15em] mb-4 uppercase">LIMITED AVAILABILITY</p>
                     <h3 className="text-xl lg:text-3xl text-white font-bold mb-4 tracking-tight leading-tight">Truffle & Saffron Gnocchi</h3>
                     <p className="text-[#AAAAAA] text-xs leading-[1.6] font-medium mb-8">
                        Hand-rolled potato gnocchi, black winter truffle, Grade A++ saffron cream.
                     </p>
                     
                     <a href="#" className="text-white text-[10px] font-bold tracking-widest hover:text-[#F07113] transition-colors relative w-max after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[1px] after:bg-[#444]">
                        Order Now — $34.00
                     </a>
                  </div>
                  <div className="col-span-1 relative overflow-hidden h-full">
                     <img src={image11} alt="Truffle & Saffron Gnocchi" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  </div>
               </motion.div>

            </div>
         </div>
      </section>

      {/* 3. Bottom CTA */}
      <section className="w-full py-32 md:py-48 px-6 flex flex-col items-center justify-center relative overflow-hidden">
         <div className="absolute inset-0 z-0">
            <img src={image12} alt="Restaurant Atmosphere" className="w-full h-full object-cover opacity-30 mix-blend-screen" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/70 to-[#1A1A1C]/90"></div>
         </div>
         
         <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={staggerContainer}
            className="max-w-2xl mx-auto text-center w-full z-10 -mt-12"
         >
            <motion.h2 variants={fadeUp} className="text-5xl md:text-[5rem] text-white font-bold mb-6 tracking-tight leading-[1]">
               Ready for the<br/>
               <span className="text-[#F07113]">experience?</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[#AAAAAA] text-sm md:text-base leading-[1.7] font-medium mb-12 max-w-md mx-auto">
               Reservations are highly recommended for dinner service. Join us for a night of curated flavor and atmosphere.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
               <button className="w-full sm:w-auto bg-[#F07113] hover:bg-[#D5610F] text-black text-[12px] font-bold px-10 py-4 rounded-md tracking-[0.05em] transition-colors">
                  Reserve Now
               </button>
               <button className="w-full sm:w-auto bg-[#2A2A2C] hover:bg-[#333333] text-white text-[12px] font-bold px-10 py-4 rounded-md tracking-[0.05em] transition-colors">
                  View Menu
               </button>
            </motion.div>
         </motion.div>
      </section>

    </div>
  );
};

export default Experience;
