"use client"
export default function ContactsForm(props) {
    return (
        <>
            <h2>Add Contact</h2>
            <form onSubmit={props.handleContactFormSubmit}>
                <label>
                    Contact Name:
                    <input value={props.formInputName} onChange={props.handleNameInput} required name="name" id="name" type="text" maxLength={25}/>
                </label>
                <label>
                    Contact Phone:
                    <input value={props.formInputPhone} onChange={props.handlePhoneInput} required name="phone" id="phone" type="tel" maxLength={10}/>
                </label>
                <label>
                    Contact Email:
                    <input value={props.formInputEmail} onChange={props.handleEmailInput} required name="email" id="email" type="email" maxLength={35}/>
                </label>
                <button type="submit">Add Contact</button>
            </form>
            <b>{props.formInputNameMsg}</b>
        </>
    );
}