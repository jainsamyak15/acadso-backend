'use client'

import { motion } from 'framer-motion'
import { Cpu, Battery, Activity } from 'lucide-react'

const researchAreas = [
  {
    icon: Cpu,
    title: "Wearable Technology",
    description: "Developing innovative wearable sensing technologies for real-world applications."
  },
  {
    icon: Battery,
    title: "Power Sources",
    description: "Exploring alternative power sources for next-generation biomedical devices."
  },
  {
    icon: Activity,
    title: "Biomedical Devices",
    description: "Creating innovative solutions for healthcare through advanced engineering."
  }
]

export default function ResearchInterests() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Research Interests</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchAreas.map((area, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <area.icon className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{area.title}</h3>
              <p className="text-gray-600">{area.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

