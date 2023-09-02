
"use client"

import { useState } from "react";
export default function Home() {

  /*
  Define state variables for 
  contacts and appointments 
  */
  
  const [appointments, setAppointments] = useState();

  /*
  Implement functions to add data to
  contacts and appointments
  */


  function addAppointment(appointment) {
    setAppointments(appointment);
  }


  return (
    <>
      <h2>Appointment Planner</h2>

    </>
  )
}
