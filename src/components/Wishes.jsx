import { motion } from 'framer-motion';

const Wishes = () => {
    return (
        <section className="py-20 bg-cream/30 text-center px-6">
             <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                className="max-w-3xl mx-auto"
            >
                <h2 className="font-serif text-3xl text-gold mb-8">Doa & Harapan</h2>
                
                <blockquote className="font-serif text-xl md:text-2xl text-gray-700 italic leading-relaxed mb-8">
                    "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir."
                </blockquote>
                
                <p className="text-gray-500 font-medium tracking-wide uppdercase">— QS. Ar-Rum: 21 —</p>
            </motion.div>
        </section>
    );
};

export default Wishes;
