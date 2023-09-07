/*
contact-picker.js - This file contains a component that renders an input select drop-down 
list containing all of the contacts that have been added via the contacts form.
*/
export default function ContactPicker(props){    
    return(
        <select required onChange={props.onChange}>
            <option value={""}>{"Select a contact"}</option>
            {props.contacts.map((contact, index)=>{                
                return(<option key={index} value={contact.name}>{contact.name}</option>);
            })}
        </select>
    );
}