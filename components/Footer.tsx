import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
              <li><Link href="/about" className="hover:text-blue-400">About</Link></li>
              <li><Link href="www.acadso.tech/applications" className="hover:text-blue-400">Mentorship</Link></li>
              <li><Link href="www.acadso.tech/resources" className="hover:text-blue-400">Resources</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>Email: <a href="mailto:contact@acadso.com" className="hover:text-blue-400">contact@acadso.com</a></li>
              <li>Phone: (123) 456-7890</li>
              <li><Link href="www.acadso.tech/contact" className="hover:text-blue-400">Reach Out To Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400"><Facebook /></a>
              <a href="#" className="hover:text-blue-400"><Twitter /></a>
              <a href="#" className="hover:text-blue-400"><Linkedin /></a>
              <a href="#" className="hover:text-blue-400"><Instagram /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400">&copy; 2024 Acadso. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

