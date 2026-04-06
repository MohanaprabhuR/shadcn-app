import {
  Geist_Mono,
  Inter,
  DM_Sans,
  Manrope,
  Nunito,
  Poppins,
  Plus_Jakarta_Sans,
  Outfit,
} from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { NavBar } from "@/components/nav-bar"
import { Toaster } from "@/components/ui/sonner"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" })
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" })
const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" })
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})
const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-plus-jakarta" })
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" })

export const metadata = {
  title: "Shadcn Playground",
  description: "Explore and customize shadcn/ui components with live theme generation",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        inter.variable,
        fontMono.variable,
        dmSans.variable,
        manrope.variable,
        nunito.variable,
        poppins.variable,
        plusJakarta.variable,
        outfit.variable,
      )}
    >
      <body className="min-h-screen bg-background text-foreground">
        <ThemeProvider>
          <NavBar />
          <main className="min-h-[calc(100vh-3.5rem)]">{children}</main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
