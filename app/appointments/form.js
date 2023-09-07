// form.js - This file renders the JSX for an Appointment form
import ContactPicker from "./contact-picker";
export default function AppointmentForm(props) {
    return (
        <>
            <h2>Add Appointment</h2>
            <form onSubmit={props.handleAppointmentFormSubmit}>
                <div>
                    <label>Name:</label>
                    <input value={props.formInputAppointmentName} onChange={props.handleAppointmentNameInput} required name="name" id="name" type="text" maxLength={15} />
                </div>
                <div>
                    <label>Date:</label>
                    <input value={props.formInputAppointmentDate} onChange={props.handleAppointmentDateInput} required name="date" id="date" type="date" min={props.currentDate} />
                </div>
                <div>
                    <label>Time:</label>
                    <input value={props.formInputAppointmentTime} onChange={props.handleAppointmentTimeInput} required name="time" id="time" type="time" />
                </div>
                <div>
                    <label>Contact:</label>
                    <ContactPicker onChange={props.handleAppointmentContactInput} contacts={props.contacts} />
                </div>
                <button type="submit">Add Appointment</button>
            </form>
            <div className="appointments-input-msg">
                <b>{props.formInputMsg}</b>
            </div>
        </>
    );
}