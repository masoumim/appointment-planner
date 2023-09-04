/*
Providers.js - This file sets up the React 'Context' feature which enables sharing state data 
between components without having to pass them down manually as props.

The Context feature is used here to share an array state variable 'contacts' which will be shared
with both the 'Appointments' component and the 'Contacts' component.

The Providers component below accepts a 'children' prop from the RootLayout component located in app/layout.js
This children prop represents every component in the component tree, hence the ability to share a state variable in a global way.
*/

"use client"

import { createContext, useState } from 'react';

// Create the context
export const ContactsContext = createContext();

// Create and export the 'Providers' component
export default function Providers({children}) {

    // Create the shared state object
    const [contacts, setContacts] = useState([]);

    return (
        <ContactsContext.Provider value={[contacts, setContacts]}>
            {children}
        </ContactsContext.Provider>
    );
}
