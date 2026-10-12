import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Home_Page() { // date created and sent

    const navigate = useNavigate();

    const toOverview = async () => {                                         // navigate button Meal_History_Nav
        navigate('/trip-overview');
    }

    const toDetails = async () => {                                      // navigate button Calorie_Overview_Nav
        navigate('/trip-details');
    }

    const toNewEntry = async () => {
        navigate('/new-trip-entry');
    }

    return (
        <>
            <h2 id="home-title">Welcome to Colton and Kelsey's travel blog!</h2>
            <br></br>
            <p id="home-sub-title">There are so many places we are able to travel to while we live in Japan that we 
                normally wouldn't be able to otherwise. This blog details our travel experiences and reflections.</p>
            
            <button id="viewTrips" onClick={toOverview()}>Trips</button>
        </>
    );
}

export default Home_Page;