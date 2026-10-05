import '../App.css';
import { useState, useEffect } from 'react';

function Trip_Gallery ( { selectedTrip } ) {

    const [photos, setPhotos] = useState([]);       // holds photos from trip

    useEffect(() => {    
        const load_data = async () => {
            setPhotos(selectedTrip.photos);
        };
        load_data();                                                  // load data
    }, []);

    return (
    <div id="trip-gallery">
        {photos.map((url, i) => (
            <img
                key={i}
                src={url}
                alt={`Gallery item ${i + 1}`}
                style={{ width: '200px', margin: '10px' }}
            />
        ))}
    </div>
    );
}

export default Trip_Gallery;