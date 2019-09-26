import React from 'react';

import { DishProps } from './Dish';

export interface Review {
    product: DishProps;
    userName: string;
    reviewText: string;
    date: number;
}

interface ReviewItemProps extends Review {
    modifier?: string;
}

const ReviewItem: React.FC<ReviewItemProps> = ({ product, userName, reviewText, date, modifier }) => {
    return <li className={`nx-review ${modifier}`}>
        <div className="nx-review__inner">
            <div className="nx-review__product nx-product">
                <div className="nx-product__name">{product.name}</div>
                <div className="nx-product__price">${product.price}</div>
            </div>
            <div className="nx-review__user-section">
                <div className="nx-review__username">{userName}</div>
                <div className="nx-review__date">{date}</div>
                <div className="nx-review__text">{reviewText}</div>
            </div>
        </div>
    </li>
}

export default ReviewItem;