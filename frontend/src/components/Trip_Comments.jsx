import '../App.css';
import { useState, useEffect } from 'react';

function Trip_Comments ( { selectedTrip } ) {

    const [c_comments, setCComments] = useState([]);       // holds Colton's thoughts from trip
    const [k_comments, setKComments] = useState([]);       // holds Kelsey's thoughts from trip

    useEffect(() => {    
        const load_data = async () => {
            setCComments(selectedTrip.c_thoughts);
            setKComments(selectedTrip.k_thoughts);
        };
        load_data();                                                  // load data
    }, []);

    return (
        <div id='photo-gallery' class='photo-gallery'>
            <h4>Colton's Thoughts</h4>
            <p>{c_comments}</p>
            <br></br>
            <h4>Kelsey's Thoughts</h4>
            <p>{k_comments}</p>
            <br></br>
        </div>
        
    );
}

export default Trip_Comments;