export default function Tile(props) {
    // Destructuring the 'name' property and 'description' object property from 'props'
    const { name, description } = props;

    // Get an array of the values of each property in the 'description' object
    const descriptionValues = Object.values(description);

    // Conditionally render either a Contact or Appointment
    // (Contact's have a name property + 2 additional properties whereas Appointments have 3 additional properties)
    // Render Contact:
    if (descriptionValues.length === 2) {
        return (
            <>
                <div className="contact-tile">
                    <div className="contact-tile-title">
                        <div className="contact-tile-title-icon" />
                        <p>{name}</p>
                    </div>
                    {descriptionValues.map((value, index) => {
                        return (
                            <div className={`contact-tile-prop-${index}`}>
                                <div className={`contact-tile-prop-${index}-icon`} />
                                <p key={index}>{value}</p>
                            </div>
                        );
                    })}
                </div>
            </>
        );
    }
    // Render Appointment:
    else {
        return (
            <>
                <div className="appointment-tile">
                    <div className="appointment-tile-title">
                        <div className="appointment-tile-title-icon" />
                        <p>{name}</p>
                    </div>
                    {descriptionValues.map((value, index) => {
                        return (
                            <div className={`appointment-tile-prop-${index}`}>
                                <div className={`appointment-tile-prop-${index}-icon`} />
                                <p key={index}>{value}</p>
                            </div>
                        );
                    })}
                </div>
            </>
        );
    }
}