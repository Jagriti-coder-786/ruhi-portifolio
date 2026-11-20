import { motion } from 'framer-motion'

const About = () => (
  <section className="portfolio-section h-full overflow-y-auto px-5 py-6 sm:px-8 lg:px-12">
    <div className="mx-auto grid max-w-[1480px] gap-6 pb-8 lg:min-h-[calc(100svh-118px)] lg:grid-cols-[.72fr_1.28fr] lg:items-center lg:gap-10">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        className="relative mx-auto h-[240px] w-full max-w-[420px] overflow-hidden rounded-[1.5rem] bg-[#11120f] sm:h-[320px] lg:h-[520px] lg:rounded-[2rem]"
      >
        <div className="absolute inset-0 editorial-grid opacity-20" />
        <div className="absolute bottom-0 left-1/2 h-[78%] w-[56%] -translate-x-1/2 rounded-t-full border border-[#c8ff3d]/50 bg-[#c8ff3d]/10 sm:w-[62%] lg:h-[82%] lg:w-[70%]" />
        <div className="absolute left-4 top-4 rounded-full border border-white/20 px-3 py-2 text-[9px] font-bold uppercase tracking-[.15em] text-white sm:left-6 sm:top-6">Student / Creator</div>
        <div className="absolute bottom-5 left-5 text-5xl font-black text-white sm:bottom-8 sm:left-8 sm:text-7xl">JK.</div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .12 }}>
        <p className="section-kicker mb-4 lg:mb-7">About me</p>
        <h2 className="display-font text-[clamp(2.8rem,7vw,7rem)] font-black leading-[.86]">Curious mind.<br /><span className="outline-text">Clear purpose.</span></h2>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--ink)] opacity-90 sm:text-base lg:mt-8 lg:text-lg lg:leading-8">
          I’m Jagriti Kushwaha, a BCA student specializing in cybersecurity and a full-stack developer. I build secure, AI-powered and cloud-based products while continually strengthening my engineering and problem-solving skills.
        </p>
        <div className="mt-5 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-[var(--line)] sm:grid-cols-3 lg:mt-8">
          {[['Based in', 'Jharkhand, India'], ['Focus', 'Full-stack & AI'], ['Education', 'BCA · 7.2 CGPA']].map(([label, value]) => (
            <div key={label} className="bg-[var(--paper)] px-4 py-3 lg:p-5">
              <span className="block text-[9px] font-bold uppercase tracking-[.16em] text-[var(--ink)] opacity-90">{label}</span>
              <strong className="mt-1 block text-sm text-[var(--ink)] lg:mt-2">{value}</strong>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
)

export default About
