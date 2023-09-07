// form.js - This file renders the JSX for a Contact form
"use client"
export default function ContactsForm(props) {
    return (
        <>
            <h2>Add Contact</h2>
            <form onSubmit={props.handleContactFormSubmit}>
                <div>
                    <label htmlFor="name">Contact Name:</label>
                    <input value={props.formInputName} onChange={props.handleNameInput} required name="name" id="name" type="text" maxLength={25} />
                </div>

                <div>
                    <label htmlFor="phone">Contact Phone:</label>
                    <input value={props.formInputPhone} onChange={props.handlePhoneInput} required name="phone" id="phone" type="tel" maxLength={10} />
                </div>

                <div>
                    <label htmlFor="email">Contact Email:</label>
                    <input value={props.formInputEmail} onChange={props.handleEmailInput} required name="email" id="email" type="email" maxLength={25} />
                </div>
                <button type="submit">Add Contact</button>
            </form>
            <div className="contacts-input-msg">
                <b>{props.formInputNameMsg}</b>
            </div>
        </>
    );
}