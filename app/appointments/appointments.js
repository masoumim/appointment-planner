import TileList from "@/components/tile-list";
export default function Appointments(props) { 
    return (
        <>
            <h2>Appointments</h2>
            <TileList objArray={props.appointments} />
        </>
    );
}