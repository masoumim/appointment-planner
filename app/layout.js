// layout.js - The JSX returned by this layout file will be applied to ALL routes
import Link from "next/link"
import Providers from "@/components/providers"
import "./global.css"

// Import 'Baloo 2' font
import {Baloo_2} from 'next/font/google'

// Configure the font object
const baloo_2 = Baloo_2({  
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Appointment Planner'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={baloo_2.className}>
      <body>
        <nav>
          <Link href={"/"}>Home</Link>
          <Link href={"/contacts"}>Contacts</Link>
          <Link href={"/appointments"}>Appointments</Link>
        </nav>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
