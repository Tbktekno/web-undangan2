import { motion } from 'framer-motion';
import { FaMapMarkedAlt } from 'react-icons/fa';

const Location = () => {
    // Coordinates usually need adjustment. I'll point to defaults or generic Konawe Selatan for now if exact village not found, 
    // but the text is minimal.
    const mapUrl = "https://www.google.com/maps/search/?api=1&query=Dusun+02+Desa+Koroouna+Kec+Sabulakoa+Kab+Konawe+Selatan";

    return (
        <section className="py-20 px-6 max-w-5xl mx-auto text-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
            >
                <h2 className="font-serif text-4xl text-lavender mb-6">Lokasi Acara</h2>
                <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                    Kami menantikan kehadiran Anda di acara kami yang bertempat di:
                    <br/><br/>
                    <strong className="text-gray-800">Kediaman Mempelai Wanita</strong><br/>
                    Dusun 02, Desa Koroouna, Kec. Sabulakoa, <br/>
                    Kab. Konawe Selatan
                </p>

                <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 mb-8 h-80 relative">
                     {/* Placeholder Map - In real app use Google Maps Embed API Key */}
                     <iframe 
                        width="100%" 
                        height="100%" 
                        frameBorder="0" 
                        scrolling="no" 
                        marginHeight="0" 
                        marginWidth="0" 
                        src="https://maps.google.com/maps?q=Kecamatan+Sabulakoa+Konawe+Selatan&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        className="filter grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                    ></iframe>
                </div>

                <a 
                    href={mapUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3 bg-gold text-white rounded-full hover:bg-opacity-90 transition-transform hover:scale-105 shadow-md"
                >
                    <FaMapMarkedAlt />
                    Buka Google Maps
                </a>
            </motion.div>
        </section>
    );
};

export default Location;
