import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react"
import { SplashScreen } from "@/components/splash-screen"
import { CustomCursor } from "@/components/custom-cursor"

const inter = Inter({ subsets: ["latin"] })

  export const metadata: Metadata = {
    title: "LPU - Lovely Professional University",
    description: "LPU - Lovely Professional University",
      generator: 'v0.dev'
  }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-dark-900 text-gray-100`}>
        <SplashScreen />
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none">
        </div>
        {children}
        <footer className="w-full py-6 px-4 bg-dark-600 text-gray-400">
          <div className="container mx-auto text-center">
            <p>&copy; 2025 LPU. All rights reserved.</p>
          </div>
        </footer>
        <CustomCursor />
      </body>
    </html>
  )
}



import './globals.css'