import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
// import { contactAPI } from '../utils/api'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: '-100px' })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    console.log('Form submitted:', formData)

    // Simulate network delay
    setTimeout(() => {
      setSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      setLoading(false)

      // Auto-hide success message
      setTimeout(() => setSubmitted(false), 5000)
    }, 1500)
  }

  const socialLinks = [
    { icon: '🐙', label: 'GitHub', url: 'https://github.com/Jagriti-coder-786' },
    { icon: '💼', label: 'LinkedIn', url: 'https://www.linkedin.com/in/jagriti-kushwaha-a221143b0' },
    { icon: '🐦', label: 'Twitter', url: 'https://twitter.com' },
    { icon: '✉️', label: 'Email', url: 'mailto:jagritikushwaha95@gmail.com' },
    { icon: '🎨', label: 'Dribbble', url: 'https://dribbble.com' },
    { icon: '📸', label: 'Instagram', url: 'https://instagram.com' },
  ]

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-20 lg:py-32 px-6 lg:px-12 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-pink-500/5 to-cyan-500/5" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <SectionTitle subtitle="Let's collaborate on something amazing">
          Get In Touch
        </SectionTitle>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ delay: 0.1 }}
              >
                <label className="block text-cyan-900 dark:text-cyan-300 font-semibold mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg glass border-cyan-600/30 dark:border-cyan-400/30 focus:border-cyan-300/50 text-gray-900 dark:text-white placeholder-cyan-700/50 dark:placeholder-cyan-400/30 focus:outline-none transition-colors bg-transparent"
                  placeholder="Ruhi"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ delay: 0.2 }}
              >
                <label className="block text-cyan-900 dark:text-cyan-300 font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg glass border-cyan-600/30 dark:border-cyan-400/30 focus:border-cyan-300/50 text-gray-900 dark:text-white placeholder-cyan-700/50 dark:placeholder-cyan-400/30 focus:outline-none transition-colors bg-transparent"
                  placeholder="jagritikushwaha95@gmail.com"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ delay: 0.3 }}
              >
                <label className="block text-cyan-900 dark:text-cyan-300 font-semibold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg glass border-cyan-600/30 dark:border-cyan-400/30 focus:border-cyan-300/50 text-gray-900 dark:text-white placeholder-cyan-700/50 dark:placeholder-cyan-400/30 focus:outline-none transition-colors bg-transparent"
                  placeholder="Project inquiry"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ delay: 0.4 }}
              >
                <label className="block text-cyan-900 dark:text-cyan-300 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg glass border-cyan-600/30 dark:border-cyan-400/30 focus:border-cyan-300/50 text-gray-900 dark:text-white placeholder-cyan-700/50 dark:placeholder-cyan-400/30 focus:outline-none transition-colors bg-transparent resize-none"
                  placeholder="Tell me about your project..."
                />
              </motion.div>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-4 rounded-lg bg-green-500/10 border border-green-400/30 text-green-300"
                >
                  ✓ Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 245, 255, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={loading}
                className="w-full px-6 py-4 rounded-lg glass border-cyan-600/30 dark:border-cyan-400/30 hover:border-cyan-300/50 font-semibold text-cyan-900 dark:text-cyan-300 transition-smooth neon-border disabled:opacity-50"
              >
                {loading ? 'Sending...' : 'Send Message ✉️'}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Quick links */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-cyan-900 dark:text-cyan-300 mb-6">
                Quick Links
              </h3>
              <div className="space-y-4">
                <motion.a
                  href="https://wa.me/9608967446"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 glass rounded-lg border-green-600/30 dark:border-green-400/30 hover:border-green-300/50 transition-smooth hover:shadow-lg"
                >
                  <span className="text-3xl">💬</span>
                  <div>
                    <div className="font-semibold text-green-700 dark:text-green-300">Chat on WhatsApp</div>
                    <div className="text-green-700/60 dark:text-green-300/60 text-sm">Quick response guaranteed</div>
                  </div>
                </motion.a>

                <motion.a
                  href="mailto:jagritikushwaha95@gmail.com"
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 glass rounded-lg border-purple-600/30 dark:border-purple-400/30 hover:border-purple-300/50 transition-smooth hover:shadow-lg"
                >
                  <span className="text-3xl">📧</span>
                  <div>
                    <div className="font-semibold text-purple-700 dark:text-purple-300">Email Me</div>
                    <div className="text-purple-700/60 dark:text-purple-300/60 text-sm">jagritikushwaha95@gmail.com</div>
                  </div>
                </motion.a>

                <motion.button
                  whileHover={{ x: 10 }}
                  className="w-full flex items-center gap-4 p-4 glass rounded-lg border-pink-600/30 dark:border-pink-400/30 hover:border-pink-300/50 transition-smooth hover:shadow-lg"
                >
                  <span className="text-3xl">📞</span>
                  <div>
                    <div className="font-semibold text-pink-700 dark:text-pink-300">Call Me</div>
                    <div className="text-pink-700/60 dark:text-pink-300/60 text-sm">+91 9608967446</div>
                  </div>
                </motion.button>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-cyan-900 dark:text-cyan-300 mb-6">
                Follow Me
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    title={social.label}
                    className="aspect-square glass rounded-xl border-cyan-600/30 dark:border-cyan-400/30 hover:border-cyan-300/50 hover:shadow-neon-cyan transition-smooth flex items-center justify-center text-3xl"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
