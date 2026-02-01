import { useState, useEffect } from 'react';
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns';
import { motion } from 'framer-motion';

const Countdown = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const target = new Date(targetDate);
            
            if (now >= target) {
                clearInterval(interval);
                return;
            }

            setTimeLeft({
                days: differenceInDays(target, now),
                hours: differenceInHours(target, now) % 24,
                minutes: differenceInMinutes(target, now) % 60,
                seconds: differenceInSeconds(target, now) % 60,
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    const TimeBox = ({ value, label }) => (
        <div className="flex flex-col items-center bg-white/80 p-4 rounded-xl shadow-sm border border-gold/30 min-w-[80px] md:min-w-[100px]">
            <span className="text-3xl md:text-4xl font-serif text-lavender font-bold">
                {String(value).padStart(2, '0')}
            </span>
            <span className="text-xs md:text-sm text-gray-500 uppercase tracking-wider">{label}</span>
        </div>
    );

    return (
        <section className="py-16 bg-lavender/5 text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                className="max-w-4xl mx-auto px-6"
            >
                <h2 className="font-serif text-3xl text-gray-800 mb-8">Menuju Hari Bahagia</h2>
                <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                    <TimeBox value={timeLeft.days} label="Hari" />
                    <TimeBox value={timeLeft.hours} label="Jam" />
                    <TimeBox value={timeLeft.minutes} label="Menit" />
                    <TimeBox value={timeLeft.seconds} label="Detik" />
                </div>
                <p className="mt-8 text-gray-600 italic">
                    "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri..."
                </p>
            </motion.div>
        </section>
    );
};

export default Countdown;
