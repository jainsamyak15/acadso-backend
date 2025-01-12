'use client'

import { useState } from 'react'
import { Button } from "./button"
import { Menu } from 'lucide-react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-xl font-bold">Opportunities Platform</h1>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost">Home</Button>
            <Button variant="ghost">About</Button>
            <Button variant="ghost">Contact</Button>
            <Button>Sign In</Button>
          </div>

          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Button variant="ghost" className="w-full text-left">Home</Button>
            <Button variant="ghost" className="w-full text-left">About</Button>
            <Button variant="ghost" className="w-full text-left">Contact</Button>
            <Button className="w-full">Sign In</Button>
          </div>
        </div>
      )}
    </nav>
  )
}