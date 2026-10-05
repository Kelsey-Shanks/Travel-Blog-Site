import { useState } from 'react';
import { Link } from 'react-router-dom';

function Trip_Overview_Page ( {setTripSelected, trips}) {  // used for setting details state

    return (   
    <>
        <h2>Trip Overview</h2>
        <div>
            <ul>
                {trips.map((entry, i) => (
                    <li key={i}>
                        <Link 
                            to={"/trip-details"}
                            onClick={() => setTripSelected(entry)}
                        >{entry.name} &lpar;{entry.start_d} - {entry.end_d}</Link>
                    </li>
                ))}
            </ul>
        </div>       
    </>
    );
}

export default Trip_Overview_Page;