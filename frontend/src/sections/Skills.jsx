import { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: '-100px' })

  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'HTML5', 'Tailwind CSS', 'Framer Motion', 'GSAP', 'Three.js'],
      icon: '🎨',
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs', 'WebSockets'],
      icon: '⚙️',
    },
    {
      category: 'Design',
      skills: ['UI/UX Design', 'Figma', 'Motion Design', 'Branding', 'Web Animation'],
      icon: '✨',
    },
    {
      category: 'Tools',
      skills: ['Git', 'VS Code', 'AI Tools', 'Github', 'Vite', 'Firebase'],
      icon: '🛠️',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-20 lg:py-32 px-6 lg:px-12 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionTitle subtitle="Technologies and expertise I master">
          Core Skills
        </SectionTitle>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.category}
              variants={itemVariants}
              className="group glass rounded-2xl p-8 hover:shadow-neon-cyan transition-smooth border-cyan-600/20 dark:border-cyan-400/20 hover:border-cyan-400/50"
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-2xl font-bold mb-6 text-cyan-900 dark:text-cyan-300">{category.category}</h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: idx * 0.05 }}
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-600/30 dark:border-cyan-400/30 text-sm font-medium hover:border-cyan-300/50 transition-smooth"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { label: 'Projects Completed', value: '20+' },
            { label: 'Years Experience', value: '1+' },
            { label: 'Happy Clients', value: '100+' },
            { label: 'Avg Rating', value: '4.9★' },
          ].map((stat) => (
            <div key={stat.label} className="glass rounded-xl p-6 text-center border-cyan-600/20 dark:border-cyan-400/20">
              <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <p className="text-cyan-700/70 dark:text-cyan-300/60 text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
