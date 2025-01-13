'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "./button"
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const handleNavigation = (path: string) => {
    router.push(path)
  }

  return (
    <nav className="backdrop-blur-md bg-black border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 text-transparent bg-clip-text"
            >
              ACADSO
            </motion.h1>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-300 hover:text-white" onClick={() => handleNavigation('/')}>Home</Button>
            <Button variant="ghost" className="text-gray-300 hover:text-white" onClick={() => handleNavigation('/about')}>About</Button>
            <Button className="bg-indigo-500 hover:bg-indigo-600 text-white" onClick={() => handleNavigation('/signin')}>Sign In</Button>
            <Button
              className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white font-bold py-2 px-4 rounded-full shadow-lg transform transition-transform hover:scale-105"
              onClick={() => window.open('https://www.acadso.tech', '_blank')}
            >
              Visit Main Website
            </Button>
          </div>
          <div className="flex items-center md:hidden">
            <Button variant="ghost" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6 text-black" /> : <Menu className="w-6 h-6 text-white" />}
            </Button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/10 backdrop-blur-md bg-black"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Button variant="ghost" className="w-full text-left text-gray-300 hover:text-white hover:bg-white/10" onClick={() => handleNavigation('/')}>Home</Button>
              <Button variant="ghost" className="w-full text-left text-gray-300 hover:text-white hover:bg-white/10" onClick={() => handleNavigation('/about')}>About</Button>
              <Button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white" onClick={() => handleNavigation('/signin')}>Sign In</Button>
              <Button
                className="w-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white font-bold py-2 px-4 rounded-full shadow-lg transform transition-transform hover:scale-105"
                onClick={() => window.open('https://www.acadso.tech', '_blank')}
              >
                Visit Main Website
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}