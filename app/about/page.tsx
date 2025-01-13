import { Metadata } from 'next'
import AboutHero from '../../components/AboutHero'
import Journey from '../../components/Journey'
import Timeline from '../../components/Timeline'
import ResearchInterests from '../../components/ResearchInterests'
import { Navbar } from "../../components/ui/Navbar"
import Footer from "../../components/Footer"

export const metadata: Metadata = {
  title: 'About - Bhavya Jain',
  description: 'Learn about Bhavya Jain, a graduate student at NC State University pursuing studies in electrical and computer engineering.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Navbar />
      <AboutHero />
      <Journey />
      <Timeline />
      <ResearchInterests />
        <Footer />
    </main>
  )
}

