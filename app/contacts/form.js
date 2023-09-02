"use client"

export default function ContactsForm() {

    function foo(event) {
        event.preventDefault();
        console.log(event.target[0].value);
    }
    
    

    return (
        <>
            <form onSubmit={foo}>
                <input value={} onChange={} required name="name" type="text" />
                <input value={} onChange={} required name="phone" type="tel" />
                <input value={} onChange={} required name="email" type="email" />
                <button type="submit">Add Contact</button>
            </form>            
        </>
    );
}