"use client"
import ContactsForm from "./form";
import Contacts from "./contacts";
import { useState } from "react"

export default function ContactsContainer() {
    const [contacts, setContacts] = useState();
    const [contactFormInput, setContactFormInput] = useState();

    function addContact(contact) {
        setContacts(contact);
    }

    // Updates contact form input state variable on every change to the input field
    function handleSearchBarInput(event) {
        // Set the state variable
        setSearchBarInput(event.target.value);
    }

    return (
        <>
            <ContactsForm addContact={addContact} />
        </>
    );
}