// AppointmentsContainer is a stateful client component that handles state and the logic to change state.
// The methods in this component handle user input for an appointments form as well as adding new appointments to a state array.

"use client"
import { useState, useEffect, useContext } from "react"
import Appointments from "./appointments";
import AppointmentForm from "./form";
import { ctx } from "@/components/providers";

export default function AppointmentsContainer() {

    // State variables       
    const [formInputAppointmentName, setFormInputAppointmentName] = useState("");         // Appointment Form name value
    const [formInputAppointmentContact, setFormInputAppointmentContact] = useState("");   // Appointment Form contact value
    const [formInputAppointmentDate, setFormInputAppointmentDate] = useState("");         // Appointment Form date value
    const [formInputAppointmentTime, setFormInputAppointmentTime] = useState("");         // Appointment Form time value
    const [duplicateAppointment, setDuplicateAppointment] = useState(false);              // Boolean state to indicate if appointments array already has appointment with data + time
    const [formInputMsg, setFormInputMsg] = useState("");                                 // Input feedback message
    const appointmentsCtx = useContext(ctx);                                              // The Context object
    const contacts = appointmentsCtx[0];                                                  // State array of contacts
    const appointments = appointmentsCtx[2];                                              // State array of appointments
    const setAppointments = appointmentsCtx[3];                                           // Appointments state array setter
    const currentDate = todayDateString();                                                // Get current date to set min date in form

    // Check if 'appointments' array already contains appointment with 'formInputAppointmentDate' and 'formInputAppointmentTime'
    // Set 'duplicateAppointment' bool state to true if it does and false if it doesn't
    useEffect(() => {
        appointments.forEach((appointment) => {
            if (appointment.date === formInputAppointmentDate && appointment.time === formInputAppointmentTime) {
                setDuplicateAppointment(true);
                setFormInputMsg("Sorry, an appointment at that date & time already exists");
            }
            else {
                setDuplicateAppointment(false);
                setFormInputMsg("");
            }
        });
    }, [formInputAppointmentDate, formInputAppointmentTime]);

    // Handles Appointment form submit: adds a new appointment to the 'appointments' state array
    function handleAppointmentFormSubmit(event) {
        // Prevent page reload on submit
        event.preventDefault();

        // Check if the entered appointment is already in the array
        if (!duplicateAppointment) {
            const newAppointment = {};
            newAppointment.name = event.target[0].value;
            newAppointment.date = event.target[1].value;
            newAppointment.time = timeConversion(event.target[2].value);
            newAppointment.contact = event.target[3].value;

            // Use spread operator to add new appointment to end of array
            setAppointments((appointments) => [...appointments, newAppointment]);

            // Clear the input fields
            setFormInputAppointmentName("");
            setFormInputAppointmentDate("");
            setFormInputAppointmentTime("");
            setFormInputAppointmentContact("");
        }
    }

    // Updates the 'formInputAppointmentName' state var on every change to the input field
    function handleAppointmentNameInput(event) {
        // Set the state variable
        setFormInputAppointmentName(event.target.value);
    }

    // Updates the 'formInputAppointmentDate' state var on every change to the input field
    function handleAppointmentDateInput(event) {
        // Set the state variable
        setFormInputAppointmentDate(event.target.value);
    }

    // Updates the 'formInputAppointmentTime' state var on every change to the input field
    function handleAppointmentTimeInput(event) {
        // Set the state variable        
        setFormInputAppointmentTime(event.target.value);
    }

    // Updates the 'formInputAppointmentContact' state var on every change to the input field
    function handleAppointmentContactInput(event) {
        // Set the state variable
        setFormInputAppointmentContact(event.target.value);
    }

    // Returns current date as formatted string to set 'min' attribute of the date input in the Appointment Form
    function todayDateString() {
        // format string as YYYY-MM-DD:
        const currentDate = new Date();

        // Day
        let currentDay = currentDate.getDate();
        currentDay = currentDay.toString();
        currentDay = currentDay.length < 2 ? `0${currentDay}` : currentDay;

        // Month
        let currentMonth = currentDate.getMonth() + 1;
        currentMonth = currentMonth.toString();
        currentMonth = currentMonth.length < 2 ? `0${currentMonth}` : currentMonth;

        // Year
        const currentYear = currentDate.getFullYear();

        // Formatted Date
        return `${currentYear}-${currentMonth}-${currentDay}`;
    }

    // Convert 24h time to 12h
    function timeConversion(time) {
        let hour = time.substring(0, 2);
        let min = time.substring(3, 5);

        hour = parseInt(hour);

        if (hour >= 1 && hour <= 11) {
            return (`${hour}:${min} AM`);
        }
        else if (hour >= 13 && hour <= 23) {
            return (`${hour % 12}:${min} PM`);
        }
        else if (hour === 12) {
            return (`12:${min} PM`);
        }
        else {
            return (`12:${min} AM`);
        }
    }

    return (
        <>
            <div>
                <section>
                    <AppointmentForm
                        handleAppointmentFormSubmit={handleAppointmentFormSubmit}
                        handleAppointmentNameInput={handleAppointmentNameInput}
                        handleAppointmentDateInput={handleAppointmentDateInput}
                        handleAppointmentTimeInput={handleAppointmentTimeInput}
                        handleAppointmentContactInput={handleAppointmentContactInput}
                        formInputAppointmentName={formInputAppointmentName}
                        formInputAppointmentContact={formInputAppointmentContact}
                        formInputAppointmentDate={formInputAppointmentDate}
                        formInputAppointmentTime={formInputAppointmentTime}
                        formInputMsg={formInputMsg}
                        contacts={contacts}
                        currentDate={currentDate}
                    />
                </section>
                <hr />
                <section>
                    <Appointments
                        appointments={appointments}
                    />
                </section>
            </div>
        </>
    );
}
