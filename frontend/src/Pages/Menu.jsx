import React from 'react';
import { motion } from 'motion/react';
import { Utensils } from 'lucide-react';
import image13 from '../assets/image13.png';
import image14 from '../assets/image14.png';

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

const Menu = () => {
  return (
    <div className="w-full flex flex-col font-sans bg-[#131313] text-[#DDDDDD] overflow-x-hidden pt-32 pb-32">
      
      {/* 1. Hero / Title Section */}
      <section className="relative w-full mb-24 md:mb-40 flex flex-col md:flex-row justify-between items-center min-h-[600px] md:min-h-[75vh]">
         
         {/* Right Image Background (Flush to right edge) */}
         <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute top-0 right-0 w-full md:w-[55%] lg:w-[50%] h-full z-0"
         >
            <div className="relative w-full h-full rounded-tl-xl md:rounded-l-md overflow-hidden shadow-2xl">
               <img src={image13} alt="Menu Feature" className="absolute inset-0 w-full h-full object-cover object-center md:object-left" />
               <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#131313] to-transparent hidden md:block"></div>
               <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#131313] via-[#131313]/60 to-transparent"></div>
               
               {/* Floater overlay inside the image container */}
               <div className="absolute bottom-0 left-0 w-[85%] sm:w-[70%] lg:w-[55%] p-6 md:p-8 rounded-tr-xl bg-gradient-to-tr from-[#1A1A1C]/95 to-[#222222]/90 backdrop-blur-md z-20">
                  <p className="text-[#F07113] text-[9px] font-bold tracking-[0.15em] uppercase mb-2">CHEF'S SIGNATURE</p>
                  <h3 className="text-white text-xl md:text-2xl font-bold tracking-tight mb-2">Glazed Black Cod</h3>
                  <p className="text-[#AAAAAA] text-xs leading-[1.6] font-medium">
                     Infused with 48-hour fermented saffron honey.
                  </p>
               </div>
            </div>
         </motion.div>

         {/* Left Text Content Aligned to Layout Grid */}
         <div className="w-full max-w-6xl mx-auto px-6 md:px-12 lg:px-24 relative z-10 flex">
            <motion.div 
               variants={staggerContainer}
               initial="hidden"
               animate="visible"
               className="w-full md:w-1/2 pt-24 pb-64 md:py-32"
            >
               <motion.h1 variants={fadeUp} className="text-[5.5rem] md:text-[7rem] font-bold leading-[0.85] tracking-tight mb-8">
                  <span className="text-white block">THE</span>
                  <span className="text-[#F07113] block drop-shadow-[0_0_20px_rgba(240,113,19,0.4)]">MENU</span>
               </motion.h1>
               <motion.p variants={fadeUp} className="text-[#AAAAAA] text-sm md:text-base leading-[1.7] max-w-sm font-medium">
                  A kinetic fusion of Persian heritage and urban darkness. Each dish is a deliberate collision of smoke, saffron, and stone.
               </motion.p>
            </motion.div>
         </div>
      </section>

      {/* 2. Starters Section */}
      <section className="w-full max-w-6xl mx-auto px-6 md:px-12 lg:px-24 mb-32">
         <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={staggerContainer}
            className="w-full"
         >
            {/* Header */}
            <motion.div variants={fadeUp} className="flex items-center mb-16">
               <span className="text-5xl md:text-6xl font-bold text-[#F07113] tracking-tighter mr-6">01</span>
               <h2 className="text-3xl md:text-4xl text-white font-bold tracking-tight">STARTERS</h2>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0 mt-8">
               {/* Item A */}
               <motion.div variants={fadeUp} className="flex flex-col md:pr-12 md:border-r border-white/5">
                  <div className="flex justify-between items-start mb-4">
                     <h3 className="text-lg md:text-xl text-white font-bold tracking-tight">Saffron Arancini</h3>
                     <span className="text-[#F07113] text-sm font-bold ml-4">$24</span>
                  </div>
                  <p className="text-[#AAAAAA] text-xs leading-[1.7] font-medium max-w-[280px]">
                     Wild-harvested saffron, fior di latte, smoked paprika aioli, and gold leaf dust.
                  </p>
               </motion.div>
               {/* Item B */}
               <motion.div variants={fadeUp} className="flex flex-col md:pl-12 mt-12 md:mt-0">
                  <div className="flex justify-between items-start mb-4">
                     <h3 className="text-lg md:text-xl text-white font-bold tracking-tight">Burnt Leek</h3>
                     <span className="text-[#F07113] text-sm font-bold ml-4">$19</span>
                  </div>
                  <p className="text-[#AAAAAA] text-xs leading-[1.7] font-medium max-w-[280px]">
                     Charcoal-fired leek hearts, fermented black garlic cream, and toasted walnut crumble.
                  </p>
               </motion.div>
            </div>
         </motion.div>
      </section>

      {/* 3. Mains Section */}
      <section className="w-full max-w-6xl mx-auto px-6 md:px-12 lg:px-24 mb-32">
         <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={staggerContainer}
            className="w-full"
         >
            {/* Header Right Aligned */}
            <motion.div variants={fadeUp} className="flex items-center justify-end mb-12">
               <h2 className="text-3xl md:text-4xl text-white font-bold tracking-tight mr-6">MAINS</h2>
               <span className="text-5xl md:text-6xl font-bold text-[#F07113] tracking-tighter">02</span>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
               {/* Main A - Large Box */}
               <motion.div variants={fadeUp} className="md:col-span-7 bg-[#1A1A1C] rounded-md p-8 md:p-12 relative flex flex-col justify-between min-h-[300px] border-l-4 border-l-[#F07113] shadow-xl">
                  <div>
                     <div className="flex justify-between items-start mb-6">
                        <h3 className="text-2xl md:text-3xl text-white font-bold tracking-tight">GLAZED BLACK COD</h3>
                        <span className="text-[#F07113] text-xl font-bold">$58</span>
                     </div>
                     <p className="text-[#AAAAAA] text-sm leading-[1.8] font-medium max-w-md">
                        Miso-saffron glaze, charred bok choy, and a emulsion of reduced pomegranate molasses. A symphony of dark sweetness and oceanic depth.
                     </p>
                  </div>
                  <div className="flex space-x-3 mt-10">
                     <span className="bg-[#2A2A2C] text-[#888888] text-[8px] font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-[2px]">SIGNATURE</span>
                     <span className="bg-[#2A2A2C] text-[#888888] text-[8px] font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-[2px]">SAFFRON INFUSED</span>
                  </div>
               </motion.div>
               
               {/* Main B - Smaller Box */}
               <motion.div variants={fadeUp} className="md:col-span-5 bg-[#222222] rounded-md p-8 md:p-10 flex flex-col justify-between shadow-xl">
                  <div>
                     <Utensils size={20} className="text-[#F07113] mb-8" />
                     <h3 className="text-xl md:text-2xl text-white font-bold tracking-tight mb-4 uppercase">SPICED LAMB RACK</h3>
                     <p className="text-[#AAAAAA] text-xs leading-[1.7] font-medium max-w-[240px]">
                        Pistachio crust, mint-infused yogurt, and heirloom carrots roasted in saffron oil.
                     </p>
                  </div>
                  <div className="mt-12">
                     <span className="text-[#E0A87A] text-2xl font-bold">$46</span>
                  </div>
               </motion.div>
            </div>
         </motion.div>
      </section>

      {/* 4. Desserts Section */}
      <section className="w-full max-w-6xl mx-auto px-6 md:px-12 lg:px-24 mb-32">
         <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={staggerContainer}
            className="w-full"
         >
            {/* Header */}
            <motion.div variants={fadeUp} className="flex items-center mb-12">
               <span className="text-5xl md:text-6xl font-bold text-[#F07113] tracking-tighter mr-6">03</span>
               <h2 className="text-3xl md:text-4xl text-white font-bold tracking-tight">SWEET FINALE</h2>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {/* Dessert A - Image Card */}
               <motion.div variants={fadeUp} className="relative rounded-lg overflow-hidden aspect-[4/3] w-full group shadow-xl">
                  <img src={image14} alt="Midnight Mousse" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-[#111111]/90 via-[#111111]/60 to-transparent pointer-events-none"></div>
                  
                  <div className="absolute inset-0 p-8 flex flex-col justify-end pointer-events-none">
                     <h3 className="text-2xl text-white font-bold tracking-tight mb-2">Midnight Mousse</h3>
                     <span className="text-[#F07113] text-xs font-bold mb-3 block">$18</span>
                     <p className="text-[#AAAAAA] text-xs leading-[1.6] font-medium max-w-[220px]">
                        70% dark cocoa, sea salt, and a crystalline saffron tuile.
                     </p>
                  </div>
               </motion.div>
               
               {/* Dessert B - Dark Card */}
               <motion.div variants={fadeUp} className="bg-[#111111] rounded-lg p-10 flex flex-col justify-center shadow-xl border border-white/5 relative">
                  <h3 className="text-xl md:text-2xl text-white font-bold tracking-tight mb-4">Deconstructed Baklava</h3>
                  <p className="text-[#AAAAAA] text-xs leading-[1.8] font-medium max-w-[300px] mb-12">
                     Honey-soaked phyllo shards, rosewater gel, crushed emerald pistachios, and saffron-cardamom gelato.
                  </p>
                  
                  <div className="flex justify-between items-end mt-auto">
                     <span className="text-[#F07113] text-lg font-bold">$16</span>
                     <a href="#" className="text-white text-[9px] font-bold tracking-[0.1em] border-b border-transparent hover:border-white transition-colors pb-1 uppercase">
                        ORDER NOW
                     </a>
                  </div>
               </motion.div>
            </div>
         </motion.div>
      </section>

    </div>
  );
};

export default Menu;
