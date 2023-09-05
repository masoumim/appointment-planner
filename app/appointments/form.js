import ContactPicker from "./contact-picker";
export default function AppointmentForm(props) {
    return (
        <>
            <h2>Add Appointment</h2>
            <form onSubmit={props.handleAppointmentFormSubmit}>
                <label>
                    Appointment name / description:
                    <input value={props.formInputAppointmentName} onChange={props.handleAppointmentNameInput} required name="name" id="name" type="text" maxLength={15}/>
                </label>
                <label>
                    Date:
                    <input value={props.formInputAppointmentDate} onChange={props.handleAppointmentDateInput} required name="date" id="date" type="date" min={props.currentDate} />
                </label>
                <label>
                    Time:
                    <input value={props.formInputAppointmentTime} onChange={props.handleAppointmentTimeInput} required name="time" id="time" type="time" />
                </label>
                <label>
                    Contact:
                    <ContactPicker onChange={props.handleAppointmentContactInput} contacts={props.contacts} />
                </label>
                <button type="submit">Add Appointment</button>
            </form>
            <b>{props.formInputMsg}</b>
        </>
    );
}