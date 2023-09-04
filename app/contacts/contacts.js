import TileList from "@/components/tile-list";
export default function Contacts(props) { 
    return (
        <>
            <h2>Contacts</h2>
            <TileList objArray={props.contacts} />
        </>
    );
}