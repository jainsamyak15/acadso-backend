import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { InternshipForm } from "../components/forms/InternshipForm"
import { HackathonForm } from "../components/forms/HackathonForm"
import { ScholarshipForm } from "../components/forms/ScholarshipForm"
import { Navbar } from "../components/ui/Navbar"
import { ToastProvider } from "../components/ui/toast"

export default function Home() {
  return (
    <ToastProvider>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto py-10 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">
              Post an Opportunity
            </h2>
            <Tabs defaultValue="internships" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="internships">Internships</TabsTrigger>
                <TabsTrigger value="hackathons">Hackathons</TabsTrigger>
                <TabsTrigger value="scholarships">Scholarships</TabsTrigger>
                <TabsTrigger value="contact">Contact</TabsTrigger>
              </TabsList>
              <div className="mt-6">
                <TabsContent value="internships">
                  <InternshipForm />
                </TabsContent>
                {/* Add other TabsContent here */}
              </div>
            </Tabs>
          </div>
        </main>
      </div>
    </ToastProvider>
  )
}