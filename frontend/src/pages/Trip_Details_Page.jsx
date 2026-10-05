import { useState } from 'react';
import Trip_Table from '../components/Trip_Table.jsx';
import Trip_Gallery from '../components/Trip_Gallery.jsx';
import Trip_Comments from '../components/Trip_Comments.jsx';

function Trip_Details_Page ( {selectedTrip} ) {   // uses selected for details

    return (
        <>
            <h2>Trip Details</h2>
            <h3>{selectedTrip.name} &lpar;{selectedTrip.start_d} - {selectedTrip.end_d}&rpar;</h3>
            <Trip_Table selectedTrip={selectedTrip}/>
            <Trip_Gallery selectedTrip={selectedTrip}/>
            <Trip_Comments selectedTrip={selectedTrip}/>
        </>    
    );
}

export default Trip_Details_Page;