import { motion } from 'framer-motion';
import { FaHeart, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="py-20 bg-zinc-900 text-white text-center relative overflow-hidden">
             {/* Decorative Top Border */}
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-50"></div>

            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                className="relative z-10 max-w-4xl mx-auto px-6"
            >
                <h2 className="font-script text-6xl md:text-7xl text-gold mb-8 drop-shadow-md">
                    Elcky & Randi
                </h2>
                <p className="font-serif text-lg md:text-xl text-gray-300 mb-10 italic max-w-2xl mx-auto leading-relaxed">
                    "Terima kasih atas doa dan restu yang telah Bapak/Ibu/Saudara/i berikan dalam mengiringi langkah kami menuju gerbang kehidupan baru."
                </p>
                
                <div className="w-24 h-0.5 bg-gold/30 mx-auto mb-10 rounded-full"></div>

                <div className="text-sm font-sans text-gray-500 tracking-wider">
                    <p className="mb-2 flex items-center justify-center gap-2">
                        Created By 
                    </p>
                    <p className="flex items-center justify-center gap-2">
                        <span className="text-gold font-semibold uppercase text-xs">Tino Perdiyansya</span>
                        <a 
                            href="https://instagram.com/tinoperdiyansya" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gold hover:text-white transition-colors"
                            aria-label="Instagram Tino Perdiyansya"
                        >
                            <FaInstagram className="w-4 h-4" />
                        </a>
                    </p>
                </div>
            </motion.div>

            {/* Background Pattern Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>
            
            {/* Bottom Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-20 bg-gold/10 blur-[100px] pointer-events-none"></div>
        </footer>
    );
};

export default Footer;
