"use client"

export default function ContactsForm({handleContactFormSubmit, formInputName, handleNameInput, formInputPhone, handlePhoneInput, formInputEmail, handleEmailInput}) {
    return (
        <>
            <form onSubmit={handleContactFormSubmit}>
                <input value={formInputName} onChange={handleNameInput} required name="name" id="name" type="text" />
                <input value={formInputPhone} onChange={handlePhoneInput} required name="phone" id="phone" type="tel" />
                <input value={formInputEmail} onChange={handleEmailInput} required name="email" id="email" type="email" />
                <button type="submit">Add Contact</button>
            </form>            
        </>
    );
}