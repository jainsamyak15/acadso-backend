'use client'

import { motion } from 'framer-motion'

const timelineEvents = [
    {
        title: "Undergraduate Studies",
        description: "Completed my undergraduate degree at Abdul Kalam Technical University with a focus on engineering fundamentals and research initiatives."
    },
    {
        title: "Research at IIT-Roorkee",
        description: "Conducted research at the prestigious Indian Institute of Technology-Roorkee, gaining valuable experience in advanced engineering concepts."
    },
    {
        title: "Graduate Studies",
        description: "Currently pursuing graduate studies at NC State University with a fully funded program in electrical and computer engineering."
    },
    {
        title: "Research Assistant",
        description: "Working as a teaching and research assistant, focusing on wearable sensing technologies and biomedical devices."
    }
]

export default function Timeline() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Academic Journey</h2>
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
                    
                    {timelineEvents.map((event, index) => (
                        <motion.div 
                            key={index}
                            className={`mb-12 flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} w-full`}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                                <div className="p-4 bg-white rounded-lg shadow-md">
                                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{event.title}</h3>
                                    <p className="text-gray-600">{event.description}</p>
                                </div>
                            </div>
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
