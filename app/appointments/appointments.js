// appointments.js - This file receives an array of appointments as props from container.js and uses them to render a TileList of appointments 
import TileList from "@/components/tile-list";
export default function Appointments(props) { 
    return (
        <>
            <h2>Appointments</h2>
            <TileList objArray={props.appointments} />
        </>
    );
}