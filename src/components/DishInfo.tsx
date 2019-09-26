import React from 'react';
import { DishProps } from './Dish';

const DishInfo: React.FC<DishProps> = ({ id, name, price, description }) => {
    return (
        <div className="nx-dish__info" key={id}>
            <div className="nx-dish__name">{name}</div>
            <div className="nx-dish__price">${price}</div>
            <div className="nx-dish__description">{description}</div>
        </div>
    );
}

export default DishInfo;