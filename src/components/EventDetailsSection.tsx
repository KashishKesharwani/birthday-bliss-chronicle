import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Calendar, Navigation, Phone, Mail } from 'lucide-react';

interface EventDetailsProps {
  date: string;
  day: string;
  time: string;
  venue: string;
  address: string;
  familyName: string;
  phone?: string;
  email?: string;
  mapsLink?: string;
}

const EventDetailsSection: React.FC<EventDetailsProps> = ({
  date, day, time, venue, address, familyName, phone, email, mapsLink
}) => {
  return (
    <section className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-b from-secondary/5 via-background to-primary/5">
      {/* Background animals */}
      <motion.span className="absolute top-10 right-8 text-4xl opacity-15" animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }}>🐘</motion.span>
      <motion.span className="absolute bottom-20 left-6 text-4xl opacity-15" animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity }}>🐱</motion.span>

      <motion.h2
        className="font-cursive text-5xl md:text-7xl text-center barbie-text mb-4"
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
        We can't wait to see you there! 🎀
      </motion.p>

      <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-8">
        {/* Date */}
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
          <p className="text-3xl font-dancing text-primary">{date}</p>
          <p className="text-muted-foreground mt-1">{day}</p>
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
            className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-4"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Clock className="w-8 h-8 text-accent-foreground" />
          </motion.div>
          <h3 className="text-2xl font-semibold text-foreground mb-2">Time</h3>
          <p className="text-3xl font-dancing text-primary">{time}</p>
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
          <p className="text-xl font-dancing text-primary">{venue}</p>
          <p className="text-muted-foreground mt-2 max-w-md mx-auto">{address}</p>
          <motion.a
            href={mapsLink || 'https://maps.google.com'}
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

      {/* Contact Section */}
      <motion.div
        className="max-w-2xl mx-auto px-6 mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-8 rounded-3xl border border-border text-center">
          <motion.div
            className="flex items-center justify-center gap-2 mb-2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="text-2xl"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >✨</motion.span>
            <span className="font-dancing text-sm md:text-base text-primary tracking-widest uppercase">Get in Touch</span>
            <motion.span
              className="text-2xl"
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >✨</motion.span>
          </motion.div>

          <motion.h3
            className="font-cursive text-3xl md:text-4xl barbie-text mb-1"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Contact Us
          </motion.h3>

          <motion.div
            className="mx-auto w-20 h-1 rounded-full bg-gradient-to-r from-primary via-secondary to-accent mb-4"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          />

          <p className="font-dancing text-2xl text-primary mb-4">{familyName}</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {phone && (
              <motion.a
                href={`tel:${phone}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-card border border-border rounded-full text-sm text-foreground hover:border-primary transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <Phone className="w-4 h-4 text-primary" />
                {phone}
              </motion.a>
            )}
            {email && (
              <motion.a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-card border border-border rounded-full text-sm text-foreground hover:border-primary transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <Mail className="w-4 h-4 text-primary" />
                {email}
              </motion.a>
            )}
          </div>

          <p className="text-muted-foreground text-sm mt-4">
            With love from Papa, Mama & our little princess 👑
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default EventDetailsSection;
