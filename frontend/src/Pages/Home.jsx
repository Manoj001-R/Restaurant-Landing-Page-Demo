import React from 'react';
import { Calendar, Users, MoveRight, Wine, Citrus, Droplet } from 'lucide-react';
import { motion } from 'motion/react';
import ClickSpark from '../Animation_components/ClickSpark';
import heroImage from '../assets/image.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import image5 from '../assets/image5.png';
import image6 from '../assets/image6.png';

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const Home = () => {
  return (
    <ClickSpark sparkColor='#fff' sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
      <div className="w-full flex flex-col font-sans bg-[#131313] text-[#DDDDDD] overflow-x-hidden">
      
      {/* 1. Hero Section */}
      <section id="home" className="relative w-full h-screen flex flex-col justify-center px-6 md:px-24">
        <motion.div 
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute inset-0 z-0"
        >
          <img src={heroImage} alt="Hero Background" className="w-full h-full object-cover origin-center opacity-40 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#171717] via-[#171717]/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-black/30"></div>
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="relative z-10 max-w-2xl mt-8"
        >
          <motion.p variants={fadeLeft} className="text-[#E0A87A] text-[9px] font-bold tracking-[0.3em] mb-4 uppercase">ESTABLISHED MMXXIV</motion.p>
          <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl md:text-[5rem] font-bold tracking-tight leading-[1] mb-6 text-white">
            The Art of <br />
            <span className="text-[#F07113]">Spice</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-[#AAAAAA] text-sm md:text-base leading-[1.6] mb-8 max-w-md font-medium">
            A cinematic culinary journey where heritage ingredients meet contemporary kineticism. Immerse yourself in the dark glow of Midnight Saffron.
          </motion.p>
          
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-[#F07113] hover:bg-[#D5610F] text-black text-[10px] font-extrabold px-8 py-4 rounded-sm tracking-[0.15em] transition-colors">
              RESERVE YOUR SEAT
            </button>
            <button className="bg-[#3A3A3A] hover:bg-[#444444] text-white text-[10px] font-extrabold px-8 py-4 rounded-sm tracking-[0.15em] transition-colors">
              VIEW MENU
            </button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 transform rotate-90 origin-right z-10"
        >
          <p className="text-[#777777] text-[10px] tracking-[0.3em] font-bold uppercase">SCROLL TO EXPLORE</p>
        </motion.div>
      </section>

      {/* 2. Signature Series (Saffron Prawns) */}
      <section id="experience" className="w-full py-24 md:py-32 px-6 md:px-24 bg-[#131313] overflow-hidden">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24"
        >
          <motion.div variants={fadeLeft} className="w-full md:w-[45%] relative group z-10 flex justify-center md:justify-start">
             <div className="relative rounded-md overflow-hidden aspect-[3/4] w-full max-w-[400px]">
               <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  src={image2} alt="Saffron Prawns" className="w-full h-full object-cover origin-center" 
               />
             </div>
             
             <motion.div 
                variants={fadeUp}
                className="absolute -bottom-6 right-0 md:-right-12 z-20 w-[85%] md:w-[320px]"
             >
               <div className="p-6 md:p-8 bg-[#2A2A2A] rounded-md shadow-2xl">
                  <h4 className="text-[#E0A87A] text-[9px] font-bold tracking-[0.15em] uppercase mb-2">SIGNATURE SERIES</h4>
                  <p className="text-sm text-white font-medium leading-[1.5]">Hand-harvested Iranian saffron infused with coastal essence.</p>
               </div>
             </motion.div>
          </motion.div>
          
          <div className="w-full md:w-[55%] mt-12 md:mt-0 flex flex-col justify-center">
             <motion.h2 variants={fadeUp} className="text-4xl md:text-[3.5rem] font-bold mb-6 leading-tight text-white tracking-tight">Saffron<br/>Prawns</motion.h2>
             <motion.p variants={fadeUp} className="text-[#AAAAAA] text-sm md:text-sm leading-[1.7] mb-6 font-medium max-w-xl">
                Our defining signature. Jumbo tiger prawns seared in a legacy cast-iron, glazed with a reduction of grade-A saffron and citrus-infused clarified butter.
             </motion.p>
             <motion.p variants={fadeUp} className="text-[#AAAAAA] text-sm md:text-sm leading-[1.7] mb-12 font-medium max-w-xl">
                Each element is balanced to provoke the palate—a tension between the earthy warmth of the saffron and the vibrant snap of the sea.
             </motion.p>
             <motion.div variants={fadeUp} className="w-full flex items-center justify-end">
                <motion.div 
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  viewport={{ once: false }}
                  className="flex-grow h-[1px] bg-[#333333] mr-6 origin-right"
                ></motion.div>
                <span className="text-3xl font-bold text-[#F07113]">01</span>
             </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 3. Kitchen Mastery Collection */}
      <section id="menu" className="w-full py-24 md:py-32 px-6 md:px-24 bg-[#111111]">
         <div className="max-w-6xl mx-auto">
            {/* Header */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={staggerContainer}
              className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6"
            >
               <motion.div variants={fadeUp}>
                  <p className="text-[#E0A87A] text-[9px] font-bold tracking-[0.2em] mb-2 uppercase">THE COLLECTION</p>
                  <h2 className="text-4xl md:text-[3rem] text-white font-bold tracking-tight">Kitchen Mastery</h2>
               </motion.div>
               <motion.div variants={fadeUp} className="max-w-sm text-left md:text-right">
                  <p className="text-[#888888] text-xs leading-[1.6] font-medium">
                     A curated selection of plates that define our kinetic approach to traditional spice profiles.
                  </p>
               </motion.div>
            </motion.div>
            
            {/* Grid */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-12 gap-6"
            >
               
               {/* Item 1 - Wide Card (Prime Ribeye) */}
               <motion.div variants={fadeUp} className="md:col-span-8 relative rounded-xl overflow-hidden group aspect-[16/10] bg-[#1A1A1A]">
                  <motion.img whileHover={{ scale: 1.05 }} transition={{ duration: 0.8 }} src={image3} alt="Prime Ribeye" className="absolute inset-0 w-full h-full object-cover opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent mix-blend-multiply pointer-events-none"></div>
                  <div className="absolute inset-0 p-8 flex flex-col justify-end pointer-events-none">
                     <div>
                        <p className="text-[#E0A87A] text-[9px] font-bold tracking-[0.15em] mb-2 uppercase">AGED 45 DAYS</p>
                        <h3 className="text-2xl md:text-[2rem] text-white font-bold mb-3 tracking-tight">Prime Ribeye</h3>
                        <p className="text-[#AAAAAA] text-xs max-w-[320px] leading-[1.6] font-medium mb-6">
                           Smoked over hickory and finished with a dry saffron rub that caramelizes into a deep, savory...
                        </p>
                     </div>
                     <div className="flex items-center text-[#E0A87A] text-[9px] tracking-[0.15em] font-bold uppercase cursor-pointer hover:text-[#F07113] transition-colors pointer-events-auto w-fit">
                        EXPLORE DISH <MoveRight size={14} className="ml-2 group-hover:translate-x-2 transition-transform" />
                     </div>
                  </div>
               </motion.div>
               
               {/* Item 2 - Vertical Card (Liquid Saffron) */}
               <motion.div variants={fadeUp} className="md:col-span-4 relative rounded-xl overflow-hidden group aspect-[10/16] md:aspect-auto md:h-full bg-[#1A1A1A]">
                  <motion.img whileHover={{ scale: 1.05 }} transition={{ duration: 0.8 }} src={image4} alt="Liquid Saffron" className="absolute inset-0 w-full h-full object-cover opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent pointer-events-none"></div>
                  <div className="absolute inset-0 p-8 flex flex-col justify-end pointer-events-none">
                     <h3 className="text-xl md:text-2xl text-white font-bold mb-2 tracking-tight">Liquid Saffron</h3>
                     <p className="text-[#AAAAAA] text-xs leading-[1.5] max-w-[200px] font-medium mb-6">
                        Botanic gin, spiced honey, and gold leaf.
                     </p>
                     <div className="text-[#F07113]">
                        <Wine size={20} strokeWidth={2} />
                     </div>
                  </div>
               </motion.div>

               {/* Item 3 - Square Card (Midnight Cocoa) */}
               <motion.div variants={fadeUp} className="md:col-span-4 relative rounded-xl overflow-hidden group aspect-square bg-[#1A1A1A]">
                  <motion.img whileHover={{ scale: 1.05 }} transition={{ duration: 0.8 }} src={image5} alt="Midnight Cocoa" className="absolute inset-0 w-full h-full object-cover opacity-90" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/50 to-transparent pointer-events-none"></div>
                  <div className="absolute inset-0 p-8 flex flex-col justify-end pointer-events-none">
                     <h3 className="text-xl md:text-2xl text-white font-bold mb-2 tracking-tight">Midnight Cocoa</h3>
                     <p className="text-[#AAAAAA] text-xs leading-[1.5] font-medium mb-6">
                        70% dark chocolate, orange essence.
                     </p>
                     <div className="text-[#F07113]">
                        <Citrus size={20} strokeWidth={2} className="transform rotate-45" />
                     </div>
                  </div>
               </motion.div>

               {/* Item 4 - Wide Card (The Vault) */}
               <motion.div variants={fadeUp} className="md:col-span-8 relative rounded-xl overflow-hidden group aspect-[16/8] bg-[#1A1A1A]">
                  <motion.img whileHover={{ scale: 1.05 }} transition={{ duration: 0.8 }} src={image6} alt="The Vault - Private Dining" className="absolute inset-0 w-full h-full object-cover opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent pointer-events-none"></div>
                  <div className="absolute inset-0 p-8 flex items-end justify-between pointer-events-none">
                     <div>
                        <h3 className="text-2xl md:text-3xl text-white font-bold mb-2 tracking-tight">The Vault</h3>
                        <p className="text-[#AAAAAA] text-xs font-medium leading-[1.5]">
                           Private experiences for up to 12 guests.
                        </p>
                     </div>
                     <div className="w-12 h-12 rounded-full bg-[#F0BB9E] flex items-center justify-center shadow-lg pointer-events-auto cursor-pointer hover:bg-[#F4C5AA] transition-colors">
                         <Droplet size={18} className="text-[#1A1A1A] fill-current" />
                     </div>
                  </div>
               </motion.div>

            </motion.div>
         </div>
      </section>

      {/* 4. Secure Your Table */}
      <section id="contact" className="w-full py-32 md:py-48 px-6 flex flex-col items-center justify-center bg-[#151312] relative overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#3A2210]/20 via-[#151312] to-[#151312]"></div>
         <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center w-full z-10"
         >
            <motion.h2 variants={fadeUp} className="text-5xl md:text-[4.5rem] text-white font-bold mb-6 tracking-tight leading-[1]">Secure Your<br/>Table</motion.h2>
            <motion.p variants={fadeUp} className="text-[#AAAAAA] text-sm leading-[1.6] font-medium mb-12 max-w-sm mx-auto">
               Experience the intersection of tradition and kinetic design.<br className="hidden md:block"/>Reservations highly recommended for evening service.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-col md:flex-row items-stretch justify-center w-full max-w-3xl mx-auto md:bg-[#1A1A1C] md:border md:border-[#333333] md:rounded-lg md:p-1.5 shadow-2xl">
               
               <div className="w-full md:w-auto flex-1 flex items-center bg-[#1A1A1C] md:bg-transparent border border-[#333333] md:border-none rounded-lg md:rounded-none px-6 py-5 mb-4 md:mb-0">
                  <Calendar size={18} className="text-[#E0A87A] mr-4 flex-shrink-0" />
                  <select className="bg-transparent text-white text-[10px] tracking-[0.1em] font-bold outline-none w-full appearance-none cursor-pointer">
                     <option value="today" className="bg-[#1A1A1C]">DATE & TIME</option>
                     <option value="tmrw" className="bg-[#1A1A1C]">TOMORROW, 19:00</option>
                  </select>
               </div>
               
               <div className="hidden md:block w-px bg-[#333333] my-3 mx-1"></div>
               
               <div className="w-full md:w-auto flex-1 flex items-center bg-[#1A1A1C] md:bg-transparent border border-[#333333] md:border-none rounded-lg md:rounded-none px-6 py-5 mb-4 md:mb-0">
                  <Users size={18} className="text-[#E0A87A] mr-4 flex-shrink-0" />
                  <select className="bg-transparent text-white text-[10px] tracking-[0.1em] font-bold outline-none w-full appearance-none cursor-pointer">
                     <option value="2" className="bg-[#1A1A1C]">GUESTS</option>
                     <option value="4" className="bg-[#1A1A1C]">4 GUESTS</option>
                  </select>
               </div>
               
               <button className="w-full md:w-auto bg-[#F07113] hover:bg-[#D5610F] text-black text-[10px] font-bold px-10 py-5 rounded-md tracking-[0.15em] transition-colors">
                  FIND TABLE
               </button>
            </motion.div>
         </motion.div>
      </section>

      </div>
    </ClickSpark>
  );
};

export default Home;
