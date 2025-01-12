import { ToastProvider } from "../components/ui/use-toast"
import { Toaster } from "../components/ui/toaster"
import { Inter } from "next/font/google"
import "../styles/globals.css"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <ToastProvider>
          <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            {children}
            <Toaster />
          </div>
        </ToastProvider>
      </body>
    </html>
  )
}