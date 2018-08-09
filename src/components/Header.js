import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <div>
        <h1>Expensity App</h1>
        <div>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">Add</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
        </div>
    </div>
);

export default Header;