'use client'

import { useState } from 'react'
import { Button } from "./button"
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

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
              Opportunities Platform
            </motion.h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/10">Home</Button>
            <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/10">About</Button>
            <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/10">Contact</Button>
            <Button className="bg-indigo-500 hover:bg-indigo-600 text-white">Sign In</Button>
          </div>

          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white hover:bg-white/10"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/10 backdrop-blur-md bg-black"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Button variant="ghost" className="w-full text-left text-gray-300 hover:text-white hover:bg-white/10">Home</Button>
              <Button variant="ghost" className="w-full text-left text-gray-300 hover:text-white hover:bg-white/10">About</Button>
              <Button variant="ghost" className="w-full text-left text-gray-300 hover:text-white hover:bg-white/10">Contact</Button>
              <Button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white">Sign In</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}