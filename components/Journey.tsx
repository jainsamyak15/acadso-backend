'use client'

import { motion } from 'framer-motion'

export default function Journey() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <motion.h2 
          className="text-3xl font-bold text-center mb-8 text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Journey
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-lg text-gray-600 mb-6">
            I pursued my undergraduate degree and research at Abdul Kalam Technical University and Indian Institute of Technology-Roorkee, India. During my undergrad years, I aspired to pursue graduate studies in the US, but faced challenges due to limited resources, guidance, and financial constraints.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            While YouTube and online forums provided some assistance, I realized that every student has unique needs that can't be fully addressed through general content. The industry is also filled with scammers and overhyped consultants, making it a challenging path to navigate.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Fast forward to 2024, I'm now enrolled in a fully funded graduate program in the United States. Beyond my coursework, I'm actively involved in developing wearable sensing technologies and alternative power sources for biomedical devices.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

