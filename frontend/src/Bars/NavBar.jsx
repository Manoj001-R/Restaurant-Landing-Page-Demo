import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';

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
      <Link to="/" className="font-bold text-lg md:text-xl tracking-widest cursor-pointer">
        <span className="text-[#F07113]">Midnight Saffron</span>
      </Link>
      <div className="hidden lg:flex items-center space-x-10 text-[10px] font-bold tracking-[0.15em] text-[#AAAAAA] uppercase">
        <NavLink to="/" isActive={isActive('/')}>HOME</NavLink>
        <NavLink to="/experience" isActive={isActive('/experience')}>EXPERIENCE</NavLink>
        <NavLink to="/menu" isActive={isActive('/menu')}>MENU</NavLink>
        <NavLink to="/private-dining" isActive={isActive('/private-dining')}>PRIVATE DINING</NavLink>
        <NavLink to="/contact" isActive={isActive('/contact')}>CONTACT</NavLink>
      </div>
      <button className="bg-[#FF8833] hover:bg-[#E07A2E] text-black text-[11px] font-bold px-6 py-3 rounded-md tracking-wide transition-colors">
        Book a Table
      </button>
    </nav>
  );
};

export default NavBar;
