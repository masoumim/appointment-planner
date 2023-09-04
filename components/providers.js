/*
Providers.js - This file sets up the React 'Context' feature which enables sharing state data 
between components without having to pass them down manually as props.

The Context feature is used here two purposes:
1. To persist and share an array state variable 'contacts' which will be shared with both the 'Appointments' component and the 'Contacts' component.
2. To persist an array state of appointments between the appointments route and the contacts route.

The Providers component below accepts a 'children' prop from the RootLayout component located in app/layout.js
This children prop represents every component in the component tree, hence the ability to share a state variable in a global way.
*/

"use client"

import { createContext, useState } from 'react';

// Create the context
export const ctx = createContext();

// Create and export the 'Providers' component
export default function Providers({children}) {

    // Create the shared state objects
    const [contacts, setContacts] = useState([]);
    const [appointments, setAppointments] = useState([]);

    return (
        <ctx.Provider value={[contacts, setContacts, appointments, setAppointments]}>
            {children}
        </ctx.Provider>
    );
}
