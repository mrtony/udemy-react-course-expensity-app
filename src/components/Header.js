import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { startLogout } from '../actions/auth';

export const Header = ({startLogout}) => (
    <div>
        <h1>Expensity App</h1>
        <div>
        <NavLink to="/dashboard" activeClassName="is-active">Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">Add</NavLink>
        </div>
        <button onClick={startLogout}>Logout</button>
    </div>
);

const mapDispatchToProps = dispatch => (
  {
    startLogout: () => dispatch(startLogout())
  }
);

export default connect(undefined, mapDispatchToProps)(Header);