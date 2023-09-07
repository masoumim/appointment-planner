// page.js - This is the main page or root page that is reached when accessing this web app
import Image from "next/image"
export default function Home() {
  return (
    <>
      <div className="home-page-container">
        <h2>Appointment Planner</h2>
        <Image
          src="/calendar.png"
          width={250}
          height={250}
          alt="Picture of a calendar"
          priority={true}
        />
      </div>
    </>
  )
}
