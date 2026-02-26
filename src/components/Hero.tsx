"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, CheckCircle2, Star, CalendarCheck } from "lucide-react";

/* ─── Shared animation variants ──────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay },
  }),
};

const trustItems = [
  "מאות משפחות שינו את חייהן",
  "ייעוץ ראשון ללא עלות",
  "תוצאות מוכחות ומדידות",
];

/* ─── Component ──────────────────────────────────────────────────────── */
export default function Hero() {
  return (
    <section className="relative min-h-screen bg-navy-deep overflow-hidden flex flex-col justify-center">

      {/* ══ Background decoration ══ */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-64 -right-64 w-[680px] h-[680px] rounded-full bg-navy-mid opacity-60" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-navy-mid opacity-45" />
        {/* vertical gold shimmer lines */}
        <div className="absolute top-1/4 left-8 w-px h-52 bg-gradient-to-b from-transparent via-gold to-transparent opacity-20" />
        <div className="absolute top-1/3 left-20 w-px h-28 bg-gradient-to-b from-transparent via-gold to-transparent opacity-12" />
        {/* dot-grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: "radial-gradient(circle, #C9A84C 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
      </div>

      {/* ══ Content wrapper ══ */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        {/*
          Layout logic:
          • Mobile  (flex-col):  text on top  → image below
          • Desktop (md:flex-row, RTL): text div first in DOM = right side,
                                        image div second in DOM = left side
        */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 lg:gap-24">

          {/* ══ TEXT COLUMN ══ */}
          <div className="flex-1 text-right w-full">

            {/* Credential badge */}
            <motion.div
              variants={fadeUp} custom={0}
              initial="hidden" animate="visible"
              className="inline-flex items-center gap-2 bg-navy-mid border border-gold/30 rounded-full px-4 py-2 mb-7"
            >
              <Star className="w-4 h-4 text-gold fill-gold" />
              <span className="text-gold text-sm font-semibold tracking-wide">
                יועצת פיננסית משפחתית מוסמכת
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              variants={fadeUp} custom={0.1}
              initial="hidden" animate="visible"
              className="font-sans text-4xl sm:text-5xl lg:text-6xl xl:text-[4rem] font-extrabold text-white leading-[1.2] mb-6"
            >
              הגיע הזמן להפסיק לשרוד,{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-gold">ולהתחיל לחיות.</span>
                {/* animated gold underline */}
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.9, delay: 0.65, ease: "easeOut" }}
                  className="absolute -bottom-1 right-0 left-0 h-[3px] bg-gold/45 rounded-full origin-right"
                />
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp} custom={0.2}
              initial="hidden" animate="visible"
              className="text-base sm:text-lg text-white/65 leading-relaxed mb-9 max-w-lg"
            >
              חני כוכב לב — ייעוץ לכלכלת המשפחה.{" "}
              <strong className="text-white/85 font-semibold">
                תוכנית פעולה מעשית, מותאמת אישית,
              </strong>{" "}
              שתוציא אתכם מהמינוס לביטחון כלכלי.
            </motion.p>

            {/* Trust indicators */}
            <motion.ul
              variants={fadeUp} custom={0.3}
              initial="hidden" animate="visible"
              className="flex flex-col sm:flex-row flex-wrap gap-x-6 gap-y-3 mb-10"
            >
              {trustItems.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-white/80 text-sm font-medium">{item}</span>
                </li>
              ))}
            </motion.ul>

            {/* CTA buttons */}
            <motion.div
              variants={fadeUp} custom={0.4}
              initial="hidden" animate="visible"
              className="flex flex-col sm:flex-row gap-4"
            >
              {/* Primary */}
              <button className="group inline-flex items-center justify-center gap-3 bg-gold hover:bg-gold-light text-navy-deep font-bold text-base sm:text-lg px-7 py-4 rounded-2xl transition-all duration-300 shadow-lg shadow-gold/25 hover:shadow-gold/40 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0">
                <CalendarCheck className="w-5 h-5 flex-shrink-0" />
                קבע/י פגישת ייעוץ חינם
                <ArrowLeft className="w-5 h-5 flex-shrink-0 transition-transform duration-300 group-hover:-translate-x-1" />
              </button>

              {/* Secondary */}
              <button className="inline-flex items-center justify-center border border-white/20 hover:border-gold/50 text-white/70 hover:text-gold-light font-medium text-base px-6 py-4 rounded-2xl transition-all duration-300 hover:bg-white/5">
                קראו את הסיפור שלי
              </button>
            </motion.div>
          </div>

          {/* ══ IMAGE COLUMN ══ */}
          <motion.div
            variants={fadeUp} custom={0.15}
            initial="hidden" animate="visible"
            className="flex-shrink-0 flex justify-center w-full md:w-auto"
          >
            <div className="relative">

              {/* Soft gold glow behind image */}
              <div className="absolute inset-0 rounded-full bg-gold/20 blur-3xl scale-110" />

              {/* Slow-spinning dashed outer ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-dashed border-gold/35 scale-[1.09]"
              />

              {/* Static inner ring */}
              <div className="absolute inset-0 rounded-full border-2 border-gold/20 scale-[1.04]" />

              {/* ── Floating portrait ── */}
              <motion.div
                animate={{ y: [0, -13, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem] rounded-full overflow-hidden border-[3px] border-gold/50 shadow-2xl shadow-black/60"
              >
                {/* Gradient shown while image loads / if absent */}
                <div className="absolute inset-0 bg-gradient-to-br from-navy-mid to-navy-deep" />
                <Image
                  src="/chani.jpg"
                  alt="חני כוכב לב – יועצת פיננסית משפחתית"
                  fill
                  sizes="(max-width: 768px) 240px, (max-width: 1024px) 320px, 352px"
                  className="object-cover object-top"
                  priority
                />
              </motion.div>

              {/* Floating badge — families */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
                className="absolute -bottom-4 -right-4 bg-white rounded-2xl px-4 py-3 shadow-2xl shadow-black/15"
              >
                <p className="text-navy-deep font-extrabold text-2xl leading-none">500+</p>
                <p className="text-muted text-xs mt-1">משפחות שינו חיים</p>
              </motion.div>

              {/* Floating badge — experience */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.3 }}
                className="absolute -top-4 -left-4 bg-navy-mid border border-gold/40 rounded-2xl px-4 py-3 shadow-2xl"
              >
                <p className="text-gold font-extrabold text-2xl leading-none">10+</p>
                <p className="text-white/60 text-xs mt-1">שנות ניסיון</p>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* ══ Wave transition to next section ══ */}
      <div className="absolute bottom-0 left-0 right-0 leading-none">
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-14 md:h-20 block"
        >
          <path
            d="M0,80 L0,40 Q180,80 360,50 Q540,20 720,45 Q900,70 1080,40 Q1260,15 1440,50 L1440,80 Z"
            fill="#0a1527"
          />
        </svg>
      </div>
    </section>
  );
}
