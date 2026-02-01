import { useState, useRef, useEffect } from 'react';
import Hero from './components/Hero';
import { ProfileIntro, CoupleProfile } from './components/Profile';
import EventDetail from './components/EventDetail';
import Location from './components/Location';
import Countdown from './components/Countdown';
import Gallery from './components/Gallery';
import Wishes from './components/Wishes';
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMusic, FaPause } from 'react-icons/fa';

function App() {
  const [showContent, setShowContent] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio('https://cdn.pixabay.com/audio/2022/11/22/audio_febc508520.mp3')); // Wedding Cinematic

  useEffect(() => {
    audioRef.current.loop = true;
    
    // Cleanup
    return () => {
      audioRef.current.pause();
    };
  }, []);

  const handleOpen = () => {
    setShowContent(true);
    audioRef.current.play().catch(error => console.log("Audio playback failed:", error));
    setIsPlaying(true);
  };

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen bg-cream font-sans text-gray-800 overflow-x-hidden relative">
      <AnimatePresence>
        {!showContent ? (
          <Hero key="hero" onOpen={handleOpen} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full"
          >
            <ProfileIntro />
            <CoupleProfile />
            <EventDetail />
            <Countdown targetDate="2026-02-08T10:00:00" />
            <Location />
            <Gallery />
            <Wishes />
            <Footer />

            {/* Floating Music Control */}
            <div className="fixed bottom-3 right-3 z-50">
              <button
                onClick={toggleMusic}
                className="bg-gold text-white p-3 flex justify-center items-center rounded-full shadow-lg hover:bg-opacity-80 transition-all animate-spin-slow"
                style={{ animationDuration: '3s' }}
              >
                {isPlaying ? <FaMusic className="animate-pulse" /> : <FaPause />}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Background Ornament */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/arabesque.png")' }}></div>
    </div>
  );
}

export default App;
