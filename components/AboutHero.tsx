'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function AboutHero() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl mb-6">
              About Me
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Hello hustlers! I'm Bhavya, a graduate student at NC State University pursuing my studies in electrical and computer engineering. Currently, I serve as a teaching and research assistant in my department.
            </p>
            <div className="h-1 w-20 bg-blue-600 rounded"></div>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src="/images/1692806399655.jpeg"
              alt="Bhavya Jain"
              width={500}
              height={500}
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

