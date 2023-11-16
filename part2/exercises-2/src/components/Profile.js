import './styles.css';
import Button from './Button';
import oceans from './oceans.json';

function Profile() {
    // Mapping each ocean object to a JSX element
    const oceanListItems = oceans.map(ocean => (
        <div key={ocean.id} className={`${ocean.fishCheck === "true" ? "isAFish" : "profile"}`}>
            <img src={ocean.image} alt={ocean.name} className="img"/>
            <ul>
                <li>{ocean.fact1}</li>
                <li>{ocean.fact2}</li>
                <li>{ocean.fact3}</li>
            </ul>
        </div>
    ));

    return (
        <div>
            <h3>Fun Facts:</h3>
            {oceanListItems}
            <Button />
        </div>
    );
}

export default Profile;