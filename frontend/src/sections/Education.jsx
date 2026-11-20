import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const Education = () => {
  const ref = useRef(null)
  const visible = useInView(ref, { once: true, margin: '-100px' })

  const coursework = ['Cybersecurity', 'Data Structures', 'Database Systems', 'Computer Networks', 'Operating Systems', 'Web Development']

  return (
    <section id="education" ref={ref} className="portfolio-section h-full overflow-y-auto px-5 py-7 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1480px] pb-10">
        <p className="section-kicker mb-6">Education & foundation</p>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={visible ? { opacity: 1, y: 0 } : {}} className="grid gap-6 rounded-[2rem] bg-[#11120f] p-6 text-[#f4f1e8] lg:grid-cols-[.78fr_1.22fr] lg:p-10">
          <div className="flex flex-col justify-between border-b border-white/12 pb-6 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-10">
            <h2 className="display-font text-[clamp(3.2rem,6vw,6.2rem)] font-black leading-[.86]">Always<br /><span className="text-[var(--lime)]">learning.</span></h2>
            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/12 p-4"><span className="text-[9px] font-bold uppercase tracking-[.16em] text-white/70">Degree</span><strong className="mt-2 block text-lg">BCA</strong></div>
              <div className="rounded-2xl border border-white/12 p-4"><span className="text-[9px] font-bold uppercase tracking-[.16em] text-white/70">CGPA</span><strong className="mt-2 block text-lg">7.2</strong></div>
            </div>
          </div>

          <div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={visible ? { opacity: 1, x: 0 } : {}} transition={{ delay: .1 }} className="rounded-2xl border border-white/12 p-5 sm:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between"><div><span className="text-[10px] font-bold uppercase tracking-[.16em] text-[var(--lime)]">August 2024 — May 2027</span><h3 className="mt-3 text-2xl font-bold">Bachelor of Computer Applications</h3><p className="mt-2 text-sm text-white/55">Specialization: Cybersecurity</p></div><span className="whitespace-nowrap rounded-full border border-white/15 px-3 py-2 text-[10px] font-bold uppercase tracking-[.12em]">In progress</span></div>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/80">Studying at ICFAI University, Jharkhand with a focus on secure software, data systems and modern application development.</p>
            </motion.div>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <motion.div initial={{ opacity: 0, y: 15 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ delay: .18 }} className="rounded-2xl border border-white/12 p-5">
                <p className="text-[10px] font-bold uppercase tracking-[.16em] text-white/70">Core coursework</p>
                <div className="mt-4 flex flex-wrap gap-2">{coursework.map((course) => <span key={course} className="rounded-full border border-white/12 px-3 py-2 text-xs text-white/75">{course}</span>)}</div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 15 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ delay: .24 }} className="rounded-2xl border border-white/12 p-5">
                <p className="text-[10px] font-bold uppercase tracking-[.16em] text-white/70">Current direction</p>
                <p className="mt-4 text-sm leading-7 text-white/80">Cloud infrastructure, secure MERN applications, artificial intelligence and responsible software engineering.</p>
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, y: 15 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ delay: .30 }} className="mt-4 grid grid-cols-3 gap-px overflow-hidden rounded-2xl bg-white/12">
              {[['01', 'Secure by design'], ['02', 'Build to scale'], ['03', 'Learn continuously']].map(([number, label]) => (
                <div key={number} className="bg-[#11120f] px-3 py-4 text-center"><span className="text-[9px] text-white/75">/{number}</span><strong className="mt-2 block text-[10px] uppercase tracking-[.08em] sm:text-xs">{label}</strong></div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
