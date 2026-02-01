import { motion } from 'framer-motion';
import { FaEnvelopeOpenText } from 'react-icons/fa';
import heroImg from '../assets/hero.webp';
import { useState, useEffect } from 'react';

const Hero = ({ onOpen }) => {
  const [guestName, setGuestName] = useState('Tamu Undangan');

  useEffect(() => {
    // Get 'to' parameter from URL
    const urlParams = new URLSearchParams(window.location.search);
    const nameParam = urlParams.get('to');
    if (nameParam) {
      setGuestName(decodeURIComponent(nameParam));
    }
  }, []);

  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center text-center p-6 overflow-hidden bg-cream">
      
      {/* Background Image with 70% Opacity */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: `url(${heroImg})` }}
      ></div>

      {/* Black Overlay with 20% Opacity */}
      <div className="absolute inset-0 z-0 bg-black/30"></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 flex flex-col items-center gap-6"
      >
        <h3 className="text-xl md:text-2xl tracking-[0.2em] text-white/90 drop-shadow-md uppercase font-semibold">The Wedding of</h3>
        
        <div className="font-script text-6xl md:text-8xl lg:text-9xl text-white drop-shadow-lg p-2">
          <motion.span
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Elcky
          </motion.span>
          <span className="text-gold mx-2 md:mx-4 drop-shadow-md">&</span>
          <motion.span
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Randi
          </motion.span>
        </div>

        <p className="text-lg md:text-xl text-white/90 mt-4 italic drop-shadow-md font-medium">
          Minggu, 08 Februari 2026
        </p>

        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-8 p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-2xl max-w-sm w-full"
        >
            <p className="text-sm text-white/80 mb-3 font-medium">Kepada Yth. Bapak/Ibu/Saudara/i</p>
            <h4 className="font-script text-3xl md:text-4xl text-gold mb-4 drop-shadow-lg px-2">{guestName}</h4>
            <button 
                onClick={onOpen}
                className="group flex items-center justify-center gap-2 mx-auto px-6 py-3 bg-lavender text-white rounded-full hover:bg-opacity-90 transition-all shadow-md hover:shadow-xl transform hover:-translate-y-1"
            >
                <FaEnvelopeOpenText />
                <span>Buka Undangan</span>
            </button>
        </motion.div>
      </motion.div>

      {/* Decorative floral elements (CSS or SVGs could go here) */}
    </div>
  );
};

export default Hero;
