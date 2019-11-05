import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { AppState } from '../store';
import Dish from '../components/Dish';
import { DishInfoProps } from '../components/DishInfo';
import { addToBasket } from '../store/basket/actions';
import { BaskteItem } from '../components/BasketListItem';

interface DishesPage {
    dishes: DishInfoProps[];
    addToBasket: (payload: BaskteItem) => void;
}

const DishesPage: React.FC<DishesPage> = ({ dishes, addToBasket }) => {
    return <section className="nx-section">
        <div className="nx-container">
            <h1 className="nx-section__title">This is our Menu, check what will do you happy...</h1>

            <ul className="nx-menu-list">
                {
                    dishes.map((m) => (
                        <li className="nx-menu-list__item" key={m.id}>
                            <Dish {...m} addToBasket={addToBasket} key={m.id} />
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

const setDispatchToProps = (dispatch: Dispatch) => ({
    addToBasket: (payload: BaskteItem) => dispatch(addToBasket(payload)),
})

export default connect(setStateToProps, setDispatchToProps)(DishesPage);