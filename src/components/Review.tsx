import React from 'react';

export interface Product {
    id: number;
    name: string;
    price: number;
}

export interface Review {
    product: Product;
    userName: string;
    reviewText: string;
    date: number;
    modifier?: string;
}

interface ReviewItemProps {
    review: Review;
}

const ReviewItem: React.FC<ReviewItemProps> = ({ review: { product, userName, reviewText, date, modifier }}) => {
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