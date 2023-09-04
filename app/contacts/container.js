// ContactsContainer is a stateful client component that handles state and the logic to change state.
// The methods in this component handle user input for a contacts form as well as adding new contacts to a state array

"use client"
import { useState, useEffect, useContext } from "react"
import ContactsForm from "./form";
import Contacts from "./contacts";
import { ContactsContext } from "@/components/providers";

export default function ContactsContainer() {

    // State variables    
    const [formInputName, setFormInputName] = useState("");             // Contact Form Name value
    const [formInputPhone, setFormInputPhone] = useState("");           // Contact Form Phone value
    const [formInputEmail, setFormInputEmail] = useState("");           // Contact Form Email value
    const [duplicateName, setDuplicateName] = useState(false);          // Boolean state to indicate if contacts array already has name
    const [formInputNameMsg, setFormInputNameMsg] = useState("");       // Name field input feedback message
    const contactsCtx = useContext(ContactsContext);                    // Shared 'contacts' context
    const contacts = contactsCtx[0];                                    // State array of contacts
    const setContacts = contactsCtx[1];                                 // State array setter

    // Check if 'contacts' array already contains person with 'formInputName'
    // Set 'duplicateName' bool state to true if it does and false if it doesn't
    useEffect(() => {
        contacts.forEach((contact) => {
            if (contact.name === formInputName) {
                setDuplicateName(true);
                setFormInputNameMsg("Sorry, a contact with that name already exists");
            }
            else {
                setDuplicateName(false);
                setFormInputNameMsg("");
            }
        });
    }, [formInputName]);

    // Handles Contact form submit: adds a new contact to the 'contacts' state array
    function handleContactFormSubmit(event) {
        // Prevent page reload on submit
        event.preventDefault();

        // Check if the entered name is already in the array
        if (!duplicateName) {
            const newContact = {};
            newContact.name = event.target[0].value;
            newContact.phone = event.target[1].value;
            newContact.email = event.target[2].value;

            // Use spread operator to add new contact to end of array
            setContacts((contacts) => [...contacts, newContact]);

            // Clear the input fields
            setFormInputName("");
            setFormInputPhone("");
            setFormInputEmail("");
        }
    }

    // Updates the 'formInputName' state var on every change to the input field
    function handleNameInput(event) {
        // Set the state variable
        setFormInputName(event.target.value);
    }

    // Updates the 'formInputPhone' state var on every change to the input field
    function handlePhoneInput(event) {
        // Set the state variable
        setFormInputPhone(event.target.value);
    }

    // Updates the 'formInputEmail' state var on every change to the input field
    function handleEmailInput(event) {
        // Set the state variable
        setFormInputEmail(event.target.value);
    }

    return (
        <>
            <div>
                <section>
                    <ContactsForm
                        handleContactFormSubmit={handleContactFormSubmit}
                        formInputName={formInputName}
                        formInputPhone={formInputPhone}
                        formInputEmail={formInputEmail}
                        handleNameInput={handleNameInput}
                        handlePhoneInput={handlePhoneInput}
                        handleEmailInput={handleEmailInput}
                        formInputNameMsg={formInputNameMsg}
                    />
                </section>
                <hr />
                <section>
                    <Contacts contacts={contacts} />
                </section>
            </div>
        </>
    );
}