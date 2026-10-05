import './App1.css'

// Import React components:
import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Import Pages & Components:
import Home_Page from './pages/Home_Page.jsx';
import Trip_Overview_Page from './pages/Trip_Overview_Page.jsx';
import Trip_Details_Page from './pages/Trip_Details_Page.jsx';
import New_Trip_Entry_Page from './pages/New_Trip_Entry_Page.jsx';
import Navigation from './components/Navigation.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';

// Import functions:
import { get_all_from_file } from '../../backend/service.js';

function App() {

    const [selectedTrip, setTripSelected] = useState([]);     // holds trip selected
    const [trips, setTrips] = useState([]);                 // holds trip data

    useEffect(() => {    
        const load_data = async () => {
            const data = await get_all_from_file();
            setTrips(data);
        };
        load_data();                                                  // load data
    }, []);

    return (            
        <div className="app" id="screen">
            <Router>
                <Navigation />
                    <Routes>
                        {/* Public Routes */}
                        <Route path= "/" element={
                            <Home_Page />
                        } />
                        <Route path= "/trip-overview" element={
                            <Trip_Overview_Page setTripSelected={setTripSelected} trips={trips} />
                        } />
                        <Route path = "/trip-details" element={
                            <Trip_Details_Page selectedTrip={selectedTrip} />
                        } />
                        
                        {/* Protected Routes */}
                        <Route path="/create-trip" element={
                            <ProtectedRoute>
                                <New_Trip_Entry_Page setTrips={setTrips} />
                            </ProtectedRoute>
                        } />
                    </Routes> 
            </Router>
            <ToastContainer />
            <footer>© 2025 Kelsey Shanks</footer>
        </div>
    );
}

export default App;