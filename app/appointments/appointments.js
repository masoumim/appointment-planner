import TileList from "@/components/tile-list";
export default function Appointments(props) {
    // Extract the array of contact objects from 'props'
    const appointments = props.appointments;    
    return (
        <>
            <h2>Appointments</h2>
            <TileList objArray={appointments} />
        </>
    );
}