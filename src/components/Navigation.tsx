import React from 'react';
import { NavLink } from 'react-router-dom';

import Basket from '../containers/Basket';

const Navigation: React.FC = () => {
    return <nav className="nx-navigation">
        <ul className="nx-navigation__list nx-nav-list">
            <li className="nx-nav-list__item">
                <NavLink to="/">Home</NavLink>
            </li>
            <li className="nx-nav-list__item">
                <NavLink to="/menu">Menu</NavLink>
            </li>
            <li className="nx-nav-list__item">
                <NavLink to="/tables">Tables</NavLink>
            </li>
            <li className="nx-nav-list__item">
                <NavLink to="/contact">Contact Us</NavLink>
            </li>
        </ul>

        <Basket />
    </nav>
};

export default Navigation;