import * as React from 'react';
import { Component } from 'react';
interface NavBarProps {
    label: string
}
/** stateless functional component */
const NavBar = ({label}: NavBarProps) => { /** destructuring props  */
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">{label}</a>
        </nav>
    );
}

export default NavBar;