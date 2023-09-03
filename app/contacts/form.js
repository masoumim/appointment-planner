"use client"
export default function ContactsForm(props) {
    return (
        <>
            <h2>Add Contact</h2>
            <form onSubmit={props.handleContactFormSubmit}>
                <input value={props.formInputName} onChange={props.handleNameInput} required name="name" id="name" type="text" />
                <input value={props.formInputPhone} onChange={props.handlePhoneInput} required name="phone" id="phone" type="tel" />
                <input value={props.formInputEmail} onChange={props.handleEmailInput} required name="email" id="email" type="email" />
                <button type="submit">Add Contact</button>
            </form>
            <b>{props.formInputNameMsg}</b>
        </>
    );
}