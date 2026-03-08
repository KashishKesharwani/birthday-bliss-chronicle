import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Calendar, Navigation } from 'lucide-react';

const EventDetailsSection: React.FC = () => {
  return (
    <section className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-b from-secondary/10 via-background to-primary/10">
      <motion.h2
        className="font-cursive text-5xl md:text-7xl text-center rainbow-text mb-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Party Details
      </motion.h2>
      <motion.p
        className="text-center text-muted-foreground font-dancing text-xl mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        We can't wait to see you there! 🎉
      </motion.p>

      <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-8">
        {/* Date & Time */}
        <motion.div
          className="bg-card p-8 rounded-3xl shadow-lg border border-border text-center"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
        >
          <motion.div
            className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Calendar className="w-8 h-8 text-primary-foreground" />
          </motion.div>
          <h3 className="text-2xl font-semibold text-foreground mb-2">Date</h3>
          <p className="text-3xl font-dancing text-primary">March 15, 2026</p>
          <p className="text-muted-foreground mt-1">Saturday</p>
        </motion.div>

        {/* Time */}
        <motion.div
          className="bg-card p-8 rounded-3xl shadow-lg border border-border text-center"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
        >
          <motion.div
            className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-accent to-gold flex items-center justify-center mb-4"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Clock className="w-8 h-8 text-accent-foreground" />
          </motion.div>
          <h3 className="text-2xl font-semibold text-foreground mb-2">Time</h3>
          <p className="text-3xl font-dancing text-primary">4:00 PM - 8:00 PM</p>
          <p className="text-muted-foreground mt-1">Cake cutting at 5 PM 🎂</p>
        </motion.div>

        {/* Venue */}
        <motion.div
          className="bg-card p-8 rounded-3xl shadow-lg border border-border text-center md:col-span-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
        >
          <motion.div
            className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center mb-4"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <MapPin className="w-8 h-8 text-primary-foreground" />
          </motion.div>
          <h3 className="text-2xl font-semibold text-foreground mb-2">Venue</h3>
          <p className="text-xl font-dancing text-primary">Rainbow Party Hall</p>
          <p className="text-muted-foreground mt-2 max-w-md mx-auto">
            123 Celebration Street, Happiness Nagar, Joy City - 400001
          </p>
          <motion.a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-full text-sm font-semibold hover:shadow-lg transition-shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Navigation className="w-4 h-4" />
            Get Directions
          </motion.a>
        </motion.div>
      </div>

      {/* Family Address */}
      <motion.div
        className="max-w-2xl mx-auto px-6 mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-8 rounded-3xl border border-border text-center">
          <h3 className="text-xl font-semibold text-foreground mb-2">👨‍👩‍👧 From Our Family</h3>
          <p className="font-dancing text-2xl text-primary mb-2">The Sharma Family</p>
          <p className="text-muted-foreground text-sm">
            With love from Papa, Mama & Baby Star ⭐
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default EventDetailsSection;
