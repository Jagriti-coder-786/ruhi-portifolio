import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'

const Education = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: '-100px' })

  const educationData = [
    {
      degree: 'Bachelor of Computer Application (BCA) - Cyber Security',
      institution: 'ICFAI University, Ranchi',
      year: '2024 - 2027',
      description: 'Currently pursuing BCA with specialization in Cyber Security. Focused on Networking, Web Security, Ethical Hacking, Database Management, and Full Stack Development.',
      icon: '🎓',
    },
    {
      degree: 'Intermediate',
      institution: 'Surat Pandey Inter College, Garhwa',
      year: '2020 - 2022',
      description: 'Completed Higher Secondary education with academic foundation in Computer Science and core subjects.',
      icon: '📚',
    },
    {
      degree: 'Matriculation',
      institution: 'MDNGG Public School, Garhwa',
      year: '2019 - 2020',
      description: 'Completed secondary education with strong academic fundamentals.',
      icon: '📗',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section
      id="education"
      ref={ref}
      className="relative py-20 lg:py-32 px-6 lg:px-12 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-cyan-500/5" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <SectionTitle subtitle="Academic journey and professional certifications">
          Education & Certifications
        </SectionTitle>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-8"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.degree}
              variants={itemVariants}
              className="relative"
            >
              {/* Timeline line */}
              {index !== educationData.length - 1 && (
                <div className="absolute left-0 top-20 w-1 h-24 bg-gradient-to-b from-cyan-400/30 to-transparent lg:left-1/2 lg:-translate-x-1/2" />
              )}

              <div className="flex gap-6 lg:gap-12">
                {/* Timeline dot */}
                <div className="relative flex flex-col items-center flex-shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-12 h-12 rounded-full glass border-2 border-cyan-600/50 dark:border-cyan-400/50 flex items-center justify-center text-xl neon-border shadow-neon-cyan z-10"
                  >
                    {edu.icon}
                  </motion.div>
                </div>

                {/* Content */}
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex-1 glass rounded-xl p-6 border-cyan-600/20 dark:border-cyan-400/20 hover:border-cyan-400/50 transition-smooth"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2">
                    <h3 className="text-xl lg:text-2xl font-bold text-cyan-900 dark:text-cyan-300">
                      {edu.degree}
                    </h3>
                    <span className="text-cyan-400/60 text-sm font-mono mt-2 lg:mt-0">
                      {edu.year}
                    </span>
                  </div>
                  <p className="text-cyan-800/80 dark:text-cyan-300/80 font-semibold mb-2">
                    {edu.institution}
                  </p>
                  <p className="text-cyan-700/60 dark:text-cyan-300/60">
                    {edu.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Education
