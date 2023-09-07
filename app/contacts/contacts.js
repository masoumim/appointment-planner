// contacts.js - This file receives an array of contacts as props from container.js and uses them to render a TileList of contacts 
import TileList from "@/components/tile-list";
export default function Contacts(props) { 
    return (
        <>
            <h2>Contacts</h2>
            <TileList objArray={props.contacts} />
        </>
    );
}