import React from 'react';
import { Link } from 'react-router-dom';

import DishInfo from './DishInfo';

export interface DishProps {
    id: number;
    name: string;
    description: string;
    price: number;
}

const Dish: React.FC<DishProps> = (props) => {
    return (
        <div className="nx-dish" key={props.id}>
            <DishInfo { ...props } />
            <div className="nx-dish__action">
                <button className="nx-dish__btn nx-dish__btn--add-to-busket">Add to basket</button>
                <Link className="nx-dish__btn nx-dish__btn--wirte-review" to={`/reviews/${props.id}`}>Write review</Link>
            </div>
        </div>
    );
}

export default Dish;