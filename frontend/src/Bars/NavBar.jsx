import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

const NavLink = ({ to, children, isActive }) => (
  <Link to={to} className={`hover:text-white transition-colors relative py-1 ${isActive ? 'text-white' : ''}`}>
    {children}
    {isActive && (
      <motion.div
        layoutId="active-nav-indicator"
        className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#F07113]"
        initial={false}
        transition={{ type: "spring", stiffness: 400, damping: 35 }}
      />
    )}
  </Link>
);

const NavBar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = `fixed top-0 w-full z-50 flex items-center justify-between px-6 md:px-12 py-5 transition-all duration-300 ${
    scrolled ? 'bg-[#111111]/90 backdrop-blur-md shadow-lg border-b border-white/5' : 'bg-transparent'
  }`;

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={navClasses}>
      <Link to="/" onClick={() => setMobileMenuOpen(false)} className="font-bold text-lg md:text-xl tracking-widest cursor-pointer z-50">
        <span className="text-[#F07113]">Midnight Saffron</span>
      </Link>
      
      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center space-x-10 text-[10px] font-bold tracking-[0.15em] text-[#AAAAAA] uppercase">
        <NavLink to="/" isActive={isActive('/')}>HOME</NavLink>
        <NavLink to="/experience" isActive={isActive('/experience')}>EXPERIENCE</NavLink>
        <NavLink to="/menu" isActive={isActive('/menu')}>MENU</NavLink>
        <NavLink to="/private-dining" isActive={isActive('/private-dining')}>PRIVATE DINING</NavLink>
        <NavLink to="/contact" isActive={isActive('/contact')}>CONTACT</NavLink>
      </div>
      
      {/* Mobile Toggle & CTA */}
      <div className="flex items-center space-x-4 z-50">
         <button className="hidden sm:block bg-[#FF8833] hover:bg-[#E07A2E] text-black text-[11px] font-bold px-6 py-3 rounded-md tracking-wide transition-colors shadow-lg">
           Book a Table
         </button>
         <button 
           className="lg:hidden text-white hover:text-[#F07113] transition-colors p-2"
           onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
           aria-label="Toggle mobile menu"
         >
           {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
         </button>
      </div>

      {/* Mobile Full-Screen Menu Overlay */}
      <AnimatePresence>
         {mobileMenuOpen && (
            <motion.div 
               initial={{ opacity: 0, y: -20 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -20 }}
               transition={{ duration: 0.3, ease: 'easeInOut' }}
               className="absolute top-0 left-0 w-full h-screen bg-[#111111]/95 backdrop-blur-2xl flex flex-col items-center justify-center space-y-8 z-40 border-b border-white/5"
            >
               <Link to="/" onClick={() => setMobileMenuOpen(false)} className={`text-xl font-bold tracking-[0.2em] uppercase transition-colors ${isActive('/') ? 'text-[#F07113]' : 'text-white hover:text-[#F07113]'}`}>HOME</Link>
               <Link to="/experience" onClick={() => setMobileMenuOpen(false)} className={`text-xl font-bold tracking-[0.2em] uppercase transition-colors ${isActive('/experience') ? 'text-[#F07113]' : 'text-white hover:text-[#F07113]'}`}>EXPERIENCE</Link>
               <Link to="/menu" onClick={() => setMobileMenuOpen(false)} className={`text-xl font-bold tracking-[0.2em] uppercase transition-colors ${isActive('/menu') ? 'text-[#F07113]' : 'text-white hover:text-[#F07113]'}`}>MENU</Link>
               <Link to="/private-dining" onClick={() => setMobileMenuOpen(false)} className={`text-xl font-bold tracking-[0.2em] uppercase transition-colors ${isActive('/private-dining') ? 'text-[#F07113]' : 'text-white hover:text-[#F07113]'}`}>PRIVATE DINING</Link>
               <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className={`text-xl font-bold tracking-[0.2em] uppercase transition-colors ${isActive('/contact') ? 'text-[#F07113]' : 'text-white hover:text-[#F07113]'}`}>CONTACT</Link>
               
               <button onClick={() => setMobileMenuOpen(false)} className="mt-8 bg-[#F07113] hover:bg-[#D5610F] text-black text-[12px] font-bold px-10 py-4 rounded-md tracking-[0.1em] uppercase transition-colors shadow-[0_0_15px_rgba(240,113,19,0.3)]">
                 Book a Table
               </button>
            </motion.div>
         )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
