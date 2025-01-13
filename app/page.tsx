'use client'

import { useState, useEffect } from 'react'
import { Session } from '@supabase/supabase-js'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { InternshipForm } from "../components/forms/InternshipForm"
import { HackathonForm } from "../components/forms/HackathonForm"
import { ScholarshipForm } from "../components/forms/ScholarshipForm"
import { Navbar } from "../components/ui/Navbar"
import { motion } from "framer-motion"
import { Sparkles, Rocket, GraduationCap, Lock, Mail, User } from 'lucide-react'
import { supabase } from "../lib/supabase"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import Footer from "../components/Footer"

export default function Home() {
    const [activeTab, setActiveTab] = useState<"internships" | "hackathons" | "scholarships">("internships")
    const [session, setSession] = useState<Session | null>(null)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)

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
        setIsLoading(true)
        setError("")
        
        try {
            const { error }: { error: LoginError | null } = await supabase.auth.signInWithPassword({ email, password })
            if (error) {
                setError(error.message)
            } else {
                supabase.auth.getSession().then(({ data: { session } }) => {
                    setSession(session)
                })
            }
        } catch (err) {
            setError('An unexpected error occurred')
        } finally {
            setIsLoading(false)
        }
    }

    const handleLogout = async () => {
        await supabase.auth.signOut()
        setSession(null)
    }

    const renderLoginContent = () => {
        if (!session) {
            return (
                <div className="min-h-[calc(100vh-64px)] flex flex-col justify-center items-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 px-4 py-6 sm:px-6">
                    <div className="w-full max-w-[380px]">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="bg-white rounded-2xl shadow-2xl overflow-hidden"
                        >
                            {/* Card Header */}
                            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 sm:p-8">
                                <div className="flex justify-center">
                                    <motion.div 
                                        className="bg-white/30 p-3 rounded-full"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <User className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                                    </motion.div>
                                </div>
                                <h2 className="text-white text-2xl sm:text-3xl font-bold text-center mt-4">
                                    Admin Login
                                </h2>
                                <p className="text-white/80 text-center mt-2 text-sm sm:text-base">
                                    Enter your credentials to access the dashboard
                                </p>
                            </div>

                            {/* Card Body */}
                            <div className="p-6 sm:p-8">
                                <form onSubmit={handleLogin} className="space-y-5">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                            Email Address
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <Mail className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <Input
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="pl-10 w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm text-sm sm:text-base"
                                                placeholder="admin@example.com"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                            Password
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <Lock className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <Input
                                                type="password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                className="pl-10 w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm text-sm sm:text-base"
                                                placeholder="Enter your password"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {error && (
                                        <motion.div 
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-red-500 text-sm text-center bg-red-50 p-3 rounded-md"
                                        >
                                            {error}
                                        </motion.div>
                                    )}

                                    <Button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-2.5 rounded-md transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-sm sm:text-base h-auto"
                                    >
                                        {isLoading ? (
                                            <div className="flex items-center justify-center">
                                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                                                Signing in...
                                            </div>
                                        ) : (
                                            'Sign in'
                                        )}
                                    </Button>
                                </form>
                            </div>
                        </motion.div>

                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-center mt-6 text-sm text-gray-600"
                        >
                            Protected Admin Dashboard • Secure Access Only
                        </motion.p>
                    </div>
                </div>
            )
        }

        return (
            <div className="p-4 sm:p-6">
                <div className="flex justify-center mb-4">
                    <Button onClick={handleLogout}>Logout</Button>
                </div>
                <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as "internships" | "hackathons" | "scholarships")} className="w-full">
                    <TabsList className="flex w-full gap-2 p-1 bg-gray-800/50 rounded-2xl mb-6 overflow-x-auto">
                        <TabsTrigger value="internships" className="flex-1 py-2 sm:py-3 data-[state=active]:bg-indigo-500 data-[state=active]:text-white transition-all duration-300 min-w-[120px]">
                            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                            <span className="whitespace-nowrap">Internships</span>
                        </TabsTrigger>
                        <TabsTrigger value="hackathons" className="flex-1 py-2 sm:py-3 data-[state=active]:bg-pink-500 data-[state=active]:text-white transition-all duration-300 min-w-[120px]">
                            <Rocket className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                            <span className="whitespace-nowrap">Hackathons</span>
                        </TabsTrigger>
                        <TabsTrigger value="scholarships" className="flex-1 py-2 sm:py-3 data-[state=active]:bg-purple-500 data-[state=active]:text-white transition-all duration-300 min-w-[120px]">
                            <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                            <span className="whitespace-nowrap">Scholarships</span>
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
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {<Navbar />}
            <main>
                {renderLoginContent()}
            </main>
            {session && <Footer />}
        </div>
    )
}