import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import NavBar from './Bars/NavBar'
import Footer from './Bars/Footer'
import Home from './Pages/Home'
import Experience from './Pages/Experience'
import Menu from './Pages/Menu'
import Contact from './Pages/Contact'
import PrivateDinning from './Pages/PrivateDinning'

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(12px)', y: 20 }}
      animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
      exit={{ opacity: 0, filter: 'blur(12px)', y: -20 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

const AppContent = () => {
  const location = useLocation();
  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen bg-[#111111] text-[#DDDDDD] overflow-x-hidden selection:bg-[#F07113] selection:text-black font-sans flex flex-col">
        <NavBar />
        <main className="flex-1 w-full relative">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<PageTransition><Home /></PageTransition>} />
              <Route path="/experience" element={<PageTransition><Experience /></PageTransition>} />
              <Route path="/menu" element={<PageTransition><Menu /></PageTransition>} />
              <Route path="/private-dining" element={<PageTransition><PrivateDinning /></PageTransition>} />
              <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
