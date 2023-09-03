export default function Tile(props) {
    // Destructuring the 'name' property and 'description' object property from 'props'
    const { name, description } = props;

    // Get an array of the values of each property in the 'description' object
    const descriptionValues = Object.values(description);

    return (
        <>
            <p className="tile-title">{name}</p>
            {descriptionValues.map((value, index) => {
                return (
                    <p key={index} className="tile">{value}</p>
                );
            })}
        </>
    );
}