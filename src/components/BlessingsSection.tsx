import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

interface Blessing {
  id: number;
  name: string;
  relationship: string;
  message: string;
  emoji: string;
}

const EMOJIS = ['💖', '🌟', '🎀', '👑', '🦋', '🌸', '💝', '✨'];

const BlessingsSection: React.FC = () => {
  const [blessings, setBlessings] = useState<Blessing[]>([
    { id: 1, name: 'Dadi Ma', relationship: 'Grandmother', message: 'Meri pyaari gudiya ko birthday ki bohot saari dher saari shubhkamnayein! Bhagwan tumhe hamesha khush rakhe. 🥰', emoji: '💖' },
    { id: 2, name: 'Chachu', relationship: 'Uncle', message: 'Happy Birthday little princess! May you always shine bright like a star! 🌟', emoji: '🌟' },
  ]);

  const [name, setName] = useState('');
  const [relationship, setRelationship] = useState('');
  const [message, setMessage] = useState('');
  const [showForm, setShowForm] = useState(false);

  const addBlessing = () => {
    if (name.trim() && message.trim()) {
      const newBlessing: Blessing = {
        id: Date.now(),
        name: name.trim(),
        relationship: relationship.trim() || 'Guest',
        message: message.trim(),
        emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
      };
      setBlessings((prev) => [newBlessing, ...prev]);
      setName('');
      setRelationship('');
      setMessage('');
      setShowForm(false);
    }
  };

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-accent/5 via-background to-primary/5">
      {/* Background */}
      <motion.span className="absolute top-8 left-6 text-4xl opacity-15" animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }}>🐘</motion.span>
      <motion.span className="absolute bottom-12 right-8 text-4xl opacity-15" animate={{ y: [0, -8, 0] }} transition={{ duration: 3.5, repeat: Infinity }}>🐄</motion.span>

      <motion.h2
        className="font-cursive text-5xl md:text-7xl text-center barbie-text mb-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Blessings Wall
      </motion.h2>
      <motion.p
        className="text-center text-muted-foreground font-dancing text-xl mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        Share your love & blessings! 💝
      </motion.p>

      <div className="max-w-4xl mx-auto px-6">
        {/* Add blessing button */}
        {!showForm && (
          <motion.div className="text-center mb-10" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <motion.button
              onClick={() => setShowForm(true)}
              className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-full text-lg font-semibold shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ✍️ Write a Blessing
            </motion.button>
          </motion.div>
        )}

        {/* Blessing form */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              className="bg-card p-6 md:p-8 rounded-3xl shadow-xl border border-border mb-10 max-w-lg mx-auto"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <h3 className="text-xl font-dancing text-primary mb-4 text-center">Send Your Blessing 🎀</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Your Name</label>
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name..."
                    className="rounded-xl border-primary/30"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Relationship</label>
                  <Input
                    value={relationship}
                    onChange={(e) => setRelationship(e.target.value)}
                    placeholder="e.g. Uncle, Aunt, Friend..."
                    className="rounded-xl border-primary/30"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Your Blessing ✨</label>
                  <Textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your heartfelt blessing..."
                    className="rounded-xl border-primary/30 min-h-[100px]"
                  />
                </div>
                <div className="flex gap-3">
                  <Button
                    onClick={addBlessing}
                    disabled={!name.trim() || !message.trim()}
                    className="flex-1 rounded-xl bg-gradient-to-r from-primary to-secondary text-primary-foreground"
                  >
                    💖 Send Blessing
                  </Button>
                  <Button
                    onClick={() => setShowForm(false)}
                    variant="outline"
                    className="rounded-xl"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Blessings grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <AnimatePresence>
            {blessings.map((blessing, i) => (
              <motion.div
                key={blessing.id}
                className="bg-card p-6 rounded-2xl shadow-lg border border-border relative overflow-hidden"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -3 }}
              >
                {/* Decorative emoji */}
                <span className="absolute top-3 right-3 text-3xl opacity-20">{blessing.emoji}</span>

                {/* Avatar & info */}
                <div className="flex items-center gap-3 mb-3">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-xl text-primary-foreground font-bold shadow-md"
                    whileHover={{ scale: 1.1 }}
                  >
                    {blessing.name.charAt(0).toUpperCase()}
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-foreground">{blessing.name}</h4>
                    <p className="text-xs text-muted-foreground">{blessing.relationship}</p>
                  </div>
                </div>

                {/* Message */}
                <p className="text-sm text-muted-foreground leading-relaxed italic">
                  "{blessing.message}"
                </p>

                {/* Bottom decoration */}
                <div className="flex gap-1 mt-3 opacity-40">
                  {['💖', '🌟', '✨'].map((e, j) => (
                    <span key={j} className="text-xs">{e}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default BlessingsSection;
