import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function New_Trip_Entry_Page ( {setTrips} ) {  // will update state when adding

    const navigate = useNavigate();
    const [name, setFeedName] = useState('');
    const [s_date, setStartDate] = useState('');
    const [e_date, setEndDate] = useState('');
    const [hotels, setHotels] = useState('');
    const [foods, setFoods] = useState('');
    const [places, setPlaces] = useState('');

    const addEntry = async () => {                              // adds feedback to database                        
        //need to write
        }
    };

    return (
        <>
            <h2>Submit Trip Details</h2>
            <form method="POST" id="trip-entry-form">
                <label htmlFor="name"><strong>Name:</strong></label>
                <br></br>
                <input type="text" id="name" name="name" onChange={e => setName(e.target.value)} required/>
                <br></br>
                <label htmlFor="start_date"><strong>Start Date:</strong></label>
                <br></br>
                <input type="date" id="date" name="date" onChange={e => setStartDate(e.target.value)} required/>
                <br></br>
                <label htmlFor="end_date"><strong>End Date:</strong></label>
                <br></br>
                <input type="date" id="date" name="date" onChange={e => setEndDate(e.target.value)} required/>
                <br></br>

                <!--Work on this!-->

                <label htmlFor="hotels"><strong>Hotel:</strong></label>
                <br></br>
                <!--need to come up with way to input one or more-->
                <br></br>
                <label htmlFor="foods"><strong>Foods:</strong></label>
                <br></br>
                <!--need to come up with way to input one or more-->
                <br></br>
                <label htmlFor="places"><strong>Places:</strong></label>
                <br></br>
                <!--need to come up with way to input one or more-->
                <br></br>
                <label htmlFor="photos"><strong>Photos:</strong></label>
                <br></br>
                <!--need to come up with way to input one or more-->
                <br></br>

                <button type="submit" onClick={e =>{
                    e.preventDefault();
                    //addEntry();
                }}>Submit Entry</button>
            </form>
        </>
    );
}

export default New_Trip_Entry_Page;