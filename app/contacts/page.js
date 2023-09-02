import Contacts from "./contacts";
import ContactsForm from "./form";

export default function ContactsPage() {
  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactsForm />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <Contacts />
      </section>
    </div>
  );
}