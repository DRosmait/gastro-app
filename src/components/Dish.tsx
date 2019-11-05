import React from 'react';
import { Link } from 'react-router-dom';

import DishInfo, { DishInfoProps } from './DishInfo';
import { BaskteItem } from './BasketListItem';

export interface DishProps extends DishInfoProps {
    addToBasket: (payload: BaskteItem) => void;
}

const Dish: React.FC<DishProps> = (props) => {
    const onBtnClick = () => props.addToBasket({
        id: props.id,
        dish: {
            id: props.id,
            name: props.name,
            description: props.description,
            price: props.price,
        },
        amount: 1,
    })
    return (
        <div className="nx-dish" key={props.id}>
            <DishInfo { ...props } />
            <div className="nx-dish__action">
                <button className="nx-dish__btn nx-dish__btn--add-to-busket" onClick={onBtnClick}>Add to basket</button>
                <Link className="nx-dish__btn nx-dish__btn--wirte-review" to={`/reviews/${props.id}`}>Write review</Link>
            </div>
        </div>
    );
}

export default Dish;