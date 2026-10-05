import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Login_Page() { // date created and sent

    const navigate = useNavigate();

    const check_creds = async () => {
        if 
    }

    

    const toCreate = async () => {                                         // navigate button Meal_History_Nav
        navigate('/create-trip');
    }

    


    return (
        <>
            <h2 id="home-title">Please log in to access this feature:</h2>
            <br></br>
            <p id="home-sub-title">There are so many places we are able to travel to while we live in Japan that we 
                normally wouldn't be able to otherwise. This blog details our travel experiences and reflections.</p>
            
            <button id="viewTrips" onClick={if check}>Trips</button>
        </>
    );
}

export default Home_Page;