'use client'

import { useState, useEffect } from 'react'
import { Session } from '@supabase/supabase-js'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { InternshipForm } from "../components/forms/InternshipForm"
import { HackathonForm } from "../components/forms/HackathonForm"
import { ScholarshipForm } from "../components/forms/ScholarshipForm"
import { Navbar } from "../components/ui/Navbar"
import { motion } from "framer-motion"
import { Sparkles, Rocket, GraduationCap } from 'lucide-react'
import { supabase } from "../lib/supabase"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"

export default function Home() {
    const [activeTab, setActiveTab] = useState<"internships" | "hackathons" | "scholarships">("internships")
    const [session, setSession] = useState<Session | null>(null)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session)
        })
    }, [])

    interface LoginFormEvent extends React.FormEvent<HTMLFormElement> {}

    interface LoginError {
        message: string;
    }

    const handleLogin = async (e: LoginFormEvent) => {
        e.preventDefault()
        const { error }: { error: LoginError | null } = await supabase.auth.signInWithPassword({ email, password })
        if (error) {
            setError(error.message)
        } else {
            setError("")
            supabase.auth.getSession().then(({ data: { session } }) => {
                setSession(session)
            })
        }
    }

    const handleLogout = async () => {
        await supabase.auth.signOut()
        setSession(null)
    }

    const renderContent = () => {
        if (!session) {
            return (
                <div className="text-center p-8 mt-20 mb-4">
                    <h2 className="text-2xl font-bold mb-4 mt-20">Admin Login</h2>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <Input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="text-black"
                            required
                        />
                        <Input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="text-black"
                            required
                        />
                        {error && <p className="text-red-500">{error}</p>}
                        <Button type="submit">Login</Button>
                    </form>
                </div>
            )
        }

        return (
            <>
                <Button onClick={handleLogout} className="mb-4">Logout</Button>
                <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as "internships" | "hackathons" | "scholarships")} className="w-full">
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
                    <TabsContent value="internships">
                        <InternshipForm />
                    </TabsContent>
                    <TabsContent value="hackathons">
                        <HackathonForm />
                    </TabsContent>
                    <TabsContent value="scholarships">
                        <ScholarshipForm />
                    </TabsContent>
                </Tabs>
            </>
        )
    }

    return (
        <div className="min-h-screen bg-[#0f0f1a] text-black overflow-hidden">
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
                    <p className="bg-gradient-to-r from-indigo-400 to-cyan-400 text-center mb-50">Share amazing opportunities with the community</p>
                    <div className="backdrop-blur-xl bg-white/5 rounded-3xl p-8 shadow-2xl border border-white/10">
                        {renderContent()}
                    </div>
                </motion.div>
            </main>
        </div>
    )
}