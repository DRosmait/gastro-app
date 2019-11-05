import React from 'react';

export interface DishInfoProps {
    id: number;
    name: string;
    description: string;
    price: number;
}

const DishInfo: React.FC<DishInfoProps> = ({ id, name, price, description }) => {
    return (
        <div className="nx-dish__info" key={id}>
            <div className="nx-dish__name">{name}</div>
            <div className="nx-dish__price">${price}</div>
            <div className="nx-dish__description">{description}</div>
        </div>
    );
}

export default DishInfo;