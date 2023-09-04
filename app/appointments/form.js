export default function AppointmentForm(props){
    return (
        <>
            <h2>Add Appointment</h2>
            <form onSubmit={props.handleAppointmentFormSubmit}>
                <input value={props.formInputAppointmentName} onChange={props.handleAppointmentNameInput} required name="name" id="name" type="text" />                
                <input value={props.formInputAppointmentDate} onChange={props.handleAppointmentDateInput} required name="date" id="date" type="text" />
                <input value={props.formInputAppointmentTime} onChange={props.handleAppointmentTimeInput} required name="time" id="time" type="text" />                
                {/* ContactPicker Goes here */}
                <button type="submit">Add Appointment</button>
            </form>
            <b>{props.formInputMsg}</b>
        </>
    );
}