/*
layout.js - This layout file is specific to the Contacts component.
It uses a CSS Module file located in the same directory as this layout file.
*/

import styles from './styles.module.css'
 
export default function ContactsLayout({ children }) {
  return <section className={styles.contacts}>{children}</section>
}