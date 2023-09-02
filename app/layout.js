// app/layout.js - The JSX returned by a layout file will be applied to ALL other pages
import Link from "next/link"

export const metadata = {
  title: 'Appointment Planner'  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Link href={"/"}>Home</Link>
          <Link href={"/contacts"}>Contacts</Link>
          <Link href={"/appointments"}>Appointments</Link>
        </nav>        
        {children}
      </body>
    </html>
  )
}
