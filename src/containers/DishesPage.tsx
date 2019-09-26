import React from 'react';
// import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { AppState } from '../store';
import Dish from '../components/Dish';
import { DishProps } from '../components/Dish';

interface DishesPage {
    dishes: DishProps[];
}

const DishesPage: React.FC<DishesPage> = ({ dishes }) => {
    return <section className="nx-section">
        <div className="nx-container">
            <h1 className="nx-section__title">This is our Menu, check what will do you happy...</h1>

            <ul className="nx-menu-list">
                {
                    dishes.map((m) => (
                        <li className="nx-menu-list__item" key={m.id}>
                            <Dish {...m} key={m.id} />
                        </li>
                    ))
                }
            </ul>
        </div>
    </section>
}

const setStateToProps = ({ dishes }: AppState) => ({
    dishes,
});

export default connect(setStateToProps)(DishesPage);