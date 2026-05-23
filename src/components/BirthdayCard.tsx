import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Music, Sparkles, Mail, Heart } from "lucide-react";

const PLAYLIST_URL = "https://music.youtube.com/playlist?list=PLFBCLKz1E4CT4pbIGCioF93fj2GwoCwLk&si=EoaByMsNnVYWjBfP";

export default function BirthdayCard() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = useCallback(() => {
    if (isOpen) return;
    setIsOpen(true);

    // Launch confetti
    const duration = 3000;
    const end = Date.now() + duration;

    const colors = ["#ff69b4", "#ffc0cb", "#ff1493", "#ffb6c1", "#db2777", "#fbbf24"];

    const frame = () => {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 1, y: 0.8 },
        colors,
        disableForReducedMotion: true,
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 0, y: 0.8 },
        colors,
        disableForReducedMotion: true,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  }, [isOpen]);

  return (
    <motion.div
      className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-12"
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      {/* Top sparkle decorations */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 1 }}
            exit={{ opacity: 0, y: -20 }}
            className="mb-6 flex items-center gap-3"
          >
            <Sparkles className="h-6 w-6 text-pink-400" />
            <h1
              className="text-4xl font-bold tracking-wide text-pink-600 md:text-5xl"
              style={{ fontFamily: "var(--font-cute)" }}
            >
              For Rosa Omotayo
            </h1>
            <Sparkles className="h-6 w-6 text-pink-400" />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 1 }}
            exit={{ opacity: 0, y: -20 }}
            className="mb-6 flex items-center gap-3"
          >
            <Mail className="h-6 w-6 text-pink-400" />
            <h1
              className="text-4xl font-bold tracking-wide text-pink-600 md:text-5xl"
              style={{ fontFamily: "var(--font-cute)" }}
            >
              Happy Birthday!
            </h1>
            <Mail className="h-6 w-6 text-pink-400" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Card container */}
      <div className="relative" style={{ perspective: 1200 }}>
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.button
              key="closed"
              onClick={handleOpen}
              initial={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, rotateY: -90 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="group relative cursor-pointer"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Mail envelope */}
              <div className="relative flex h-80 w-72 flex-col items-center justify-center rounded-3xl border border-pink-200 bg-gradient-to-br from-pink-50 via-rose-50 to-white shadow-2xl shadow-pink-200/40 md:h-96 md:w-80">
                <div className="absolute inset-x-0 top-6 h-28 overflow-hidden rounded-t-3xl">
                  <div className="absolute left-1/2 top-0 h-40 w-[170%] -translate-x-1/2 -translate-y-2/3 rotate-45 rounded-full bg-pink-200/85 shadow-pink-200/40" />
                </div>

                <div className="absolute top-4 right-4 rounded-xl border border-pink-300 bg-pink-100 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-pink-700 shadow-sm">
                  Special
                </div>

                <div className="relative z-10 flex flex-col items-center gap-1 px-6 text-center">
                  <p className="text-xs uppercase tracking-[0.3em] text-pink-500">Special delivery</p>
                  <p className="text-2xl font-semibold text-pink-700 md:text-3xl" style={{ fontFamily: "var(--font-cute)" }}>
                    For Rosa Omotayo
                  </p>
                  <p className="text-sm text-pink-500">A mail card just for you</p>
                </div>

                <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-pink-400 px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-pink-300/40">
                  <Heart className="h-4 w-4" fill="#fff" />
                  Open me
                </div>
              </div>
            </motion.button>
          ) : (
            <motion.div
              key="open"
              initial={{ opacity: 0, scale: 0.9, rotateY: 90 }}
              animate={{ opacity: 1, scale: 1, rotateY: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 1.1 }}
              className="relative flex min-h-[28rem] w-80 flex-col items-center rounded-3xl border border-pink-200 bg-pink-50 p-8 shadow-2xl shadow-pink-200/40 md:w-96"
            >
              <div className="absolute top-5 right-5 rounded-xl border border-pink-200 bg-white/90 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-pink-600 shadow-sm">
                Air Mail
              </div>

              <div className="mb-5 w-full rounded-[30px] border border-pink-100 bg-white px-6 py-5 text-center shadow-sm shadow-pink-100/80">
                <p className="text-[10px] uppercase tracking-[0.32em] text-pink-500">You've got mail</p>
                <p className="mt-2 text-3xl font-semibold text-pink-700" style={{ fontFamily: "var(--font-cute)" }}>
                  Happy Birthday
                </p>
                <p className="text-sm text-pink-500">A letter for Rosa Omotayo</p>
              </div>

              <div className="w-full rounded-3xl bg-white px-6 py-5 text-left text-sm leading-7 text-slate-600 shadow-inner shadow-pink-100/50">
                <p className="mb-3 text-pink-600 font-semibold">Dear Rosa,</p>
                <p>
                  Happy birthday baby. Can’t believe it’s here already. The end of a decade and the start of an age. (peep the Taylor Swift reference okay?)
                </p>
                <p className="mt-3">
                  I don’t know what to say really because it’s like all my words and all my jokes only make sense when I’m with you.
                </p>
                <p className="mt-3">
                  You make me laugh and you keep me sane in a place where we’re pushed to lose our sanity. You make it make sense or something close to it anyways.
                </p>
                <p className="mt-3">
                  I love you so much but you know that already yeah.
                </p>
                <p className="mt-3">
                  The playlist contains a bunch of songs that make me think about you btw. Certain lyrics that just make sense when I think of Omotayo. So listen to it okay? Even though its on YouTube Music.
                </p>
                <p className="mt-3">
                  Have a really good year (with me of course, my rainbow gel pen).
                </p>
                <p className="mt-4 font-semibold text-pink-600">With lots and lots of love,</p>
                <p className="text-pink-500">The love of your life.</p>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.6, type: "spring", stiffness: 200 }}
                className="mt-6"
              >
                <a
                  href={PLAYLIST_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-300/50 transition-all hover:scale-105 hover:shadow-xl hover:shadow-pink-300/60 active:scale-95"
                >
                  <Music className="h-5 w-5" />
                  Open Playlist
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.0 }}
                className="mt-6 flex gap-2"
              >
                {Array.from({ length: 4 }).map((_, i) => (
                  <motion.span
                    key={i}
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 1.2, delay: i * 0.2, repeat: Infinity }}
                  >
                    <Heart
                      className="h-5 w-5 text-pink-400"
                      fill={i % 2 === 0 ? "#f472b6" : "none"}
                    />
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom message when open */}
      <AnimatePresence>
        {isOpen && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.2 }}
            className="mt-8 text-center text-sm text-pink-500/70"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Made with love for your special day
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
