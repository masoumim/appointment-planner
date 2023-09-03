import TileList from "@/components/tile-list";
export default function Contacts(props) {
    // Extract the array of contact objects from 'props'
    const contacts = props.contacts;    
    return (
        <>
            <h2>Contacts</h2>
            <TileList objArray={contacts} />
        </>
    );
}