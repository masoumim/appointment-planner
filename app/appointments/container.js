// AppointmentsContainer is a stateful client component that handles state and the logic to change state.
// The methods in this component handle user input for an appointments form as well as adding new appointments to a state array.

"use client"
import { useState, useEffect, useContext } from "react"
import Appointments from "./appointments";
import AppointmentForm from "./form";
import { ContactsContext } from "@/components/providers";

export default function AppointmentsContainer() {

    // State variables
    const [appointments, setAppointments] = useState([]);                                 // Array of appointments    
    const [formInputAppointmentName, setFormInputAppointmentName] = useState("");         // Appointment Form name value
    const [formInputAppointmentContact, setFormInputAppointmentContact] = useState("");   // Appointment Form contact value
    const [formInputAppointmentDate, setFormInputAppointmentDate] = useState("");         // Appointment Form date value
    const [formInputAppointmentTime, setFormInputAppointmentTime] = useState("");         // Appointment Form time value
    const [duplicateAppointment, setDuplicateAppointment] = useState(false);              // Boolean state to indicate if appointments array already has appointment with data + time
    const [formInputMsg, setFormInputMsg] = useState("");                                 // Input feedback message
    const contactsCtx = useContext(ContactsContext);                                      // Shared 'contacts' context
    const contacts = contactsCtx[0];                                                      // State array of contacts
    const setContacts = contactsCtx[1];                                                   // State array setter

    // Check if 'appointments' array already contains appointment with 'formInputAppointmentDate' and 'formInputAppointmentTime'
    // Set 'duplicateAppointment' bool state to true if it does and false if it doesn't
    
    // Handles Appointment form submit: adds a new appointment to the 'appointments' state array

    // Updates the 'formInputAppointmentName' state var on every change to the input field
    // Updates the 'formInputAppointmentContact' state var on every change to the input field
    // Updates the 'formInputAppointmentDate' state var on every change to the input field
    // Updates the 'formInputAppointmentTime' state var on every change to the input field

    return (
        <>
            <div>
                <section>
                    <AppointmentForm />
                </section>
                <hr />
                <section>
                    <Appointments />
                </section>
            </div>
        </>
    );

}
