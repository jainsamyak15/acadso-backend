'use client'

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { InternshipForm } from "../components/forms/InternshipForm"
import { HackathonForm } from "../components/forms/HackathonForm"
import { ScholarshipForm } from "../components/forms/ScholarshipForm"
import { Navbar } from "../components/ui/Navbar"
import { motion, AnimatePresence } from "framer-motion"
import { Sparkles, Rocket, GraduationCap, Mail } from 'lucide-react'

export default function Home() {
  const [activeTab, setActiveTab] = useState<"internships" | "hackathons" | "scholarships" >("internships")

  const tabContent: { [key in "internships" | "hackathons" | "scholarships"]: JSX.Element } = {
    internships: <InternshipForm />,
    hackathons: <HackathonForm />,
    scholarships: <ScholarshipForm />,

  }

  return (
    <div className="min-h-screen bg-[#0f0f1a] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <Navbar />
      <main className="container mx-auto py-16 px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
            <h2 className="text-5xl font-bold text-center mb-2 bg-gradient-to-r from-indigo-400 to-cyan-400 text-transparent bg-clip-text">
            Post an Opportunity
            </h2>
          <p className="bg-gradient-to-r from-indigo-400 to-cyan-400 text-center mb-10">Share amazing opportunities with the community</p>
          
          <div className="backdrop-blur-xl bg-white/5 rounded-3xl p-8 shadow-2xl border border-white/10">
            <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as "internships" | "hackathons" | "scholarships" )} className="w-full">
              <TabsList className="flex w-full gap-2 p-1 bg-gray-800/50 rounded-2xl mb-6">
                <TabsTrigger value="internships" className="flex-1 py-3 data-[state=active]:bg-indigo-500 data-[state=active]:text-white transition-all duration-300">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Internships
                </TabsTrigger>
                <TabsTrigger value="hackathons" className="flex-1 py-3 data-[state=active]:bg-pink-500 data-[state=active]:text-white transition-all duration-300">
                  <Rocket className="w-5 h-5 mr-2" />
                  Hackathons
                </TabsTrigger>
                <TabsTrigger value="scholarships" className="flex-1 py-3 data-[state=active]:bg-purple-500 data-[state=active]:text-white transition-all duration-300">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  Scholarships
                </TabsTrigger>
                
              </TabsList>
              <div className="mt-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {tabContent[activeTab]}
                  </motion.div>
                </AnimatePresence>
              </div>
            </Tabs>
          </div>
        </motion.div>
      </main>
    </div>
  )
}

