import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const Contact = () => {
  const ref = useRef(null)
  const visible = useInView(ref, { once: true, margin: '-100px' })
  const [sent, setSent] = useState(false)
  const submit = (event) => { event.preventDefault(); setSent(true); event.currentTarget.reset(); setTimeout(() => setSent(false), 5000) }

  return (
    <section id="contact" ref={ref} className="portfolio-section h-full overflow-y-auto px-5 py-8 sm:px-8 lg:px-12">
      <motion.div initial={{ opacity: 0, y: 40, scale: .985 }} animate={visible ? { opacity: 1, y: 0, scale: 1 } : {}} transition={{ duration: .55, ease: [0.22,1,0.36,1] }} className="mx-auto max-w-[1480px] overflow-hidden rounded-[2rem] bg-[#7467f0] px-6 py-14 text-[#11120f] sm:px-10 lg:px-16 lg:py-20">
        <div className="grid gap-14 lg:grid-cols-[1fr_.8fr]">
          <div><p className="mb-8 text-[11px] font-bold uppercase tracking-[.18em] text-[#11120f]/80">Start a project</p><h2 className="display-font text-[clamp(4rem,9vw,8.5rem)] font-black leading-[.82]">LET&apos;S MAKE<br /><span className="outline-text text-white">IT REAL.</span></h2></div>
          <form onSubmit={submit} className="self-end space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-xs font-bold uppercase tracking-[.12em] text-[#11120f]/85">Name
                <input required name="name" className="mt-3 w-full border-b border-[#11120f]/35 bg-transparent py-3 text-lg text-[#11120f] outline-none placeholder:text-[#11120f]/55 focus:border-[#11120f]" placeholder="Your name" />
              </label>
              <label className="text-xs font-bold uppercase tracking-[.12em] text-[#11120f]/85">Email
                <input required type="email" name="email" className="mt-3 w-full border-b border-[#11120f]/35 bg-transparent py-3 text-lg text-[#11120f] outline-none placeholder:text-[#11120f]/55 focus:border-[#11120f]" placeholder="you@email.com" />
              </label>
            </div>
            <label className="block text-xs font-bold uppercase tracking-[.12em] text-[#11120f]/85">Project details
              <textarea required name="message" rows="3" className="mt-3 w-full resize-none border-b border-[#11120f]/35 bg-transparent py-3 text-lg text-[#11120f] outline-none placeholder:text-[#11120f]/55 focus:border-[#11120f]" placeholder="Tell me what you're imagining" />
            </label>
            <button className="mt-3 flex w-full items-center justify-between rounded-full bg-[var(--lime)] px-7 py-5 text-sm font-black uppercase tracking-[.12em] text-black transition-transform hover:-translate-y-1" type="submit"><span>{sent ? 'Message ready' : 'Send enquiry'}</span><span>↗</span></button>
          </form>
        </div>
        <div className="mt-16 flex flex-col gap-5 border-t border-white/20 pt-7 text-xs font-bold uppercase tracking-[.12em] sm:flex-row sm:items-center sm:justify-between"><span>© 2026 Jagriti Kushwaha · +91 96089 67446</span><div className="flex gap-6"><a href="https://github.com/Jagriti-coder-786" target="_blank" rel="noopener noreferrer" className="hover:opacity-60">GitHub</a><a href="https://www.linkedin.com/in/jagriti-kushwaha-a221143b0/" target="_blank" rel="noopener noreferrer" className="hover:opacity-60">LinkedIn</a><a href="mailto:jagritikushwaha95@gmail.com" className="hover:opacity-60">Email</a></div></div>
      </motion.div>
    </section>
  )
}

export default Contact
