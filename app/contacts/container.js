"use client"
import ContactsForm from "./form";
import Contacts from "./contacts";
import { useState, useEffect } from "react"

export default function ContactsContainer() {

    // State variables
    const [contacts, setContacts] = useState([]);                 // The list of contacts
    const [formInputName, setFormInputName] = useState("");       // Contact Form Name value
    const [formInputPhone, setFormInputPhone] = useState("");     // Contact Form Phone value
    const [formInputEmail, setFormInputEmail] = useState("");     // Contact Form Email value
    const [duplicateName, setDuplicateName] = useState(false);    // Boolean state to indicate if contacts array already has name


    // Adds a new contact to the 'contacts' state variable
    function addContact(contact) {
        // TODO: Check if duplicate is false, if so, add contact
        if (!duplicateName) {
            console.log('No Duplicate - adding contact!');
        }
        else {
            console.log('Duplicate Found!');
        }

        // Use spread operator to add new contact to end of array
        setContacts(contact);
    }

    useEffect(() => {
        console.log(`useEffect called!`);
        // Check if 'contacts' array already contains person with 'formInputName'
        contacts.forEach((contact) => {
            if (contact.name === formInputName) {
                setDuplicateName(true);
            }
            else {
                setDuplicateName(false);
            }
        });
    },[formInputName]);

    
    // Handles Contact form submit
    function handleContactFormSubmit(event) {
        // Prevent page reload on submit
        event.preventDefault();
    }

    // Updates the 'formInputName' state var on every change to the input field
    function handleNameInput(event) {
        console.log('handleNameInput called...calling setFormInputName');
        // Set the state variable
        setFormInputName(event.target.value);
        console.log(`setFormInputName called, formInputName state var value = ${formInputName}`);
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
            <ContactsForm
                handleContactFormSubmit={handleContactFormSubmit}
                formInputName={formInputName}
                formInputPhone={formInputPhone}
                formInputEmail={formInputEmail}
                handleNameInput={handleNameInput}
                handlePhoneInput={handlePhoneInput}
                handleEmailInput={handleEmailInput}
            />
        </>
    );
}