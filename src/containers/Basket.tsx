import React, { useState, useEffect } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { AppState } from '../store';
import { removeFromBasket, reduceInBasket } from '../store/basket/actions';
import BasketListItem, { BaskteItem } from '../components/BasketListItem';

export interface BasketProps extends RouteComponentProps {
    basketItems: BaskteItem[];
    remove: (id: number) => void;
    reduce: (id: number) => void;
}

const Basket: React.FC<BasketProps> = ({ basketItems, location, remove, reduce }) => {
    const [ active, setActive ] = useState(false);
    const toggleBasket = () => setActive(active => !active);

    useEffect(() => setActive(false), [location]);

    return <div className="nx-basket">
        <button className="nx-basket__button" onClick={toggleBasket}>Basket</button>
        <ul className="nx-basket__list nx-basket-list">
            {
                active && basketItems.map(bItm => (
                    <BasketListItem { ...bItm }
                        remove={remove}
                        reduce={reduce}
                        key={bItm.id}
                    />
                ))
            }
        </ul>
    </div>;
};

const mapStateToProps = ({ basketItems }: AppState) => ({
    basketItems: basketItems,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    remove: (id: number) => dispatch(removeFromBasket(id)),
    reduce: (id: number) => dispatch(reduceInBasket(id)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Basket));