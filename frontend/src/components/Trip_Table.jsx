import '../App.css';
import { useState, useEffect } from 'react';

function Trip_Table ( { selectedTrip } ) {

    const [hotels, setHotels] = useState([]);       // holds hotels from trip
    const [foods, setFoods] = useState([]);         // holds foods from trip
    const [places, setPlaces] = useState([]);       // holds places from trip

    useEffect(() => {    
        const load_data = async () => {
            setHotels(selectedTrip.hotels);
            setFoods(selectedTrip.foods);
            setPlaces(selectedTrip.places);
        };
        load_data();                                                  // load data
    }, []);

    return (
        <table id="details-tbl">
            <tbody>
                <tr>
                    <td>Hotels</td>
                    <td>
                        <ul>
                            {hotels.map((hotel, i) => (
                                <li key={i}>{hotel}</li>
                            ))}
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>Foods</td>
                    <td>
                        <ul>
                            {foods.map((food, i) => (
                                <li key={i}>{food}</li>
                            ))}
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>Places</td>
                    <td>
                        <ul>
                            {places.map((place, i) => (
                                <li key={i}>{place}</li>
                            ))}
                        </ul>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default Trip_Table;