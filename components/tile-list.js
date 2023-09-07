// tile-list.js - This component receives either a an array of contacts or an array of appointments and handles each appropriately. 
import Tile from "./tile";
export default function TileList(props) {
    // Extract the array of objects from 'props'
    const objArray = props.objArray;
    return (
        <>
            {/* Render Tile components for each object in array */}
            {objArray.map((obj, index) => {
                // 1. Destructuring the 'name' property from 'obj'
                // 2. Using rest syntax (...) to extract the 'rest' of the properties in 'obj' and store them in an object called 'description'.
                const { name, ...description } = obj;
                return (<Tile key={index} name={name} description={description} />);
            })}
        </>
    );
}