import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Hamburger.css';
import { Link } from 'react-router-dom';

//***** Followed this tutorial to create the hamburger navigation menu:
// https://www.digitalocean.com/community/tutorials/react-react-burger-menu-sidebar 
// written by Bradley Kouchi on Octover 20, 2020.******/

export default props => {
    return (
        <Menu right >
          <Link to="/home">Home</Link>
          <Link to="/trip-overview">Trips Overview</Link>
          <Link to="/create-trip">Add Trip</Link>
        </Menu>
    );

};