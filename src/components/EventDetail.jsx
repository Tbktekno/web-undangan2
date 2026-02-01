import { motion } from 'framer-motion';
import { FaRing, FaGlassCheers } from 'react-icons/fa';

const EventDetail = () => {
    return (
        <section className="py-20 bg-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#C9A24D 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="font-serif text-4xl text-lavender mb-12"
                >
                    Rangkaian Acara
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Akad */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ delay: 0.2 }}
                        className="bg-cream/50 p-8 rounded-2xl border border-gold/20 shadow-sm hover:shadow-md transition-shadow"
                    >
                        <FaRing className="text-4xl text-gold mx-auto mb-4" />
                        <h3 className="font-serif text-2xl text-gray-800 mb-2">Akad Nikah</h3>
                        <p className="text-lavender font-semibold mb-4">Minggu, 08 Februari 2026</p>
                        <p className="text-gray-600">Pukul 10.00 WITA - Selesai</p>
                        <div className="mt-6 text-sm text-gray-500">
                            Bertempat di Kediaman Mempelai Wanita<br/>
                            Dusun 02, Desa Koroouna
                        </div>
                    </motion.div>

                    {/* Resepsi */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ delay: 0.4 }}
                        className="bg-cream/50 p-8 rounded-2xl border border-gold/20 shadow-sm hover:shadow-md transition-shadow"
                    >
                        <FaGlassCheers className="text-4xl text-gold mx-auto mb-4" />
                        <h3 className="font-serif text-2xl text-gray-800 mb-2">Resepsi Pernikahan</h3>
                        <p className="text-lavender font-semibold mb-4">Minggu, 08 Februari 2026</p>
                        <p className="text-gray-600">Pukul 16.00 WITA - Selesai</p>
                        <div className="mt-6 text-sm text-gray-500">
                            Bertempat di Kediaman Mempelai Wanita<br/>
                            Dusun 02, Desa Koroouna
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default EventDetail;
