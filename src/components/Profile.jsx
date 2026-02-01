import { motion } from 'framer-motion';
import bismillahImg from '../assets/bismillah2.png';
import backgroundImg from '../assets/background.jpg';
import background2 from '../assets/background2.jpg';

const ProfileIntro = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center py-10 px-4 mx-auto relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${background2})` }}
      ></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-cream/60"></div>
      
      <div className="max-w-6xl w-full relative z-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <img src={bismillahImg} alt="Bismillah" className="h-20 md:h-24 mx-auto mb-6 md:mb-8 opacity-70" style={{ filter: 'brightness(0) sepia(1) hue-rotate(15deg) saturate(3)' }} /> 
        <h2 className="font-serif text-3xl md:text-4xl text-gold mb-4 md:mb-6">Assalamu'alaikum Wr. Wb.</h2>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
          Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud mengundang Bapak/Ibu/Saudara/i pada acara pernikahan kami:
        </p>
      </motion.div>
      </div>
    </section>
  );
};

const CoupleProfile = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center py-10 px-4 mx-auto overflow-hidden relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      ></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-cream/60"></div>
      
      <div className="max-w-6xl w-full relative z-10">
      <div className="flex flex-col md:flex-row justify-center items-center w-full gap-8 md:gap-20 z-10">
        
        {/* Bride - Left on Mobile */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="flex flex-row md:flex-col items-center gap-4 md:gap-6 w-full md:w-1/3"
        >
          {/* Photo Frame */}
          <div className="w-32 h-52 md:w-48 md:h-60 shrink-0 rounded-[100px] overflow-hidden border-2 md:border-4 border-lavender/30 shadow-lg relative group">
             <div className="absolute inset-0 bg-lavender/10 group-hover:bg-transparent transition-all duration-500"></div>
             <img src="https://images.unsplash.com/photo-1546804792-503b2f2dc8d6?q=80&w=400&auto=format&fit=crop" alt="Elcky" className="w-full h-full object-cover" />
          </div>
          
          {/* Text Info - Right of photo on mobile */}
          <div className="text-left md:text-center flex-1">
            <h3 className="font-script text-3xl md:text-4xl text-gray-800 mb-1">Elcky</h3>
            <p className="text-xs md:text-sm text-gold font-medium mb-1 uppercase tracking-wide">Putri Pertama dari</p>
            <p className="text-xs md:text-sm text-gray-500">Bpk. Damir, S.IP &<br/>Ibu Suarsi</p>
          </div>
        </motion.div>

        {/* Ampersand - Only visible on Desktop */}
        <div className="block font-script text-6xl text-gold opacity-50">&</div>

        {/* Groom - Right on Mobile (Staggered) */}
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }} 
          transition={{ duration: 0.8 }}
          className="flex flex-row-reverse md:flex-col items-center gap-4 md:gap-6 w-full md:w-1/3"
        >
          {/* Photo Frame */}
          <div className="w-32 h-52 md:w-48 md:h-60 shrink-0 rounded-[100px] overflow-hidden border-2 md:border-4 border-lavender/30 shadow-lg relative group">
             <div className="absolute inset-0 bg-lavender/10 group-hover:bg-transparent transition-all duration-500"></div>
             <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop" alt="Randi" className="w-full h-full object-cover" />
          </div>

          {/* Text Info - Left of photo on mobile */}
          <div className="text-right md:text-center flex-1">
            <h3 className="font-script text-3xl md:text-4xl text-gray-800 mb-1">Randi</h3>
            <p className="text-xs md:text-sm text-gold font-medium mb-1 uppercase tracking-wide">Putra Kedua dari</p>
            <p className="text-xs md:text-sm text-gray-500">Bpk. Udin. S &<br/>Ibu Ningsi</p>
          </div>
        </motion.div>

      </div>
      </div>
    </section>
  );
};

export { ProfileIntro, CoupleProfile };
