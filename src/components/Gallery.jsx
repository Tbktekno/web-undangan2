import { motion } from 'framer-motion';
import galeri1 from '../assets/galeri1.webp';
import galeri2 from '../assets/galeri2.webp';


const Gallery = () => {
    // Placeholder Images
    const images = [
        galeri1,
        galeri2,
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                 <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="font-serif text-4xl text-center text-lavender mb-12"
                >
                    Our Gallery
                </motion.h2>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {images.map((src, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ delay: idx * 0.1 }}
                            className="rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow bg-gray-100 aspect-[3/4]"
                        >
                            <img src={src} alt={`Gallery ${idx + 1}`} loading="lazy" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
