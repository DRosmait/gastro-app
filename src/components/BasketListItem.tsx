import React from 'react';

import DishInfo, { DishInfoProps } from './DishInfo';

export interface BaskteItem {
    id: number;
    dish: DishInfoProps;
    amount: number;
}

interface BaskteListItemProps extends BaskteItem {
    remove: (id: number) => void;
    reduce: (id: number) => void;
}

const BasketListItem: React.FC<BaskteListItemProps> = ({ id, dish, amount, remove, reduce }) => {
    return <li className="nx-bastet-list__item nx-basket-item">
        <div className="nx-basket-item__dish">
            <DishInfo { ...dish } />
        </div>
        <h3 className="nx-basket-item__amount">Amount: {amount}</h3>
        <div className="nx-basket-item__actions">
            <button className="nx-basket__remove" onClick={() => remove(id)}>Remove</button>
            <button className="nx-basket__reduce" onClick={() => reduce(id)}>-1</button>
        </div>
    </li>
}

export default BasketListItem;