"use client";

import { motion } from "framer-motion";
import { TrendingDown, Banknote, ShieldAlert } from "lucide-react";

/* ─── Data ────────────────────────────────────────────────────────────── */
const cards = [
  {
    Icon: TrendingDown,
    title: "המינוס חונק ולא רואים את הסוף?",
    body: "כל חודש מחדש — יתרת החשבון צוללת עמוק יותר. התחושה שאין מוצא הופכת לחלק קבוע מהחיים, ומשפיעה על כל תחום.",
    delay: 0,
  },
  {
    Icon: Banknote,
    title: "עובדים קשה, אבל הכסף פשוט נעלם?",
    body: "שתי משכורות, ובסוף החודש לא נשאר כלום. אין חיסכון, אין רזרבה. איפה הכסף הולך? למה אי אפשר לתפוס אחריו?",
    delay: 0.15,
  },
  {
    Icon: ShieldAlert,
    title: "חוששים מהעתיד הכלכלי של הילדים?",
    body: "חינוך, חתונות, ביטחון לגיל פרישה — הרצון לתת לילדים הכל, לצד הפחד שמבחינה כלכלית הדברים לא יסתדרו.",
    delay: 0.3,
  },
];

/* ─── Animation variants ──────────────────────────────────────────────── */
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut", delay },
  }),
};

const sectionHeader = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

/* ─── Component ──────────────────────────────────────────────────────── */
export default function PainPoints() {
  return (
    <section className="relative bg-[#0a1527] py-24 md:py-32 overflow-hidden">

      {/* ══ Subtle background texture ══ */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, #C9A84C 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section header ── */}
        <motion.div
          variants={sectionHeader}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-16"
        >
          {/* Section label */}
          <span className="inline-block text-gold text-sm font-semibold tracking-widest uppercase mb-4">
            מכירים את התחושה?
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
            לא בגלל שאתם לא מנסים —
            <br />
            <span className="text-gold">אלא כי לא לימדו אתכם איך.</span>
          </h2>

          <p className="text-white/55 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            בעיות כלכליות אינן כישלון אישי. הן תוצאה של חוסר ידע, כלים לא נכונים
            ומסלול שמעולם לא הוסבר לכם. יחד — נשנה את זה.
          </p>
        </motion.div>

        {/* ── Cards grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map(({ Icon, title, body, delay }) => (
            <motion.div
              key={title}
              variants={cardVariants}
              custom={delay}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group relative bg-navy-mid border border-white/8 hover:border-gold/40 rounded-3xl p-7 sm:p-8 flex flex-col gap-5 cursor-default transition-colors duration-300 shadow-xl shadow-black/30"
            >
              {/* Top gold accent line */}
              <div className="absolute top-0 right-0 left-0 h-[2px] rounded-t-3xl bg-gradient-to-l from-transparent via-gold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Icon container */}
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-navy-deep border border-gold/20 group-hover:border-gold/50 transition-colors duration-300 flex-shrink-0">
                <Icon className="w-7 h-7 text-gold" strokeWidth={1.5} />
              </div>

              {/* Text */}
              <div className="text-right">
                <h3 className="text-white font-bold text-lg sm:text-xl leading-snug mb-3">
                  {title}
                </h3>
                <p className="text-white/55 text-sm sm:text-base leading-relaxed">
                  {body}
                </p>
              </div>

              {/* Bottom quote mark decoration */}
              <div className="mt-auto pt-4 border-t border-white/8 flex justify-start">
                <span className="text-gold/30 font-serif text-5xl leading-none select-none">
                  ״
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Bridge line into solution ── */}
        <motion.p
          variants={sectionHeader}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="text-center text-white/50 text-base sm:text-lg mt-16 max-w-xl mx-auto leading-relaxed"
        >
          אם לפחות אחת מהתחושות האלה מוכרת לכם —
          <br />
          <span className="text-gold font-semibold">
            חני כאן בדיוק בשבילכם.
          </span>
        </motion.p>
      </div>
    </section>
  );
}
